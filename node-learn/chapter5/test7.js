let stream = require('stream');
let fs = require('fs');
let util = require('util');

class JSONLineReader extends stream.Readable {
    constructor(source) {
        super();
        this._source = source;
        this._buffer = '';
        source.on('readable', () => {
            this.read();
        });
    }
    _read() {
        let chunk, line, lineIndex, result;

        if (this._buffer.length === 0) {
            chunk = this._source.read();
            this._buffer += chunk;
        }

        lineIndex = this._buffer.indexOf('\r\n');
        if (lineIndex !== -1) {
            line = this._buffer.slice(0, lineIndex);
            if (line) {
                try {
                    result = JSON.parse(line);
                    this._buffer = this._buffer.slice(lineIndex + 1);
                    this.emit('object', result);
                    this.push(util.inspect(result));
                }catch(e) {
                    console.log(e);
                }
            } else {
                this._buffer = this._buffer.slice(1);
            }
        }
    }
}

let input = fs.createReadStream(__dirname + '/json-lines.txt', { encoding: 'utf8' });
let jsonLineReader = new JSONLineReader(input);

jsonLineReader.on('object', (obj) => {
    console.log('pos', obj.position, '- letter', obj.letter);
})