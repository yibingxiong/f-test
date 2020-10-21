function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('a');
        }, 1000);
    })
}

function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('b');
        }, 1000);
    })
}



a()
.then(res => {
    console.log('a',res);
    return b();
})
.catch(err => {
    console.log('cat1', err);
    return 1;
})
.then((r) => {
    console.log('b', r);
})
.catch((c) => {
    console.log('c', c);
})