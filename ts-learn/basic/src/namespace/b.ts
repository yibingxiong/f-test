/// <reference path='a.ts'/>

namespace Shape {
    export function circle(x: number) {
        return Math.PI * x * x;
    }
}

console.log(Shape.circle(4))
console.log(Shape.squire(5))

import circle = Shape.circle;

console.log(Shape.circle(4));

