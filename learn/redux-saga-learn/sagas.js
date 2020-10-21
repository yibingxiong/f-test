import { delay } from 'redux-saga'
import { put, takeEvery, all, call, select, take } from 'redux-saga/effects'

// ...

// Our worker Saga: 将执行异步的 increment 任务
export function* incrementAsync() {
  yield call(delay, 1000)
  yield put({ type: 'INCREMENT' })
}

// Our watcher Saga: 在每个 INCREMENT_ASYNC action spawn 一个新的 incrementAsync 任务
export function* watchIncrementAsync() {
  
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}


export function* log() {
  while (true) {
    const action = yield take('*')
    const state = yield select()

    console.log('action', action)
    console.log('state after', state)
  }
}
// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
      log(),
      watchIncrementAsync()
    ])
  }