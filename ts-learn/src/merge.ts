interface C {
    x: string;
}

interface C {
    y: number;
}

// a1必须具有x和y属性， 如果是全局接口，那么可以分散不同文件中进行合并
let a1:C = {
    x: 'aa',
    y: 3
}