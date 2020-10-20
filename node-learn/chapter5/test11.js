let stream = require('stream');
let fs = require('fs');

class CSVParser extends stream.Transform {
  constructor() {
    super({objectMode:true});
    this.value = '';
    this.headers = [];
    this.values = [];
    this.line = 0;
  }

  toObject() {
    let i;
    let obj = {};

    for(i = 0; i < this.headers.length; i++ ) {
      obj[this.headers[i]] = this.values[i];
    }

    return obj;
  }

  addValue() {
    if(this.line === 0) {
      this.headers.push(this.value);
    }else {
      this.values.push(this.value);
    }
    this.value = '';
  }

  _transform(chunk, encoding, done) {
    let c, i;

    chunk = chunk.toString();

    for(i = 0; i < chunk.length; i++) {
      c = chunk.charAt(i);

      if(c === ',') {
        this.addValue();
      }else if(c === '\n') {
        this.addValue();
        if(this.line > 0) {
          this.push(this.toObject());
        }
        this.values = [];
        this.line++ ;
      }else {
        this.value+=c;
      }
    }
    done();
  }
}

module.exports = CSVParser;
