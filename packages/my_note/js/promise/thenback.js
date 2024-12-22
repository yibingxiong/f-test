function returnPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 2000);
    })
}


returnPromise()
.then((res) => {
    return res+1;
})
.then(res => {
    console.log(res);
})
.then(res => {
    return Promise.reject('error');
})
.catch(e => {
    console.log('catch');
    throw(e)
})
.then(res => {
    console.log('ddd');
})
.catch(e => {
    console.log('error1');
})