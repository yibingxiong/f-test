const child_process = require('child_process');
const cat = child_process.spawn('cat', ['test.txt']);
const sort  = child_process.spawn('sort');
const uniq = child_process.spawn('uniq');

cat.stdout.pipe(sort.stdin);
sort.stdout.pipe(uniq.stdin);
uniq.stdout.pipe(process.stdout);