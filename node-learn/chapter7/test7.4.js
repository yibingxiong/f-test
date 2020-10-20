let dgram = require('dgram');
let fs = require('fs');
let port = 41230;
let defaultSize = 16;

function Client(remoteIp) {
  let inStream = fs.createReadStream(__filename);
  let socket = dgram.createSocket('udp4');
  inStream.on('readable', () => {
    sendData();
  });
  function sendData() {
    let message = inStream.read(defaultSize);

    if(!message) {
      return socket.unref();
    }

    socket.send(message, 0, message.length, port, remoteIp, (err, bytes) => {
      sendData();
    })
  }
}

function Server() {
  let socket = dgram.createSocket('udp4');

  socket.on('message', (msg, finfo) => {
    process.stdout.write(msg.toString());
  })

  socket.on('listening', () => {
    console.log('server ready',socket.address())
  })

  socket.bind(port);
}

if(process.argv[2] === 'client') {
  new Client(process.argv[3]);
}else {
  new Server();
}