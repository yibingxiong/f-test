// 外部迭代器

function Iterator(obj) {
    let current = 0;
    const next = function() {
        current+=1;
    };

    const isDone = function() {
        return current >= obj.length;
    };

    const getCurItem = function() {
        return obj[current];
    };

    return {
        next,
        isDone,
        getCurItem,
    }

}

let obj = [1,2,3,4,5];

let itrator = Iterator(obj);

while(!itrator.isDone()) {
    console.log(itrator.getCurItem())
    itrator.next();
}
// output
// 1
// 2
// 3
// 4
// 5