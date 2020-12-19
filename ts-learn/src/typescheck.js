var b = 1; // number
var c = function (x) {
    if (x === void 0) { x = 1; }
}; // x -> number
var d = function () { return 1; }; // d -> number
var e = [1, null]; // e -> number | null
window.onkeydown = function (e) {
    // console.log(e)
};
var f = {};
console.log(f.name);
function overide(a, b) { }
var g = {
    a: '1',
    b: 1,
    c: 1
};
var h = g; // this is ok
var fruit;
(function (fruit) {
    fruit[fruit["Apple"] = 0] = "Apple";
    fruit[fruit["Banala"] = 1] = "Banala";
})(fruit || (fruit = {}));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
})(Color || (Color = {}));
var i = 1;
var j = fruit.Apple;
var k = { v: 1 };
var l = { v: '1' };
// k = l; // error
// l = k; // error
var Java = /** @class */ (function () {
    function Java() {
    }
    Java.prototype.helloJava = function () {
        console.log('hello java');
    };
    return Java;
}());
var JavaScript = /** @class */ (function () {
    function JavaScript() {
    }
    JavaScript.prototype.helloJs = function () {
        console.log('hello js');
    };
    return JavaScript;
}());
var Type;
(function (Type) {
    Type[Type["Strong"] = 0] = "Strong";
    Type[Type["Week"] = 1] = "Week";
})(Type || (Type = {}));
function isJava(lang) {
    return lang.helloJava !== undefined;
}
function getLanguage(type) {
    var lang = type === Type.Strong ? new Java() : new JavaScript();
    // if ((lang as Java).helloJava) {
    //     (lang as Java).helloJava();
    // } else {
    //     (lang as JavaScript).helloJs();
    // }
    // if (lang instanceof Java) {
    //     lang.helloJava();
    // }
    // if (lang instanceof JavaScript) {
    //     lang.helloJs();
    // }
    if ('java' in lang) {
        lang.helloJava();
    }
    else {
        lang.helloJs();
    }
}
function test(x) {
    if (typeof x === 'string') {
        x.lastIndexOf('a');
    }
    else {
        x.toExponential();
    }
}
