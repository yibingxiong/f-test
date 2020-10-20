const child_process = require('child_process');


child_process.exec('cat test.txt | sort|uniq', (err, stdout, stderr) => {
    process.stdout.write(stdout);
})