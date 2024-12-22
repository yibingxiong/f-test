const cp = require('child_process');
const cpus = require('os').cpus().length;
console.log(cpus);

module.exports = function(workModule) {
    let awaiting = [];
    let readyPool = [];
    let poolSize = 0;

    return function doWork(job, cb) {
        if(!readyPool.length && poolSize > cpus) {
            return awaiting.push([doWork, job, cb]);
        }

        let child = readyPool.length ? readyPool.shift() : (poolSize++, cp.fork(workModule));

        console.log(child.pid)
        let cbTriggered = false;

        child.removeAllListeners();
        child.once('error', (err) => {
            if(!cbTriggered) {
                cb(err);
                cbTriggered = true;
            }
            child.kill();
        })
        child.once('message', (msg) => {
            cb(null, msg);
            cbTriggered = true;
            readyPool.push(child);
            if(awaiting.length) setImmediate.apply(null, awaiting.shift());
        });
        child.once('exit', (code, signal) => {
            if(!cbTriggered) {
            cb(new Error(code + ":" + signal));
            }
        });
        child.send(job);

    }
}