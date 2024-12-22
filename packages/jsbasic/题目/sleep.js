

function MyFn(name) {
  this.name = name;
  this.status = 0;
  this.pendingQueue = [];
}

function task(type, foo) {
  return () => {
    console.log(this.name + type + foo);
  }
}

MyFn.prototype.play = function(foo) {
  const t = task.call(this, '玩', foo);
  if (this.status === 0) {
    t();
  } else {
    this.pendingQueue.push(t);
  }
  return this;
}

MyFn.prototype.eat = function(bar) {
  const t = task.call(this, '吃', bar);
  if (this.status === 0) {
    t();
  } else {
    this.pendingQueue.push(t);
  }
  return this;
}

MyFn.prototype.sleep = function(time) {
  console.log('休息' + time + '分钟' );
  this.status = 1;
  setTimeout(() => {
    this.status = 0;
    for(const t of this.pendingQueue) {
      t();
    }
  }, time*1000);
  return this;
}

new MyFn('张三').play('足球').play('篮球').sleep(3).eat('food').eat('foot')