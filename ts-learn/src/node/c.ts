let c1 = require('./a')
let c2 = require('./b')
let c3  = require('../es6/a');
import c4 = require('../es6/d');

console.log(c1)
console.log(c2)

// c3(); // error
c3.default();

c4();