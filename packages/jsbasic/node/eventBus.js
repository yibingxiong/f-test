function EventBus() {
  this.eventList = {};
}

EventBus.prototype.on = function (eventName, handler) {
  if (this.eventList[eventName]) {
    this.eventList[eventName].push(handler);
  } else {
    this.eventList[eventName] = [handler];
  }
}

EventBus.prototype.off = function (eventName, handler) {
  if (this.eventList[eventName]) {
    if (typeof handler === 'function') {

      const index = this.eventList[eventName].indexOf(handler);
      if (~index) {
        this.eventList[eventName].splice(index, 1);
      }
      return;
    }
    this.eventList[eventName] = [];
  }
}

EventBus.prototype.once = function (eventName, handler) {
  // 注意这里
  const _handler = (...args) => {
    handler(...args);
    this.off(eventName, _handler);
  }
  if (this.eventList[eventName]) {
    this.eventList[eventName].push(_handler);
  } else {
    this.eventList[eventName] = [_handler];
  }
}

EventBus.prototype.emit = function (eventName, ...args) {
  const handlers = this.eventList[eventName];
  if (handlers && handlers.length) {
    // 注意这里
    handlers.concat().forEach(handler => {
      handler(...args);
    });
  }
}

const event1 = new EventBus();

event1.once('a', (...args) => {
  console.log('a2', args);
})

event1.on('a', (...args) => {
  console.log('a', args);
})

event1.on('a', (...args) => {
  console.log('a3', args);
})

event1.on('b', (...args) => {
  console.log('b', args);
})

event1.emit('a', 1, 2, 4)

console.log('--------------')
setTimeout(() => {
  event1.emit('a', 'hello')
}, 1000);

event1.emit('b');
event1.off('b', () => { })

setTimeout(() => {
  console.log('------------b')
  event1.emit('b');
}, 2000);