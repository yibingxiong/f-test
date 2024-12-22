未来才会结束的事件的结果

* pending
* resolved
* rejected

1. 不受外界影响
2. 改变后不再改变，任何时候处理

let p = new Promise((resolve,reject) => {})

p.then(fn(),[fn2()])

p.catch(fn())

p.finally()

Promise.all() 所有resolve或一个rejected

Promise.race() 第一个状态改变的


本轮循环的末






