let net = require('net');

let server = net.createServer((c) => {
  c.setNoDelay(true);
  c.write('3431452145', 'binary');
  console.log('server connected');

  c.on('end', () => {
    console.log('server disconnected');
    server.unref();
  })

  c.on('data', (data) => {
    process.stdout.write(data.toString());
    c.write(data.toString());
  })
})

server.listen(8000, () => {
  console.log('server bound');
})