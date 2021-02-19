
function test1(v: string): void {
    console.log(v)
}

interface test2 {
    (v: string): void;
}

type test3 = (v: string) => void;

let test4: (v: string) => void;

// 可选参数
function test5(v: number, v2?: number) {
    return typeof v2 === 'undefined' ? v : v + v2;
}

test5(1);
test5(1, 3);

// 默认参数

function test6(x1: number, x2 = 1, x3 = 4) {
    return x1 + x2 + x3;
}

test6(1);
test6(1,2);
test6(1, undefined, 3);


// 剩余参数

function test7(x1:number, ...x2: number[]) {
    return x1 + x2.reduce((pre,cur) => pre+cur);
}

test7(1,3,4,5);


// 重载

function add8(...rest: number[]):number;
function add8(...rest: string[]):string;
function add8(...rest:any[]):any {
    let first = rest[0];
    if (typeof first === 'string') {
        return rest.join(',')
    }
    if (typeof first === 'number') {
        return rest.reduce((pre, cur) => pre+cur);
    }
    return 0;
}


