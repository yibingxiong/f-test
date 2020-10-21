let a = new String('a');

console.log(a.toString());

console.log(a.__proto__);
console.log(a.__proto__.constructor)
console.log(typeof a.__proto__.toString)

String.prototype.b = '3'

console.log(a.b);

let b = {
    ba:3
};

console.log(b.__proto__) // {}

// output
// a
// [String: '']
// [Function: String]
// function
// function
// 3
// {}