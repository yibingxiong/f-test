let http = require('http');
let url = require('url');

http.createServer((req, res) => {
    let options = url.parse(req.url);
    options.headers = req.headers;
    console.log(options)
    let proxyRequest = http.request(options, (proxyResponse) => {
        proxyResponse.on('data', (chunk) => {
            console.log('proxyResponse length:'+ chunk.length);
            res.write(chunk, 'binary');
        });
        proxyResponse.on('end', () => {
            console.log('proxyed request end');
            res.end();
        });
        console.log(proxyResponse.statusCode);
        res.writeHead(proxyResponse.statusCode, proxyResponse.headers);
    });
    req.on('data', (chunk) => {
        console.log('in request length:'+ chunk.length);
        proxyRequest.write(chunk, 'binary');
    });

    req.on('end', () => {
        console.log('original request end');
        proxyRequest.end();
    });
}).listen(1234, () => {
    console.log('proxy server running');
});