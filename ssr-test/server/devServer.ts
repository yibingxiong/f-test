import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server'
import React from 'react'
import path from 'path'
import { renderToString } from 'react-dom/server'
import fs from 'fs'
import vm from 'vm'
import express from 'express'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpack from 'webpack'
import webpackHotMiddleware from 'webpack-hot-middleware'

const staticPath = path.join(__dirname, '../dist/web')
const app = express();
let isStart = false;

console.log('pending...')

app.get('/favicon.ico', (req, res) => {
  res.status(404);
  res.end('404');
})

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require(path.join(__dirname, '../build/webpack.config.js'));
const compiler = webpack(config);

// 告知 express 使用 webpack-dev-middleware，
// 以及将 webpack.config.js 配置文件作为基础配置。
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: '/',
    writeToDisk(filePath) {
      return true;
      if (/\/dist\/node/.test(filePath) || /\/loadable-stats.json/.test(filePath)) {
        return true;
      }
      return false
    },
  })
);

app.use(webpackHotMiddleware(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 5000 
}));

app.use(express.static(staticPath))
app.use(express.static(path.join(__dirname, '../dist/web')))

const serverBundleMainFilePath = path.join(__dirname, '../dist/node/main.js')
const template = fs.readFileSync(path.join(__dirname, 'template.html'), { encoding: 'utf-8' })
const webStats = path.resolve(
  __dirname,
  '../dist/web/loadable-stats.json',
)

// 入口文件

const sandbox = {
  require: (p: string) => {
    if (p.indexOf('/') === 0 || p.indexOf('.') === 0) {
      return require(path.join(__dirname, '../dist/node', p))
    }
    return require(p);
  },
  module,
  console,
}

let App;
let Root: React.ReactNode;
let context: { url?: string };
let extractor: ChunkExtractor;
let url = '/';

function generateContext(url: string) {
  const mainFile = fs.readFileSync(serverBundleMainFilePath, { encoding: 'utf-8' })
  vm.runInNewContext(mainFile, sandbox);
  const Main = sandbox.module.exports;

  App = Main.default;
  extractor = new ChunkExtractor({
    statsFile: webStats,
    entrypoints: ['main']  // 入口entry
  });
  context = {}

  Root = App({
    context,
    location: url,
  });

}

function generateHTML(Root: React.ReactNode, extractor: ChunkExtractor) {
  const html = renderToString(
    React.createElement(
      ChunkExtractorManager,
      { extractor },
      Root
    )
  )
  const newHtml = template
    .replace('<!-- server-link -->', extractor.getLinkTags())
    .replace('<!-- server-title -->', '标题')
    .replace('<!-- server-html -->', html)
    .replace('<!-- server-script -->', extractor.getScriptTags())
  return newHtml;
}

compiler.hooks.done.tap('done', () => {
  console.log('--------done-------')
  generateContext(url)
  startServer();
})

function startServer() {
  if (isStart || require.main !== module) {
    return;
  }
  app.get('*', (req, res) => {
    url = req.url;
    generateContext(url);
    if (context.url) {
      res.status(301);
      res.redirect(context.url);
      return res.end();
    }
    const html = generateHTML(Root, extractor);
    res.setHeader('content-type', 'text/html;charset=UTF-8');
    res.end(html);
  });
  app.listen(process.env.PORT || 8080, () => {
    console.log('listen at:', process.env.PORT || 8080)
    isStart = true;
  })
}
