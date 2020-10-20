let fs = require('fs');
setTimeout(() => {
    console.log('setTimeout')
}, 0);

setImmediate(() => {
    console.log('setImmediate');
}, 0)
process.nextTick(()=> {
    console.log('nextTick');
})
setInterval(() => {
    fs.readFileSync('./test1.js')
}, 100)
