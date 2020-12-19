// 联合类型

interface Rectangle {
    kind: 'rect';
    width: number;
    height: number;
}

interface Squire {
    kind: 'sq';
    sizde: number;
}
interface Circle {
    kind: 'circle';
    r: number;
}
function getArea(s: Squire | Rectangle | Circle): number {
    switch (s.kind) {
        case 'rect':
            return s.width * s.height;
        case 'sq':
            return s.sizde * s.sizde;
        case 'circle':
            return s.r * s.r * Math.PI;
        default:
            return ((e: never) => { throw new Error(e) })(s) // 如果case覆盖不全，这里会报错，帮助检查是否覆盖了所有分支
    }
}

interface Dog {
    run: () => void;
}

interface Cat {
    eat: () => void;
}

let pet: Dog & Cat = {
    run() {

    },
    eat() {

    }
}

let obj = {
    a: 1,
    b: 2,
    c: 3,
}

function getValues(obj: any, keys: string[]) {
    return keys.map((k) => obj[k]);
}

console.log(getValues(obj, ['a', 'b'])); // [1, 2]
console.log(getValues(obj, ['c', 'd'])); // [3, undefined] 尝试获取不存在的属性并不报错


function getValues2<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map((k) => obj[k]);
}

console.log(getValues2(obj, ['a', 'b'])); // [1, 2]
// console.log(getValues2(obj, ['c', 'd'])); // 这里会报错

// 映射类型

interface Obj {
    a: string;
    b: boolean;
    c: number;
}

type ReadOnlyObj = Readonly<Obj> // 生成一个只读类型

/**
 * 原理：
 * type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
 */

type PartialObj = Partial<Obj> // 所有属性变为可选

/**
 * 原理：
 * type Partial<T> = {
   [P in keyof T]?: T[P];
};
 */

type PickOjb = Pick<Obj, 'a' | 'b'> // 使用选定属性生成一个新的类型

/**
 * 原理
 * type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
 */

type RecordObj = Record<'x' | 'y', Obj>



// T extends U ? X : Y

type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object";
type T1 = TypeName<string>
type T2 = TypeName<string[]>

// (A | B) extends U ? X : Y
// (A extends U ? X : Y) | (B extends U ? X : Y)
type T3 = TypeName<string | string[]>

type Diff<T, U> = T extends U ? never : T
type T4 = Diff<"a" | "b" | "c", "a" | "e">
// Diff<"a", "a" | "e"> | Diff<"b", "a" | "e"> | Diff<"c", "a" | "e">
// never | "b" | "c"
// "b" | "c"

type NotNull<T> = Diff<T, null | undefined>
type T5 = NotNull<string | number | undefined | null>

// Exclude<T, U>
// NonNullable<T>

// Extract<T, U>
type T6 = Extract<"a" | "b" | "c", "a" | "e">

// ReturnType<T>
type T8 = ReturnType<() => string>