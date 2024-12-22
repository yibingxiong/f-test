class P {
    constructor() {
        this.name1 = 1;
    }
    static sayName2() {
        console.log(this=== P);
    }
    sayName() {
        console.log(this.name1);
    }
}

let p = new P();

console.dir(P.prototype);

P.sayName2();

p.sayName();


let P2 = class P3 {
    constructor() {

    }
    sayName() {
        console.log(P3 === P2);
    }
}

console.log(typeof P2)
console.log(typeof P3);
let p4 = new P2();
p4.sayName();

class MyClass {
    static get [Symbol.species]() {
        return this;
    }

    constructor(value) {
        this.value = value;
    }

    clone() {
        return new this.constructor[Symbol.species](this.value);
    }

}

class MyDrivedClass1 extends MyClass {

}

class MydrivedClass2 extends MyClass {
    static get [Symbol.species] () {
        return MyClass;
    }
}

let instance1 = new MyDrivedClass1('foo');
let clone1 = instance1.clone();

let instance2 = new MydrivedClass2('bar');
let clone2 = instance2.clone();

console.log(clone1 instanceof MyClass);
console.log(clone1 instanceof MyDrivedClass1);
console.log(clone2 instanceof MyClass);
console.log(clone2 instanceof MydrivedClass2);

class Shape {
    constructor() {
        if(new.target === Shape) {
            throw new Error('抽象类不能被实例化');
        }
    } 
}

new Shape();