let arr = [
    {
        uid: '1',
        name: 'test1'
    },
    {
        uid: '2',
        name: 'test2'
    },
    {
        uid: '3',
        name: 'test3'
    },
    {
        uid: '4',
        name: 'test4'
    },

];

let arr2 = [
    {
        uid: '2',
        name: 'test2'
    },
    {
        uid: '3',
        name: 'test3'
    }
];

let arr3 = arr.filter((item) => {
    return arr2.indexOf(item) < 0;
})

console.log(arr3);