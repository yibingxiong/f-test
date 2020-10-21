let a = new String('b');

String.prototype.b = 3;

console.log(a.b);

a.b = 0;

console.log(a.hasOwnProperty('b'))