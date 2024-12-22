let cp = require('child_process');

let child = cp.spawn('echo', ['hello', 'world']);

child.on('error', console.error);
child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
