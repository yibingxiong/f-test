class Dog {
    private name?:string;
    constructor(name: string) {
        this.name = name;
    }

    run1 () {
        console.log('run');
    }
}

console.log(Dog.prototype)

let dog = new Dog('dog')

console.log(dog)


class DogA extends Dog {
    private color:string;
    constructor(name:string, color: string) {
        super(name);
        this.color = color;
    }
    static food:string = "hello";
}

let dog2 =  new DogA("a","red")

dog2.run1();

console.log(DogA.food)

console.log(DogA)

console.log(DogA.prototype);
console.log(dog2)

// 抽象类
abstract class Animal {
    eat() {
        console.log('eat');
    }
    abstract sleep(): void;
} 

// let animal:Animal = new Animal(); // not ok

class Cat extends Animal {

    sleep() {
        console.log('sleep');
    }
}

let cat = new Cat();

cat.eat();
cat.sleep();

class Duck extends Animal {
    sleep() {
        console.log('duck sleep')
    }
}


let animals:Animal[] = [new Cat(), new Duck()]

animals.forEach((animal)  => {
    animal.sleep();
})



// 类与接口

interface Human {
    name: string;
    eat:() => void;
}

class Man implements Human {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat() {
        console.log('eat')
    }
}

// 接口只能约束公有成员
// 实现一个接口必须包含接口定义的所有属性和方法
// 接口中不能定义构造函数

interface Woman extends Human {
    jump:() => void;
}

interface Child {
    cry: () => void;
}

interface Boy extends Woman,Child{

}

let boy:Boy = {
    name: 'aaa',
    jump(){},
    cry(){},
    eat(){},
}

// 接口可以继承类
 

