let EventEmitter = require('events').EventEmitter;

function test() {
    let event = new EventEmitter();
    console.log('hhhhh')
    event.emit('success');
    return event;
}

test().on('success', function() {
    console.log('done')
})