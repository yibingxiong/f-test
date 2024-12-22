console.time('label');
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', text => {
    process.exit(0)
    console.trace();
    process.stdout.write(text.toUpperCase());
    console.timeEnd('label');
})


console.log(process.arch);
console.log(process.platform)

console.log(process.memoryUsage())

console.log(process.argv)

console.log(process.pid);

