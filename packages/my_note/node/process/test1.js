setTimeout(() => {
    console.log('run')
}, 1000);
process.on('beforeExit', () => {
    console.log('exit');
    setTimeout(() => {
        console.log('22');
        process.exit();
    }, 2000);
});

process.on('exit', (code) => {
    console.log(code);
});