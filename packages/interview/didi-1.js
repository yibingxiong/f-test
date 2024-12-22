class EventBus {
  constructor() {
    this.handlers = {}
  }

  on(eventName, handler) {
    if (!this.handlers[eventName]) {
      this.handlers[eventName] = [handler];
    } else {
      this.handlers[eventName].push(handler);
    }
  }

  off(eventName, handler) {
    if (this.handlers[eventName]) {
      if (typeof handler === 'undefined') {
        this.handlers[eventName] = [];
      } else {
        const idx = this.handlers.indexOf(handler);
        if (idx > -1) {
          this.handlers[eventName].splice(idx, 1);
        }
      }
    }
  }

  emit(eventName, ...args) {
    if (this.handlers[eventName]) {
      this.handlers[eventName].forEach(handler => {
        if (!handler.eventNames) {
          handler.apply(this, args);
        } else {
          if (!~handler.finishedEvents.indexOf(eventName)) {
            handler.finishedEvents.push(eventName);
            if (handler.finishedEvents.length === handler.eventNames.length) {
              handler.apply(this, eventName);
              handler.finishedEvents = [];
            }
          }
        }
      });
    }
  }

  all(eventNames, handler) {
    handler.eventNames = eventNames;
    handler.finishedEvents = [];
    eventNames.forEach((eventName) => {
      if (!this.handlers[eventName]) {
        this.handlers[eventName] = [handler];
      } else {
        this.handlers[eventName].push(handler);
      }
    })
  }
}