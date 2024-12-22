let cp = require('child_process');

cp.execFile('echo', ['hello', 'world'], (err, stdout, stdin) => {
    if(err) {
        console.log(err);
    }
    console.log('stdout', stdout);
    console.log('stdin', stdin);
})

console.log(process.env.PATH.split(';').join('\n'));