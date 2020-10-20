process.on('message', (msg) => {
    console.log('子进程的输出', msg);
    process.send({
        name: 'a'
    })
})