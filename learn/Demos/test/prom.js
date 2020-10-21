function get() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 100);
    })
}

get()
.then((res) => {
    throw new Error(1);
})
.catch((e) => {
    console.log(1)
    console.log(e.message);
})