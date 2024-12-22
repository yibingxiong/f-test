let _getElementById = document.getElementById;

document.getElementById = function() {
    console.log('增加一个行为');
    _getElementById.apply(document, arguments);
}