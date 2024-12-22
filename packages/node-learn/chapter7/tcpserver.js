let net = require('net');

net.createServer(function(client){
    console.log('clinet connected');
    client.on('end', () => {
        console.log('end');
    })
    client.write('hello');
    // client.pipe(client);
    client.on('data', (d)=> {
        console.log(d.toString());
        client.write('\n'+d.toString());
    })
}).listen(1234, () => {
    console.log('hello')
});