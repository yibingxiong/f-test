let s = "hello hello";

let reg = /hello/;

console.log(reg.exec(s));

let reg2 = /hello/g;

console.log(reg2.exec(s));