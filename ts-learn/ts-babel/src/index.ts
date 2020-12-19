class A {
    a: number = 1;


}


let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

let n = {x, y, ...z}

console.log(x,y,z)

