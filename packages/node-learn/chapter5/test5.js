var stream = require('stream');
var util = require('util');
var http = require('http');
class StatStream extends stream.Readable {
  constructor(limit) {
    super();
    this.limit = limit;
  }
  _read() {
    if(this.limit === 0) {
      this.push();
      console.log(2);
    }else {
      this.push(util.inspect(process.memoryUsage()));
      this.push('\n\n\n\n\n');
      this.limit--;
    }
  }
}

http.createServer((req, res) => {
  var statStream = new StatStream(100);
  statStream.pipe(res);
  statStream.on('end', (res) => {
    console.log('-----------')
    res.end(200);
  })
}).listen(1234);