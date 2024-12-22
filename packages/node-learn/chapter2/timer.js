function monitor() {
    console.log(process.memoryUsage());
}

var id = setInterval(monitor, 1000);
id.unref();

setTimeout(() => {
    console.log('done');
}, 5000);