// function deepClone(obj) {
//   let newObj = {};
//   if (Array.isArray(obj)) {
//     newObj = obj.map((item) => {
//       return deepClone(item);
//     })
//   } else if(typeof obj === 'object' && obj !== null) {
//     for(const key of Object.keys(obj)) {
//       newObj[key] = deepClone(obj[key]);
//     }
//   } else {
//     newObj = obj;
//   }
//   return newObj;
// }

// const obj = {
//   a: {
//     b: {
//       c: 1
//     },
//     d: [1,3,4]
//   }
// }

// const newObj = deepClone(obj);
// console.log('new Obje', newObj);
// console.log(newObj.a === obj.a)

// const newObj2 = Object.assign({}, obj);
// console.log('new Obje2', newObj2);
// console.log(newObj2.a === obj.a)

// Function.prototype.bind2 = function (context, ...args) {
//   const self  = this;
//   return function (...args2) {
//     self.apply(context, args.concat(args2));
//   }
// }

// function a(b,c,d,e,f) {
//   console.log(b+c+d+e+f);
// }

// const d = a.bind2(this, 1,2);
// d(3,4,5);

// const e = a.bind(this, 1,2);
// e(3,4,5);


//-------------------//

// const res = f(1)(2)(3)(); // 6
// console.log(res);

// function f(a) {
//   let res = 0;
//   function _f(a) {
//     if (a === undefined) {
//       return res;
//     }
//     res += a;
//     return _f;
//   }
//   return _f(a);
// }

//---------------//

// const a = {
//   b:1,
//   [Symbol()]: {a: 1},
// }

// const descriptor = Object.getOwnPropertyDescriptor(a, 'b');
// console.log(descriptor.configurable)
// console.log(descriptor.writable)
// console.log(descriptor.value)


// Object.preventExtensions(a);

// const descriptor2 = Object.getOwnPropertyDescriptor(a, 'b');
// console.log(descriptor2.configurable)
// console.log(descriptor2.writable)
// console.log(descriptor2.value)

// a.c= 1

// console.log(a)

// console.log(Object.getOwnPropertyNames(a));
// console.log(Object.getOwnPropertySymbols(a));


//------------//

// function * gen() {
//   yield 1;
//   yield 2;
//   yield 3;
//   return 4;
// }

// const iterator = gen();

// console.log(iterator.next())
// console.log(iterator.next(9))
// console.log(iterator.next())
// console.log(iterator.next())


// ---------------------- //

// for(var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i, new Date().toString());
//   }, i * 1000);
// }

// 5 Thu Apr 01 2021 08:15:33 GMT+0800 (GMT+08:00)
// 5 Thu Apr 01 2021 08:15:34 GMT+0800 (GMT+08:00)
// 5 Thu Apr 01 2021 08:15:35 GMT+0800 (GMT+08:00)
// 5 Thu Apr 01 2021 08:15:36 GMT+0800 (GMT+08:00)
// 5 Thu Apr 01 2021 08:15:37 GMT+0800 (GMT+08:00)

// ------------------ //
// "use strict"
// function foo() {
//   console.log('this', this)
//   console.log(this.a);
// }

// function doFn(fn) {
//   console.log('doFn', this.a)
//   fn()
// }

// const obj = {
//   a: 1,
//   doFn,
// }

// obj.doFn(foo);

//--------------//

//--------以下为关于promise的练习-----------//
// function PromiseAll(promiseArr) {
//   const res = [];
//   let suc = 0;
//   return new Promise((resolve, reject) => {
//     for (let i = 0; i < promiseArr.length; i++) {
//       promiseArr[i].then((r) => {
//         res[i] = r;
//         suc++;
//         if (suc === promiseArr.length) {
//           resolve(res);
//         }
//       })
//         .catch(e => {
//           reject(e);
//         })
//     }
//   });
// }

// const p1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 1000);
// })

// const p2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(2);
//   }, 2000);
// })

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(3);
//   }, 3000);
// })

