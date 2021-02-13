const {SyncWaterfallHook} = require('tapable');
const hook = new SyncWaterfallHook(['arg0', 'arg1']);
hook.tap('1', (arg0, arg1) => {
    console.log(arg0, arg1, 1);
    return 1;
});
hook.tap('2', (arg0, arg1) => {
    console.log(arg0, arg1, 2);
    return 2;
});
hook.tap('3', (arg0, arg1) => {
    // 这里 arg0 = 2
    console.log(arg0, arg1, 3);
    // 等同于 return undefined
});
hook.tap('4', (arg0, arg1) => {
    // 这里 arg0 = 2 还是2
    console.log(arg0, arg1, 4);
});
hook.call('Webpack', 'Tapable');
/* console log output
Webpack Tapable 1
1 'Tapable' 2
2 'Tapable' 3
2 'Tapable' 4 */