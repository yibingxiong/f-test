let stream = require('stream');

class MyStream extends stream.Readable {
  constructor() {
    super({
      highWaterMark: 11,
      encoding:'utf8',
      objectMode: true
    })
  }
}