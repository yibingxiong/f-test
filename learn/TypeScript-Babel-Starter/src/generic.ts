function identity<T>(arg: T): T {
    return arg;
}

console.log('typeof 1', typeof identity(1));
console.log('typeof object', typeof identity({}));
console.log('typeof \'2\'', typeof identity('2'));

console.log(typeof identity<string>('1'));

function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}


console.log(loggingIdentity<string>(['1','2']))

interface Lengthwise {
    length: number;
}

function loggingIdentity2<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

console.log('--------');
console.log(loggingIdentity2(['1',4]));