let stream = require('stream');

class HungryStream extends stream.Duplex {
  constructor() {
    super()
    this.waiting = false;
  }
  _write(chunk, encoding, callback) {
    this.waiting = false;
    this.push('\u001b[32m' + chunk + '\u001b[39m');
    callback();
  }
  _read(size) {
    if(!this.waiting) {
      this.push('Feed me data! >');
      this.waiting = true;
    }
  }

}

let hungryStream = new HungryStream();

process.stdin.pipe(hungryStream).pipe(process.stdout);