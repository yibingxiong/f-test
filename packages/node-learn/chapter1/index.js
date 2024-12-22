let CounterStream = require('./countStream');
let counterStream = new CounterStream('资讯');
var http = require('http');

http.get('http://bbs.xiaomi.cn/', res => {
    res.pipe(counterStream);
});

counterStream.on('total', count => {
    console.log(count);
});