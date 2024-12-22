let net = require('net');
let client = net.connect(1234);

client.on('data',(data) => {
    console.log(data);
})
