// 每隔一秒输出1,2,3


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

const map = new Map([
  [0, 'red'],
  [1, 'yellow'],
  [2, 'green']
]);

function light() {
  [3000, 2000, 1000].reduce((pre, cur, i) => {
    return pre.then(() => {
      return new Promise((r) => {
        setTimeout(() => {
          r();
          console.log(map.get(i));
          if (i === 2) {
            light();
          }
        }, cur);
      })
    })
  }, Promise.resolve())
}

light();