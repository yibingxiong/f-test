class EventEmiter {
    constructor() {
        this.list = {};
    }

    listen(key, fn) {
        if(!this.list[key]) {
            this.list[key] = [];
        }
        this.list[key].push(fn);
    }

    emit() {
        let key = Array.prototype.shift.call(arguments);
        let fns = this.list[key];
        if (!fns || fns.length === 0) {
            return false;
        }

        for(let i = 0; i < fns.length; i++) {
            fns[i].apply(this, arguments);
        }
    }
}

let eventEmiter  = new EventEmiter();

eventEmiter.listen('test', function(){
    console.log('参数', arguments);
})

eventEmiter.emit('test', '参数');
// output
// 参数 { '0': '参数' }