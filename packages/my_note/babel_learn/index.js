const babylon = require('babylon');

const code = `function square(n) {
  return n * n;
}`;
let out = babylon.parse(code);
console.log(out);