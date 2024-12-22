var r = new Promise(function (resolve, reject) {
  resolve();
  console.log('a');
});
setTimeout(() => console.log('b'), 0);
r.then(() => console.log('c'));
console.log('d');

// a
// d
// c
// b