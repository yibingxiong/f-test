const child_process = require('child_process');
const fs = require('fs');

const child = child_process.fork('./8.6.2.js', {slient:true});

child.send('我是父进程发送的一个消息');
child.on('message', (msg) => {
    console.log('父进程输出', msg)
    console.log(msg.name);
    child.disconnect();
})