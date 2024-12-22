const doWork = require('./8.8')('./8.7.1');


for(let i = 0; i<10000; i++) {
    doWork('吃饭'+i, (err, msg) => {
        if(err) {
            console.log(err);
        }
        console.log(msg);
    })
}

