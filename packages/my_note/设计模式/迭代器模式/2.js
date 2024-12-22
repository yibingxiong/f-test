// 中止迭代器

function each(arry, callback) {
    for (let i = 0; i < arry.length; i++) {
        let res = callback.call(arry[i], arry[i], i, arry);
        if (res ===  false) {
            break;
        }
    }
}

let a = [1,3,3,4];

each(a, function(item, i, arry) {
    console.log(item, i);
    if (item === 3) {
        return false;
    }
})

// output
// 1 0
// 3 1