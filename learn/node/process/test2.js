
process.on('uncaughtException', (e) => {
    console.log('uncaughtException');
    console.log(e);
})
process.on('rejectionHandled', () => {
    console.log('rejectionHandled')
})

process.on('unhandledRejection', () => {
    console.log('unhandledRejection');
})
function promise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(9);
        }, 1000); 
    })
}

setTimeout(() => {
    promise()
    .catch(e => {
        console.log(434);
    });
}, 1000);
