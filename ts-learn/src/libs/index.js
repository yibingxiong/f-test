"use strict";
exports.__esModule = true;
var jquery_1 = require("jquery");
var module_lib_1 = require("./module-lib");
var umd_lib_1 = require("./umd-lib");
jquery_1["default"]('.app').css('color', 'red');
globalLib({ a: 1 });
globalLib.doSomething();
module_lib_1["default"].doSomething();
console.log(module_lib_1["default"].version);
umd_lib_1["default"].doSomething();
console.log(umd_lib_1["default"].version);
var moment_1 = require("moment");
moment_1["default"].myFunction = function () {
    console.log('moment.myFunction');
};
moment_1["default"].myFunction();
globalLib.doAnything = function () {
    console.log('globalLib doAnything');
};
globalLib.doAnything();
