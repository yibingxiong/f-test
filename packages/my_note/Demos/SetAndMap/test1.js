let set1 = new Set();
set1.add(1);
set1.add('1');

console.log(set1.size);

let set2 = new Set();

let key1 = {};
let key2 = {};

set2.add(key1);
set2.add(key2);
set2.add(key1);
console.log(set2.size);

let set3 = new Set([1,2,3,4,2,,43,4,3]);

console.log(set3.size);
console.log(set3.has(undefined));

set3.forEach((value, key, set) => {
    console.log(value + '--------' + key)
});

let set4 = new Set();
let key3 = {};
set4.add(key3);
key3 = null;
console.log(set4.size);

let set5 = new WeakSet();
let key4 = {};
set5.add(key4);
key4 = null;
// 没法玩了
console.log(set5.has());