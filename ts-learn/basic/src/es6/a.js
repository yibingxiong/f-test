"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.hello = exports.G = exports.f = exports.c = exports.b = exports.a = void 0;
// 单独导出
exports.a = 1;
// 批量导出
var b = 2;
exports.b = b;
var c = 3;
exports.c = c;
// 导出函数
function f() { }
exports.f = f;
// 导出时起别名
function g() { }
exports.G = g;
// 默认导出，无需函数名
function default_1() {
    console.log("I'm default");
}
exports["default"] = default_1;
// 引入外部模块，重新导出
var b_1 = require("./b");
__createBinding(exports, b_1, "str", "hello");