// const p4 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(4);
//   }, 4000);
// })

// PromiseAll([p1, p2, p3, p4])
// .then(res => {
//   console.log(res);
// }, (e) => {
//   console.log(e);
// })

// function PromiseRace(promiseArr) {
//   return new Promise((resolve, reject) => {
//     promiseArr.forEach(p => {
//       p.then((r) => {
//         resolve(r);
//       }, (e) => {
//         reject(e);
//       })
//     });
//   })
// }

// PromiseRace([p1,p2,p3, p4])
// .then(r => {
//   console.log(r)
// }, (e) => {
//   console.log(e);
// })


// function PromiseNone(promiseArr) {
//   return new Promise((resolve, reject) => {
//     let failCount = 0;
//     const res = [];
//     for (let i = 0; i < promiseArr.length; i++) {
//       promiseArr[i].then(r => {
//         reject(r);
//       }, (e) => {
//         res[i] = e;
//         if (++failCount === promiseArr.length) {
//           resolve(res);
//         }
//       })
//     }
//   })
// }

// PromiseNone([p1, p3])
//   .then(r => {
//     console.log(r);
//   }, (e) => {
//     console.log('e', e)
//   })

// function PromiseAny (promiseArr) {
//   return new Promise((resolve, reject) => {
//     let failCount = 0;
//     const res = [];
//     for (let i = 0; i < promiseArr.length; i++) {
//       promiseArr[i].then(r => {
//         resolve(r);
//       }, (e) => {
//         res[i] = e;
//         if (++failCount === promiseArr.length) {
//           reject(res);
//         }
//       })
//     }
//   })
// }


// PromiseAny([p1, p3])
//   .then(r => {
//     console.log(r);
//   }, (e) => {
//     console.log('e', e)
//   })


// function promiseFirst(promiseArr) {
//   return new Promise((resolve, reject) => {
//     promiseArr.forEach(p => {
//       p.then(resolve, reject);
//     });
//   })
// }

// promiseFirst([p1, p3])
//   .then(r => {
//     console.log(r);
//   }, (e) => {
//     console.log('e', e)
//   })

// function promiseLast(promiseArr) {
//   return new Promise((resolve, reject) => {
//     let cCount = 0;
//     promiseArr.forEach(p => {
//       p.then((r) => {
//         if (++cCount === promiseArr.length) {
//           resolve(r)
//         }
//       }, (e) => {
//         if (++cCount === promiseArr.length) {
//           reject(e)
//         }
//       })
//     });
//   })
// }

// promiseLast([p1, p3])
//   .then(r => {
//     console.log(r);
//   }, (e) => {
//     console.log('e', e)
//   })

// Promise.prototype.finally = function (cb) {
//   return this.then(
//     (v) => Promise.resolve(cb()).then(v => v),
//     (e) => Promise.resolve(cb()).then(e => { throw e })
//   )
// }


///////////////代理//////////////


// const handler = {
//   get: function(obj, prop) {
//       return prop in obj ? obj[prop] : 37;
//   }
// };

// const p = new Proxy({}, handler);
// p.a = 1;
// p.b = undefined;

// console.log(p.a, p.b);      // 1, undefined
// console.log('c' in p, p.c); // false, 37

////////////event bus ////////////

// const events = {};

// function on(eventName, handler) {
//   if (!events[eventName]) {
//     events[eventName] = [];
//   }
//   events[eventName].push(handler);
// }


// function emit(eventName, ...args) {
//   const eventHandler = events[eventName] || [];
//   for(const handler of eventHandler) {
//     handler.apply(this, args);
//   }
// }

// function remove(eventName, handler) {
//   const eventHandler = events[eventName];
//   if (eventHandler && eventHandler.length) {
//     let i = 0;
//     for(;i< eventHandler.length; i++) {
//       if (eventHandler[i] === handler) {
//         break;
//       }
//     }
//     if (i < eventHandler.length) {
//       events.splice(i, 1);
//     }
//   }
// }

