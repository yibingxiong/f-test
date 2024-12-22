let EventEmitter = require('events').EventEmitter;

function test() {
    let event = new EventEmitter();
    console.log('hhhhh')
    process.nextTick(function(){
        console.log(99)
        event.emit('success')
    }
    );
    return event;
}

test().on('success', function() {
    console.log('done')
})