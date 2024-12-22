// function add(...args) {
//   let sum = args.reduce((a, b) => a + b);
//   return function addInner(...args) {
//     if (args.length === 0) {
//       return sum;
//     }
//     sum += args.reduce((a, b) => a + b);
//     return addInner;
//   }
// }
// console.log(add(1, 2)(3)(4)());

// 第二次做

function add2(...args) {
  let sum = args.reduce((a,b) => a+b);
  function add1(...args) {
    if (args.length === 0) {
      return sum;
    }
    sum = args.reduce((a,b) => a+b, sum);
    return add1;
  }
  return add1;
}

console.log(add2(1, 2)(3)(4)());