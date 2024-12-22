function createStore(initialState, reducer, enhancer) {
  let state = initialState;
  let listeners = [];
  let nextListeners = [];

  if (enhancer) {
    return enhancer(createStore)(state, reducer);
  }
  function dispatch(action) {
    let curState = state;
    const newState = reducer(curState, action);
    state = newState;
    listeners = nextListeners;
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
    return action;
  }

  function getState() {
    return state;
  }

  function subscribe(listener) {
    nextListeners.push(listener);
    return function unsubscribe() {
      const index = nextListeners.indexOf(listener)
      nextListeners.splice(index, 1)
      listeners = null;
    }
  }

  return {
    dispatch,
    getState,
    subscribe,
  }
}

module.exports = createStore