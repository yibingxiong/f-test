import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server'
import React from 'react'
import path from 'path'
import { renderToString } from 'react-dom/server'
import fs from 'fs'
import vm from 'vm'
// import App from '../src/App-node'
import express from 'express'

const staticPath = path.join(__dirname, '../dist/web')
const serverBundleMainFilePath = path.join(__dirname, '../dist/node/main.js')
const template = fs.readFileSync(path.join(__dirname, '../dist/web/index.html'), {encoding: 'utf-8'})
const webStats = path.resolve(
    __dirname,
    '../dist/web/loadable-stats.json',
)

const app = express();

app.use(express.static(staticPath))

// 入口文件
const mainFile = fs.readFileSync(serverBundleMainFilePath, { encoding: 'utf-8' })

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

vm.runInNewContext(mainFile, sandbox);
const Main = sandbox.module.exports;

const App = Main.default;
const context = {}

const Router = App({
    context,
    location: '/abcdef'
});

const extractor = new ChunkExtractor({
    statsFile: webStats,
    entrypoints: ['main']  // 入口entry
});

const html = renderToString(
    React.createElement(
        ChunkExtractorManager,
        { extractor },
        Router
    )
)

console.log(html)
// You can now collect your script tags
const scriptTags = extractor.getScriptTags() // or extractor.getScriptElements();
// You can also collect your "preload/prefetch" links
const linkTags = extractor.getLinkTags() // or extractor.getLinkElements();
// And you can even collect your style tags (if you use "mini-css-extract-plugin")
const styleTags = extractor.getStyleTags() // or extractor.getStyleElements();

// console.log(html)

function generateContext(url: string,) {
    const context: { url?: string } = {}

    const Root = App({
        context,
        location: url,
    });
    return {
        Root,
        context,
    }

}

function generateHTML(Root: React.ReactNode) {
    const html = renderToString(
        React.createElement(
            ChunkExtractorManager,
            { extractor },
            Root
        )
    )
    const newHtml = template
        .replace('<!-- server-title -->', extractor.getLinkTags())
        .replace('<!-- server-title -->', '标题')
        .replace('<!-- server-html -->', html)
        .replace('<!-- server-script -->', extractor.getScriptTags())
    return newHtml;
}

app.get('*', (req, res) => {
    const url = req.url;
    const { Root, context } = generateContext(url);

    if (context.url) {
        res.status(301);
        res.redirect(context.url);
        return res.end();
    }
    const html = generateHTML(Root);
    res.setHeader('content-type', 'text/html;charset=UTF-8');
    res.end(html);
});

app.listen(process.env.PORT || 8080)