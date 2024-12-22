let dns = require('dns');

dns.lookup('www.baidu.com1', (err, address) => {
    if(err) {console.error(err)};

    console.log('address:', address);
})


dns.resolve('www.baidu.com', (err, address) => {
    if(err) {console.error(err)}
    console.log(address);
})