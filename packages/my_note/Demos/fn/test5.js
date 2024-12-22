function test() {
    console.log(arguments);
    function fn1() {
        console.log(arguments);
    }
    fn1();
}


test(4,44)
console.log('-----------')
function test2() {
    'use strict'
    console.log(arguments);
    let fn2 = () => {
        console.log(arguments);
    }
    fn2();
}

test2(4,44)

console.log('-----------')
function test3() {
    'use strict'
    console.log(arguments);
    let fn3 = function*() {
        yield console.log(arguments);
    }
    fn3().next();
}

test3(4,44)


console.log('-----------')
function test4() {
    'use strict'
    console.log(arguments);
    let fn4 = async function() {
        console.log(arguments);
    }
    fn4();
}

test4(4,44)