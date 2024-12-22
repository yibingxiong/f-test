let fs = require('fs');
let https = require('https');

let options = {
    key: fs.readFileSync('./server.pem'),
    cert: fs.readFileSync('./server-cert.pem'),
    ca: [fs.readFileSync('client-cert.pem')],
    requestCert: true
}

let server = https.createServer(options, (req, res) => {
    let authorized = req.socket.authorized ?
    'authorized': 'unauthorized';
    console.log('connected:', authorized);
    res.writeHead(200);
    res.write('Welcome!'+authorized+'\r\n');
    res.end();
} )


server.listen(1234, () => {
    console.log('server is running');
})