import { data } from "jquery"

interface List {
    id: number;
    title: string;
}

interface Result {
    data: List[];
}

function render(res: Result) {
    for (const iterator of res.data) {
        console.log(iterator)
    }
}

const res = {
    data: [
        {id: 1, title: 'hello'}
    ]
}

render(res);

// 接口与函数

let add3: (v:string) => void;

interface add4 {
    (v:string):void;
}

type add5 = (v:string) => void;


let add6:add5 = (v) => {
    console.log(v);
}

add6('aaaaa')

// 混合接口
interface Lib {
    version:string;
    ():void;
    method:(v:string) => void;
}



function getLib():Lib {
    let lib:Lib = (() => {}) as Lib
    lib.method = function(v) {
        console.log(v);
    }
    lib.version = '1.0.0';
    return lib;
}

const lib1 = getLib();
lib1.method("hello");
