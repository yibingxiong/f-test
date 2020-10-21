function createPromise(t, type) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            type && resolve(t);
            !type && reject(t);
        }, 1000);
    })
}

createPromise(1, true)
.then(res => {
    console.log('a',res);
    return createPromise(2, true);
})
.catch(e => {
    console.log('d',e);
})
.then(res => {
    console.log('b', res);
})
.catch(res => {
    console.log('c', res);
})