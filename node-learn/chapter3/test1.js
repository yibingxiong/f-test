let fs = require('fs');

fs.readFile('./a', (err, buf) => {
    console.log(Buffer.isBuffer(buf))
    console.log(buf);
    console.log(buf.toString());
    console.log(buf.toString('ascii'));
    console.log(buf.toString('base64'));
})

console.log(new Buffer('johnny:c-bad', 'utf8').toString('base64'));