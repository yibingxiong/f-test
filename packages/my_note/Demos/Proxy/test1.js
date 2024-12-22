let t = {};

let proxy = new Proxy(t, {
    get() {
        return '11';
    }
})

console.log(proxy.aaa)