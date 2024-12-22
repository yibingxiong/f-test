import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'

import createSagaMiddleware from 'redux-saga'



import helloSaga  from './sagas'

import Counter from './Counter'
import reducer from './reducers'

const sagaMiddleware = createSagaMiddleware(helloSaga)

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

const action = type => store.dispatch({type})

sagaMiddleware.run(helloSaga)

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')} 
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
      />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
