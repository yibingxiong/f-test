// 1. 每隔一秒输出1,2,3


// const delay = () => new Promise((resolve) => {
//   setTimeout(() => {
//     resolve();
//   }, 1000);
// })

// function out() {
//   delay()
//   .then(() => {
//     console.log('1,2,3');
//     out();
//   })
// }

// out();

// [1, 2, 3].reduce((prePromise, i) => {
//   return prePromise.then(() => {
//     console.log(i)
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve();
//       }, 1000);
//     })
//   })
// }, Promise.resolve());

/**
 * 2. 
 * 红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；
 * 如何让三个灯不断交替重复亮灯？（用Promise实现）三个亮灯函数已经存在：
 */
const delay = (time) => new Promise((resolve) => {
  setTimeout(() => {
    resolve()
  }, time);
})

// async function light() {
//   await delay(3000);
//   console.log('red');
//   await delay(2000);
//   console.log('yellow')
//   await delay(1000);
//   console.log('green');
//   light();
// }
// light();

// function* light() {
//   yield delay(3000);
//   console.log('red');
//   yield delay(2000);
//   console.log('yellow');
//   yield delay(1000);
//   console.log('green');
//   yield* light();
// }

// function run(gen, ...args) {
//   const it = gen.apply(this, args);
//   Promise.resolve()
//     .then(function handleNext(v) {
//       const next = it.next(v);
//       return (function handleResult(next) {
//         if (next.done) {
//           return next.value;
//         }
//         return Promise.resolve(next.value)
//           .then(handleNext, function handleError(error) {
//             return Promise.resolve(it.throw(error))
//               .then(handleResult);
//           })
//       })(next)
//     })
// }

// run(light)

// const map = new Map([
//   [0, 'red'],
//   [1, 'yellow'],
//   [2, 'green']
// ]);

// function light() {
//   [3000, 2000, 1000].reduce((pre, cur, i) => {
//     return pre.then(() => {
//       return new Promise((r) => {
//         setTimeout(() => {
//           r();
//           console.log(map.get(i));
//           if (i === 2) {
//             light();
//           }
//         }, cur);
//       })
//     })
//   }, Promise.resolve())
// }

// light();

/**
 * 1. 让异步变为同步执行
 */

// const time = (timer) => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve()
//     }, timer)
//   })
// }
// const ajax1 = () => time(2000).then(() => {
//   console.log(1);
//   return 1
// })
// const ajax2 = () => time(1000).then(() => {
//   console.log(2);
//   return 2
// })
// const ajax3 = () => time(1000).then(() => {
//   console.log(3);
//   return 3
// })

// function mergePromise(fns) {
//   const data = [];
//   let i = 0;
//   function execute(resolve, reject) {
//     fns[i]()
//       .then(res => {
//         data[i] = res;
//         if (i === fns.length - 1) {
//           resolve(data);
//         } else {
//           i++;
//           execute(resolve, reject);
//         }
//       })
//       .catch(e => {
//         reject(e);
//       })
//   }
//   return new Promise((resolve, reject) => {
//     execute(resolve, reject);
//   })
// }

// function mergePromise(fns) {
//   return new Promise((resolve, reject) => {
//     const data = [];
//     fns.reduce((pre, cur, i) => {
//       return pre.then((r) => {
//         return cur().then(r => {
//           data.push(r);
//           if (i === fns.length-1) {
//             console.log('resolve')
//             resolve(data);
//           }
//         });
//       }).catch(e => reject(e));
//     }, Promise.resolve())
//   })
// }

// mergePromise([ajax1, ajax2, ajax3]).then(data => {
//   console.log("done");
//   console.log(data); // data 为 [1, 2, 3]
// }).catch(console.log)



/**
 * 限制异步请求并发数
 */

// 题目2
function request(url) {
  console.log('请求进来了' + url)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random().toString(32).substr(0, 10))
    }, 2000);
  })
}
const queue = [];
let count = 0;

function limitPromise(url, MAX) {
  return new Promise((resolve, reject) => {
    const doRequest = () => {
      request(url)
        .then((res) => {
          resolve(res);
          count--;
          consume();
        }, (e) => {
          count--;
          consume();
          reject(e)
        })
    }
    if (count < MAX) {
      count++;
      doRequest();
    } else {
      queue.push(doRequest);
    }
  })
}

function consume() {
  if (queue.length) {
    if (count < MAX) {
      const pFn = queue.shift();
      count++;
      pFn();
    }
  }
}