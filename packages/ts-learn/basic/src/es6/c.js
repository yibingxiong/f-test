"use strict";
exports.__esModule = true;
var a_1 = require("./a"); // 批量导入
var All = require("./a"); // 导入模块中的所有成员，绑定在 All 上
var a_2 = require("./a"); // 不加{}，导入默认
console.log(a_1.a, a_1.b, a_1.c);
var p = {
    x: 1,
    y: 1
};
console.log(All);
a_2["default"]();
