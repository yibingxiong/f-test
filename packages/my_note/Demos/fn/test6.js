let a = {a:3};
function test() {
    console.log(this);
    function fn1() {
        console.log(this);
    }
    fn1();
}


test.bind(a)();
console.log('-----------')
function test2() {
    'use strict'
    console.log(this);
    let fn2 = () => {
        console.log(this);
    }
    fn2();
}

test2.bind(a)();

console.log('-----------')
function test3() {
    'use strict'
    console.log(this);
    let fn3 = function*() {
        yield console.log(this);
    }
    fn3().next();
}

test3.bind(a)();


console.log('-----------')
function test4() {
    'use strict'
    console.log(888)
    console.log(this);
    console.log(888)
    let fn4 = async function() {
        console.log(this);
    }
    fn4();
}

test4.bind(a)();