// function once(eventName, handler) {
//   if (!events[eventName]) {
//     events[eventName] = [];
//   }
//   events[eventName].push(handler);
// }


//-----------------//////////
// const a = {
//   [Symbol.for('dddddddddd')]: 1,
//   a: 2,
//   b: 2
// }
// console.log(

//   Object.getOwnPropertyNames(a)
// )

// console.log(

//   Object.getOwnPropertySymbols(a)
// )

///////////////全排列/////////////

// function foo(arr) {
//   const res = [];
//   function dfs(r, used) {
//     if (r.length === arr.length) {
//       res.push(r.concat());
//       return;
//     }
//     for (let i = 0; i < arr.length; i++) {
//       if (used[i]) {
//         continue;
//       }
//       if (i > 0 && used[i-1] && arr[i] === arr[i-1]) continue;
//       r.push(arr[i]);
//       used[i] = true;
//       dfs(r, used);
//       r.pop();
//       used[i] = false;
//     }
//   }
//   dfs([], [])
//   console.log(res);
// }

// foo(['a', 'b', 'c', 'c'])


////// 打乱数组//////////

// function shuttle(arr) {
//   let i = arr.length;
//   while(i > 0) {
//     const j = Math.floor(Math.random() * i);
//     let t = arr[j];
//     arr[j] = arr[--i];
//     arr[i]  = t;
//   }
//   return arr;
// }

// function shuttle2(arr) {
//   return arr.sort(() => {
//     return Math.random() - 0.5
//   })
// }

// function shuttle3(arr) {
//   const temp = arr.concat();
//   arr.length = 0;
//   while (temp.length) {
//     const i = Math.floor(Math.random() * temp.length);
//     arr.push(temp[i]);
//     temp.splice(i, 1);
//   }
//   return arr;
// }

// console.log(shuttle([]));
// console.log(shuttle([1,2,3,4]));
// console.log(shuttle([1]));
// console.log(shuttle([1,2,3]));
// console.log(shuttle([1,2]));
// console.log('------------------')
// console.log(shuttle2([]));
// console.log(shuttle2([1,2,3,4]));
// console.log(shuttle2([1]));
// console.log(shuttle2([1,2,3]));
// console.log(shuttle2([1,2]));

// console.log('------------------')
// console.log(shuttle3([]));
// console.log(shuttle3([1,2,3,4]));
// console.log(shuttle3([1]));
// console.log(shuttle3([1,2,3]));
// console.log(shuttle3([1,2]));


// throttle /////////////


function throttle(fn, delay) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last > delay) {
      fn.apply(this, args);
      last = now;
    }
  }
}

function throttle2(fn, delay) {
  let timer;
  return function (...args) {
    if (timer) return;
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, args)
    }, delay);
  }
}

function throttle3(fn, delay) {
  let timer = 0;
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last < delay) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        last = now;
        fn.apply(this, args);
      }, delay);
    } else {
      last = now;
      fn.apply(this, args);
    }
  }
}

global.b = 10;
function log(a, b, c) {
  console.log('now', new Date().toString(), a, b, c, this.b)
}

// const f = throttle3(log, 1000);

// const cc = {
//   b: 11,
//   f: f,
// }
// setInterval(() => {
//   cc.f(1, 2, 3);
// }, 100);


function debounce(fn, delay) {
  let timer = 0;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  }
}

function debounce2(fn, delay, immediate) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    const callNow = immediate && !timer;
    timer = setTimeout(() => {
      timer = null;
      if (!immediate) {
        fn.apply(this, args);
      }
    }, delay);
    if (callNow) {
      fn.apply(this, args);
    }
  }
}

const f = debounce(log, 1000);

const cc = {
  b: 11,
  f: f,
}

setInterval(() => {
  cc.f(1, 2, 3);
}, Math.floor(Math.random() * 2000));
