let s = 'hello hello hello';


console.log(s.search('e'));

let reg1 = /hello/;
console.log(s.search(reg1));
console.log(s.search(reg1));

console.log(s.search('wfff'));

let ma = s.match(reg1);
let reg2 = /hello/g;




console.log(ma)
console.log(s.match(reg2));
