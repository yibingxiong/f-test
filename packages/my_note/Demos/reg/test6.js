let str = '[helloworld] hello58';
let reg = /]/;
console.log(str.match(reg));
let reg2 = /\[/;
console.log(str.match(reg2));
let reg3 = /hello(?=world)/;
console.log(str.match(reg3));
