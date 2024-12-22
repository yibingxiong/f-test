let http = require('http');
let assert = require('assert');

let server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello, world\r\n');
    res.end();
});

server.listen(1234, () => {
    console.log('server running!');
});

var req = http.request({port:1234}, (res) => {
    console.log('http Headers', res.headers);

    res.on('data', (data)=> {
        console.log('body', data.toString());
        assert.equal('Hello, world\r\n', data.toString());
        assert.equal(200, res.statusCode);
        server.unref();
    })
})
req.end();