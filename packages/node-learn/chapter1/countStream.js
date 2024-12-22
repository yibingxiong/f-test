let Writable = require('stream').Writable;
let util = require('util');

class CountStream extends Writable {
    constructor(matchText, options) {
        super(matchText, options);
        this.count = 0;
        this.macher = new RegExp(matchText, 'ig');
    }
    _write(chunk, encoding, cb) {
        let matches = chunk.toString().match(this.macher);
        if (matches) {
            this.count += matches.length;
        }
        cb();
    }
    end() {
        this.emit('total', this.count);
    }
}

module.exports = CountStream;