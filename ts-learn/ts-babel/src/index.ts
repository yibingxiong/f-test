class A {
    a = 1;


}

let aaaaa = 1;
console.log(aaaaa.length)
const b = new A();
console.log(b.a);


const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

const n = {x, y, ...z}

console.log(x,y,z)

console.log(n)


