const child_process = require('child_process');

function doWork(job, cb) {
    const child = child_process.fork('./8.7.1.js');
    let cbTriggered = false;

    child.once('error', (err) => {
        cbTriggered = true;
        cb(err);
    })
    child.once('message', (msg) => {
        cb(null, msg);
        cbTriggered = true;
    });
    child.once('exit', (code, signal) => {
        cb(new Error(code + ":" + signal));
    });
    child.send(job);
}

for(let i = 0; i<10; i++) {
    doWork('吃饭'+i, (err, msg) => {
        if(err) {
            console.log(err);
        }
        console.log(msg);
    })
}
