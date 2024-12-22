class Chain {
    constructor(fn) {
      if (typeof fn !== 'function') {
        throw new TypeError('fn should be function');
      }
      this.fn = fn;
      this.nextSuccessor = null;
    }
  
    // 设置链的下一个节点
    setNext(fn) {
      this.nextSuccessor = fn;
    }
  
    // 开始执行
    passRequest() {
      let ret = this.fn.apply(this, arguments);
      if (ret === 'next') {
          return this.nextSuccessor && this.nextSuccessor.passRequest.apply(this.nextSuccessor, arguments)
      }
    }
  
    // 异步调用完成手动调下一个链
    next() {
      return (this.nextSuccessor) && this.nextSuccessor.passRequest.apply(this.nextSuccessor, arguments)
    }
  }

  let fn1 = new Chain(function() {
      console.log(1);
      return 'next';
  })

  let fn2 = new Chain(function() {
      console.log(2);
      setTimeout(() => {
          this.next();
      }, 1000);
  })

  let fn3 = new Chain(function() {
      console.log(3);
  })

  fn1.setNext(fn2);
  fn2.setNext(fn3);

  fn1.passRequest();