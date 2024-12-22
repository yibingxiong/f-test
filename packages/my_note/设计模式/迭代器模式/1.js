// 内部迭代器

function each(arry, callback) {
    for (let i = 0; i < arry.length; i++) {
        callback.call(arry[i], arry[i], i, arry);
    }
}

let a = [1,3,3,4];

each(a, function(item, i, arry) {
    console.log(item, i);
})

// output
// 1 0
// 3 1
// 3 2
// 4 3