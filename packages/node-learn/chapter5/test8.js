let stream = require('stream');
let util = require('util');

class MemoryStream extends stream.Readable {
  constructor(options = {}) {
    options.objectMode = true;
    super(options);
  }
  _read() {
    this.push(process.memoryUsage());
  }
}

var memoryStream = new MemoryStream();

memoryStream.on('readable', () => {
  let output = memoryStream.read();
  console.log('type:%s, value: %j', typeof output, output);
})