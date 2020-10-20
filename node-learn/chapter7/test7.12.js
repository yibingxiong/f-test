let fs = require('fs');
let https = require('https');
let os = require('os');

let options = {
    key: fs.readFileSync('./client.pem'),
    cert: fs.readFileSync('./client-cert.pem'),
    ca: [fs.readFileSync('server-cert.pem')],
    hostname: os.hostname(),
    port: 1234,
    path: '/',
    method: 'GET'
}

let req = https.request( options, (res) => {
    let authorized = res.authorized? 'authorized':'unauthorized';
    res.on('data', (data) => {
        process.stdout.write(data);
    })
});

req.end();

req.on('error', (e) => {
    console.error(e);
})