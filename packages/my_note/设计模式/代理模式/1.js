function mult() {
    console.log('开始计算');
    let k = 1;
    // 一个特别复杂的计算
    for (let i  = 0; i < arguments.length; i++) {
        k+=i;
    }
    return k;
}

let proxyMult = (function () {
    let cache = {};
    return function () {
        let args = Array.prototype.join.call(arguments, ',');
        if ( args in cache) {
            return cache[args];
        }
        return cache[args] = mult.apply(this, arguments);
    }
})()


console.log(proxyMult(1,2,3,4,5));
console.log(proxyMult(1,2,3,4,5));

// output
// 开始计算
// 11
// 11