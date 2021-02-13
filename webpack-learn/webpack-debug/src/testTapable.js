const {SyncHook} = require('tapable');

// 所有的构造函数都接收一个可选的参数，这个参数是一个参数名的字符串数组
// 1. 这里array的字符串随便填写，但是array的长度必须与实际要接受参数个数保持一致；
// 2. 如果回调不接受参数，可以传入空数组。
// 后面类型都是这个规则，不再做过多说明
const hook = new SyncHook(['name']);

// 添加监听
hook.tap('1', (arg0, arg1) => {
    // tap 的第一个参数是用来标识`call`传入的参数
    // 因为new的时候值的array长度为1
    // 所以这里只得到了`call`传入的第一个参数，即Webpack
    // arg1 为 undefined
    console.log(arg0, arg1, 1);
    return '1';
});
hook.tap('2', arg0 => {
    console.log(arg0, 2);
});
hook.tap('3', arg0 => {
    console.log(arg0, 3);
});

// 传入参数，触发监听的函数回调
// 这里传入两个参数，但是实际回调函数只得到一个
hook.call('Webpack', 'Tapable');
// 执行结果:
/*
Webpack undefined 1 // 传入的参数需要和new实例的时候保持一致，否则获取不到多传的参数
Webpack 2
Webpack 3
*/