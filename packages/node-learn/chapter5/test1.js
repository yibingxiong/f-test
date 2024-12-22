let http = require('http');
let fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile(__dirname + '/index.html', (err, data) => {
        if(err) {
            res.statusCode = 500;
            res.end(JSON.stringify(err));
        }else {
            res.end(data);
        }
    })
}).listen(1234);