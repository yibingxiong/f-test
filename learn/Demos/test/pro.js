Object.prototype.getName = function() {
    return 'a';
}



let c = 's'.getName();

console.log(c);

String.prototype.getName = function() {
    return 'b';
}
