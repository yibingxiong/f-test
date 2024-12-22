let http = require('http');
let fs = require('fs');

http.createServer((req, res) => {
  fs.createReadStream(__dirname+'/index.html').pipe(res);
}).listen(1234)