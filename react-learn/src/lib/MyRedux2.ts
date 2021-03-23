interface Reducer<S, A> {
  (state: S, action: A): S;
}

interface Action<T=any> {
  type: T;
}

interface StoreCreator<S, A> {
  (reducer: Reducer<S, A>, preloadState?: S, enhancer?: A): Store;
}

interface Enhancer<S, A> {
  (storeCreator: StoreCreator<S, A>): Store;
}

interface Store {

}

interface Listener {
  (): void;
}

const ActionTypes = {
  INIT: Symbol(),
  REPLACE: Symbol(),
}

function isPlainObject(obj:any) {
  let proto = obj;
  while(Object.getPrototypeOf(proto)!== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return proto === Object.getPrototypeOf(obj);
}

export function createStore<S, A extends Action>(
  reducer: Reducer<S, A>,
  preloadedState?: S,
  enhancer?: Enhancer<S, A>): Store {
  if (typeof reducer !== 'function') {
    throw new Error('reducer should be function')
  }

  let currentState = preloadedState || {} as S;
  let currentReducer = reducer;
  let currentListeners: Listener[] = [];
  let nextListeners: Listener[] = [];
  let isDispatching = false;

  if (typeof enhancer === 'function') {
    // @ts-ignore
    return enhancer(createStore)(reducer, preloadedState) as Store;
  }

  function getState(): S {
    return currentState;
  }

  function ensureCanMulateListners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  function subscribe(listener: Listener) {
    if (isDispatching) {
      throw new Error('.........subscribe error')
    }
    ensureCanMulateListners();
    let isSubscribed = true;
    nextListeners.push(listener);

    return function unSubscribe() {
      if (!isSubscribed) return;
      if (isDispatching) {
        throw new Error('.........subscribe error')
      }
      ensureCanMulateListners();
      const i = nextListeners.indexOf(listener);
      nextListeners = nextListeners.splice(i, 1);
      currentListeners = [];
      isSubscribed = true;
    }
  }

  function dispatch (action:A):A {
    if (!isPlainObject(action)) {
      throw new Error('must be plain object')
    }
    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.')
    }
    currentListeners = nextListeners;
    try {
      isDispatching  = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    for (const listener of currentListeners) {
      listener();
    }
    return action;
  }

  function replaceReducer<NewS,NewA extends A>(reducer: Reducer<NewS, NewA>) {
    if (isDispatching) {
      throw new Error('.........subscribe error')
    }
    (currentReducer as unknown as Reducer<NewS, NewA>) = reducer;
    dispatch({ type: ActionTypes.REPLACE } as A)
  }

  return {
    dispatch,
    subscribe,
    replaceReducer,
    getState,
  }
}