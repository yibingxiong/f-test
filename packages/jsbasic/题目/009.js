const Status = {
  'pending': 'pending',
  'resolved': 'resolved',
  'rejected': 'rejected',
}
class MPromise {
  constructor(executor) {
    this.status = Status.pending;
    this.onResolveQueues = [];
    this.onRejectQueues = [];
    const handleResolve = (v) => {
      if (this.status !== Status.pending) return;
      this.value = v;
      this.status = Status.resolved;
      setTimeout(() => {
        for (let callback of this.onResolveQueues) {
          callback(v);
        }
      }, 0);
    }
    const handleReject = (e) => {
      if (this.status !== Status.pending) return;
      this.status = Status.pending;
      this.error = e;
      setTimeout(() => {
        if (this.onRejectQueues.length === 0) {
          throw new Error('Uncaught Error in promise')
        }
        for (let callback of this.onRejectQueues) {
          callback(e);
        }
      }, 0);
    }

    try {
      executor((v) => {
        handleResolve(v);
      }, (v) => {
        handleReject(v)
      });
    } catch (e) {
      handleReject(e);
    }

  }

  static resolve(v) {
    if (v instanceof MPromise) {
      return v;
    }
    return new MPromise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 0);
    })
  }

  static reject(v) {
    return MPromise((resolve, reject) => {reject(v)});
  }


  then(onResolved, onRejected) {
    onResolved = typeof onResolved === 'function' ? onResolved : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

    return new MPromise((resolve, reject) => {
      const handle = (callback) => {
        try {
          const v = this.status === Status.resolved ? this.value : this.error;
          const result = callback(v)
          if (result instanceof MPromise) {
            result.then(
              (res) => {
                resolve(res)
              },
              err => {
                reject(err)
              }
            )
          } else {
            resolve(result)
          }
        } catch (err) {
          reject(err)
        }
      }
      if (this.status === Status.pending) {
        this.onResolveQueues.push(() => {
          handle(onResolved);
        });
        this.onRejectQueues.push(() => {
          handle(onRejected)
        })
      } else if (this.status === Status.resolved) {
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

  catch(onReject) {
    this.then(undefined, onReject);
  }
}

// const p = new MPromise((resolve) => {
//   setTimeout(() => {
//     resolve(1)
//   }, 1000);
// })

// p.then((v) => {
//   console.log('1', v, new Date());
// })

// p.then((v) => {
//   console.log('2', v, new Date());
// })

// setTimeout(() => {
//   p.then((v) => {
//     console.log('3', v, new Date());
//   })
// }, 2000);

const p = new MPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000);
})
  .then(r => {
    console.log('1', r);
    return 2;
  })
  .then(r => {
    console.log('2', r);
    return 3;
  })
  .then(r => {
    console.log('3', r.toUPP());
  })
  // .catch(e => {
  //   console.log('dddd', e)
  // })

p.catch(e => {console.log(11);console.log('3',e)})