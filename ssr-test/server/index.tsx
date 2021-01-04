import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server'
import React from 'react'
import path from 'path'
import { renderToString } from 'react-dom/server'
import fs from 'fs'
import vm from 'vm'
import { matchPath } from 'react-router-dom'
import { routes } from '../src/App-node'
// import App from '../src/App-node'
// import express from 'express'


// 入口文件
const mainFile = fs.readFileSync(path.join(__dirname, '../dist/node/main.js'), { encoding: 'utf-8' })

const sandbox = {
    require: (p: string) => {
        if (p) {
            return require(path.join(__dirname, '../dist/node', p))
        }
        return require(p);
    },
    module,
    console,
}

vm.runInNewContext(mainFile, sandbox);
const Main = sandbox.module.exports;

console.log(Main.routes)

routes.some(route => {
    // use `matchPath` here
    const match = matchPath('/abcdef', route);
    console.log('match', match)
});


const nodeStats = path.resolve(
    __dirname,
    '../dist/node/loadable-stats.json',
)

const webStats = path.resolve(
    __dirname,
    '../dist/web/loadable-stats.json',
)

const App = Main.default;
const context = {}

const Router = App({
    context,
    location: '/abcdef'
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
// eslint-disable-next-line @typescript-eslint/no-var-requires
const a = require(webStats);

const extractor = new ChunkExtractor({
    stats: a,
    entrypoints: ['main']  // 入口entry
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
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
