new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 1000);
})
.then(res => {
  throw new Error('3333')
})
.catch(e => {
  console.log('err1', e)
})
.catch(e => {
  console.log('err2', e)
})