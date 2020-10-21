var a = new String('a');

Object.prototype.b = 3;

console.log(a.b); // 3

console.log(a.__proto__.__proto__)