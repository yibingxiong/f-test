const createStore = require('./Redux');

let store = createStore({ a: 1, b: 2 }, (state, action) => {
  switch (action.type) {
    case 'setA':
      return {
        ...state,
        a: action.payload,
      }
    case 'setB':
      return {
        ...state,
        a: action.payload,
      }
    default:
      return state;
  }
}, (oldCreateStore) => (initState, reducer) => {
  let store = createStore(initState, reducer);
  function dispatch(action) {
    console.log('增强了哦');
    store.dispatch(action);
  }
  return {
    ...store,
    dispatch,
  }
})

const un1 = store.subscribe(() => {
  console.log('listen1')
  console.log(store.getState())
});

const un2 = store.subscribe(() => {
  console.log('listen2')
  console.log(store.getState())
});

store.dispatch({
  type: 'setA',
  payload: 3,
})

store.dispatch({
  type: 'setB',
  payload: 10,
})

un1();

store.dispatch({
  type: 'setB',
  payload: 4,
})
