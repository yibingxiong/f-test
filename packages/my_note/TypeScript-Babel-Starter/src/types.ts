function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        console.log('id3', id);
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        console.log('id2', id);
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class Person {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        console.log(1)
    }
}

let k =  new ConsoleLogger();

k.log();
console.log(Object.getOwnPropertyNames(k)) 
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
console.log(n)
// jim.log();