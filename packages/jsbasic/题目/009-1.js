
// @See https://hejialianghe.gitee.io/jsadvanced/asyncpro.html#_3-7-3-%E5%AE%9E%E7%8E%B0promise%E5%8E%9F%E5%9E%8B%E4%B8%8A%E7%9A%84then%E6%96%B9%E6%B3%95
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
// executor执行器，就是我们new Promise((resolve,reject)=>) 传过来的函数，它是同步执行的
function Promise(executor) {

  const self = this
  self.status = PENDING
  self.state = undefined
  self.callbackQueues = []

  function resolve(value) {
    if (self.status !== PENDING) return
    self.status = FULFILLED
    self.state = value

    if (self.callbackQueues.length > 0) {
      self.callbackQueues.map(item => {
        setTimeout(() => {
          item.onResolved(value)
        })
      })
    }
  }
  function reject(reason) {
    if (self.status !== PENDING) return
    self.status = REJECTED
    self.state = reason

    if (self.callbackQueues.length > 0) {
      self.callbackQueues.map(item => {
        setTimeout(() => {
          item.onRejected(reason)
        })
      })
    }
  }
  try {
    executor(resolve, reject)
  } catch (err) {
    reject(err)
  }
}


/**
* then方法指定了成功的和失败的回调函数
* 返回一个新的promise对象，它实现了链式调用
* 返回的promise的结果由onResolved和onRejected决定
*/
Promise.prototype.then = function (onResolved, onRejected) {

  onResolved = typeof onResolved === 'function' ? onResolved : value => value
  onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }
  const seft = this

  return new Promise((resolve, reject) => {
    function handle(callback) {
      try {
        const result = callback(seft.state)
        if (result instanceof Promise) {
          result.then(
            (res) => {
              resolve(res)
            },
            err => { reject(err) })

        } else {
          resolve(result)
        }
      } catch (err) {
        reject(err)
      }
    }

    if (seft.status === PENDING) { // 当是Promise状态为pending时候，将onResolved和onRejeactd存到数组中callbackQueues
      seft.callbackQueues.push({
        onResolved(value) {
          handle(onResolved)
        },
        onRejected(reason) {
          handle(onRejected)
        }
      })
    } else if (seft.status === FULFILLED) {
      setTimeout(() => {
        handle(onResolved)
      })
    } else {
      setTimeout(() => {
        handle(onRejected)
      })
    }
  })

}
/**
* 传入失败回调
* 返回一个新的Promise
*/
Promise.prototype.catch = function (OnRejected) {
  return this.then(undefined, OnRejected)
}
/**
* Promise函数对象的resove方法
* 返回一个指定结果成功的promise
*/
Promise.resolve = function (value) {
  return new Promise((resolve, reject) => {
    if (value instanceof Promise) {
      value.then(resolve, reject)
    } else {
      resolve(value)
    }
  })
}
/**
*  Promise函数对象的reject方法
* 返回一个指定reason失败的promise
*/
Promise.reject = function (reason) {
  return new Promise((resove, reject) => {
    reject(reason)
  })
}
/**
* 所有成功才成功，有一个失败就失败
* 返回一个的Promise，这个promise的结果由传过来的数组决定，一个失败就是失败
*/
Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let values = []
    promises.map(item => {
      if (item instanceof Promise) {
        item.then(
          (res) => {
            values.push(res)
          }
          , reject)
      } else {
        setTimeout(() => {
          values.push(item)
        })
      }
    })
    setTimeout(() => {
      if (values.length === promises.length) {
        resolve(values)
      }
    });
  })

}
/**
* 第一个成功就成功，如果不成功就失败(就是最先拿到谁的值，就成功)
* 返回一个Promsie
*/
Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    promises.map(item => {
      if (item instanceof Promise) {
        item.then(
          resolve
          , reject)
      } else {
        resolve(item)
      }
    })
  })
}


new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000);
})
  .then(r => {
    console.log('1', r);
    return 2;
  })
  .then(r => {
    console.log('2', r.toUPPer());
    return 3;
  })
  .then(r => {
    console.log('3', r);
  })
  .catch(e => {
    console.log('dddd', e)
  })
