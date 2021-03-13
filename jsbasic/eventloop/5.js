function promise1 () {
  let p = new Promise((resolve) => {
    console.log('promise1');
    resolve('1')
  })
  return p;
}
function promise2 () {
  return new Promise((resolve, reject) => {
    reject('error')
  })
}
promise1()
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log('finally1'))

promise2()
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log('finally2'))
