let fs = require('fs');
let tls = require('tls');

let options = {
    key: fs.readFileSync('./server.pem'),
    cert: fs.readFileSync('./server-cert.pem'),
    ca: [fs.readFileSync('client-cert.pem')],
    requestCert: true
}

let server = tls.createServer(options, (cleartextStream) => {
    let authorized = cleartextStream.authorized ?
    'authorized': 'unauthorized';
    console.log('connected:', authorized);
    cleartextStream.write('Welcom\n');
    cleartextStream.setEncoding('utf8');
    cleartextStream.pipe(cleartextStream);
} )


server.listen(1234, () => {
    console.log('server is running');
})