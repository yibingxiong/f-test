const child_process = require('child_process');
const fs = require('fs');

const outFd = fs.openSync('./out.txt', 'a');
const errFd = fs.openSync('./err.txt' ,'a');

let child  = child_process.spawn('cat',['test.txt'], {detached:true, stdio:['ignore',outFd, errFd]});
child.unref();