function log<T>(value: T): T {
    console.log(value);
    return value;
}

log([1,3,4]);
log<string[]>(["1", "2", "3"]);


type Log = <T>(value: T) => T

let log2: Log = log;


interface Log2 {
    <T>(value: T) :T;
}

let log3: Log2 = log

interface Log3<T> {
    (value: T): T;
}

let log4: Log3<string> = log

log4('3')

const a  = log3(10);

console.log(a)

/////////////////////


class Log4<T> {
    log(v: T):T {
        console.log(v);
        return v;
    }
}

const log5 = new Log4<string>()

log5.log('aaaa')

console.log('---------------1')

interface Length {
    length:number;
}

function log6<T extends Length>(v: T): T {
    console.log(v, v.length);
    return v;
}