let assert = require('assert');
let dgram = require('dgram');
let fs = require('fs');
let port = 41234;

function Client(remoteIp) {
    let socket = dgram.createSocket('udp4');
    let readline = require('readline');
    let rl = readline.createInterface(process.stdin, process.stdout);

    socket.send(new Buffer('<JSON>'), 0, 6, port, remoteIp);

    function sendData(line) {
        socket.send(new Buffer(line),0, line.length, port, remoteIp, function(err, bytes){
            console.log('Sent:', line);
            rl.prompt();
        })
    }

    rl.setPrompt('<Message>');
    rl.prompt();

    rl.on('line', function(line){
        sendData(line);
    })
    .on('close', () => {
        process.exit(0);
    });

    socket.on('message', (msg, rinfo) => {
        console.log('\n<' + rinfo.address + '>', msg.toString());
        rl.prompt();
    });
}

function Server() {
    let clients = [];
    let server = dgram.createSocket('udp4');

    server.on('message', function(msg, rinfo){
        let clientId = rinfo.address + ':' + rinfo.port;

        msg = msg.toString();

        if(!clients[clientId]) {
            clients[clientId] = rinfo;
            console.log(clients)

        }else {
            console.log('reveive:', msg);
        }

        if(msg.match(/^</)) {
            console.log('Control message:', msg);
            return;
        }

        for(let client in clients) {
            if(client===clientId) {
                client = clients[clientId];
                server.send(new Buffer(msg), 0, msg.length, client.port, client.address, (err, bytes) => {
                    if(err) console.log(err);
                    console.log('Bytes sent:', bytes);
                })
            }
        }

        
    })
    server.on('listening', () => {
        console.log('Server ready:', server.address());
    })
    server.bind(port);
}

if(!module.parent) {
    switch (process.argv[2]) {
        case 'client':
            new Client(process.argv[3]);
            break;
        case 'server':
            new Server();
            break;
        default:
            console.log('error');
    }
}