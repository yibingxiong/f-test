let express = require('express');
let http = require('http');
console.log(typeof express);

console.log(require.resolve('express'));

console.log(require.resolve('http'));

console.log(__dirname);
console.log(__filename);

let path = require('path');

console.log(path.join(__dirname,"test/html/1.html"))