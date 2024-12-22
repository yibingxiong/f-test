console.log('1');

async function async1() {
  console.log('2');
  await console.log('3');
  console.log('4');
}

setTimeout(function () { console.log('5') }, 0)

async1();

new Promise(function (resolve) {
  console.log('6');
  resolve(6);
}).then((x) => x + 6)
  .then((x) => { throw new Error('My Error') })
  .catch(() => 6)
  .then((x) => x + 6)
  .then((x) => console.log(x))
  .catch(console.error('error'))

console.log('8')