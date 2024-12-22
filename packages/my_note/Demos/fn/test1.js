// let obj = {};
// 'use strict'
// function f1(obj) {
//     obj.a = 'world';
//     console.log(arguments[0])
//     arguments[0].a = 'hello';
//     console.log(obj)

// }

// f1(obj);

// console.log(obj);


function f1() {
    this.a = 1;
    function f2() {
        this.a = 2;
        let f3 = () => {
            this.a = 3;
        }
        f3();
    }
    f2();
}
f1();


let a = {
    f:function() {
        this.dd = 2;
        return  () => {
            this.dd = 1;
        }
    }
}

let b = {};

a.f().bind(b)();
console.log(global.dd);
console.log(a.dd)
console.log(b);