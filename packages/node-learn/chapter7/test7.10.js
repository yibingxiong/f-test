let fs = require('fs');
let tls = require('tls');
let os = require('os');

let options = {
    key: fs.readFileSync('./client.pem'),
    cert: fs.readFileSync('./client-cert.pem'),
    ca: [fs.readFileSync('server-cert.pem')],
    servername: os.hostname()
}

let clearTextStream = tls.connect(1234, options, () => {
    let authorized = clearTextStream.authorized? 'authorized':'unauthorized';
    console.log('connected:', authorized);
    process.stdin.pipe(clearTextStream);
});

clearTextStream.setEncoding('utf8');

clearTextStream.on('data', (data) => {
    console.log(data);
} )