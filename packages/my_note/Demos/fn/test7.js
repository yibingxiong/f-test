function test() {}

console.log(test.bind(this).name)

console.log((()=>{}).name)