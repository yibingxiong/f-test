process.on('message', (job) => {
    process.send('your job:'+job+'is finished');
})