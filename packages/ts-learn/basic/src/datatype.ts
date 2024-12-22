// 原始类型
let bool:boolean = false;
let str:string= 'a'
let num:number = 100

// 数组

let arr1:Array<number> = [1,3,4]
let arr2:number[] = [1,3,4]

// 元组

let tuple:[string, number] = ['1',3]
tuple.push(3) // this is ok
console.log(tuple)
console.log(tuple[0])
// console.log(tuple[2]) // not ok

// 函数

let add1 = (x:number, y:number) => x+y;
let compute:(x:number, y:number) => number;

compute = (x, y) => x+y

// 对象
let obj3:{x:number,y:number} = {
    x: 1,
    y:2
}

// obj3.m = 1; // not ok


// symbol

let a12:symbol = Symbol();
console.log(a12)
let a13:symbol = Symbol();
console.log(a12 === a13)

// undefined null


let un:undefined = undefined
let nu:null = null;


// a12 = undefined 需要设置strictNullChecks

// void
let noReturn = () => {}

// any
let a14 = 1;

// never
let error = () => {
    throw new Error();
}
// never
let endless = () => {
    while(true){}
}

// 枚举
// 数字枚举

enum Role {
    Owner=3,
    Master,
    Guest,
}
console.log(Role)
console.log(Role.Owner)

// 字符串枚举

enum Str {
    hi= "hi",
    hello='hello',
}

console.log(Str)

// 枚举成员值不能被修改

// 常量枚举会被直接替换为值
const enum Fruit {
    Apple,
    Banala,
}

console.log([Fruit.Apple])

// 两种枚举无法进行比较

