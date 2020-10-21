function test() {
    console.log('test');
}

console.log(test.prototype) // test {}
console.log(test.prototype.constructor) // [Function:test]

console.log(test.__proto__);

console.log(test.__proto__.constructor)


// test {}
// [Function: test]
// [Function]
// [Function: Function]