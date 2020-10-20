const child_process = require('child_process');

let str = child_process.execFileSync('cat', ['./8.8.js']).toString();
console.log(str);


try {
    let str = child_process.execFileSync('cat', ['not']).toString();
    console.log(str);
}catch(e) {
    console.log(e);
    console.log('-----');
    console.log(e.stderr.toString())
}


console.log('------------------');

let ps = child_process.spawnSync('ps', ['aux']);
let grep = child_process.spawnSync('grep', ['node'], {
    input: ps.stdout,
    encoding:'utf8'
});

console.log(grep);