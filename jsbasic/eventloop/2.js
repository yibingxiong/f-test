console.log('start');
setTimeout(() => {
  console.log('children2');
  Promise.resolve().then(() => {
    console.log('children3');
  })
}, 0);

new Promise(function (resolve, reject) {
  console.log('children4');
  setTimeout(function () {
    console.log('children5');
    resolve('children6')
  }, 0)
}).then((res) => {
  console.log('children7');
  setTimeout(() => {
    console.log(res);
  }, 0)
})

// console.log('start');
// console.log('children4');
// console.log('children2');
// console.log('children3');
// console.log('children5');
// console.log('children7');
// children6

