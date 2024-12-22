let fs = require('fs');
let mime = 'image/png';
let encoding = 'base64';
let uri = `data:${mime};${encoding},`;

let data = fs.readFileSync('./test.png').toString('base64');

console.log(uri+data)