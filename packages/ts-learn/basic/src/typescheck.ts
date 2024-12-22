let b = 1; // number

let c = (x=1) => {} // x -> number

let d = () => {return 1} // d -> number

let e = [1, null] // e -> number | null

window.onkeydown = (e: KeyboardEvent) => { // e -> KeyboardEvent
    // console.log(e)
}

interface Foo {
    name: string;
}

let f = {} as Foo;

console.log(f.name)

function overide (a:number, b: number):number;
function overide (a: string, b: string): string;
function overide(a: any, b:any):any {}

interface A {
    a: string;
    b: number;
    c: number;
}

interface B {
    a: string;
}

let g:A = {
    a: '1',
    b: 1,
    c: 1,
}

let h:B = g; // this is ok

enum fruit {
    Apple,
    Banala,
}

enum Color {
    Red,
    Blue
}

let i: fruit.Apple = 1;

let j:number = fruit.Apple;

// let color: Color.Blue = fruit.Banala; // error

interface Empty<T> {
    v: T;
}

let k: Empty<number> = {v: 1}
let l: Empty<string> = {v: '1'}

// k = l; // error
// l = k; // error


class Java {
    helloJava() {
        console.log('hello java')
    }
    java: any
}

class JavaScript {
    helloJs() {
        console.log('hello js')
    }
    js: any
}

enum Type {
    Strong,
    Week,
}

function isJava(lang: JavaScript|Java): lang is Java {
    return (lang as Java).helloJava !== undefined;
}
function getLanguage(type: Type) {
    let lang = type === Type.Strong?new Java():new JavaScript();

    // if ((lang as Java).helloJava) {
    //     (lang as Java).helloJava();
    // } else {
    //     (lang as JavaScript).helloJs();
    // }

    // if (lang instanceof Java) {
    //     lang.helloJava();
    // }
    // if (lang instanceof JavaScript) {
    //     lang.helloJs();
    // }

    if ('java' in  lang) {
        lang.helloJava();
    } else {
        lang.helloJs();
    }
}

function test3(x: string|number) {
    if (typeof x === 'string') {
        x.lastIndexOf('a');
    } else {
        x.toExponential()
    }
}