
export interface Action<T = any> {
  type: T;
}

export interface AnyAction extends Action {
  // Allows any extra properties to be defined in an action.
  [extraProps: string]: any
}

export interface Dispatch<A extends Action> {
  (action: A): void;
}

export interface Unsubscribe {
  (): void;
}

export type Reducer<S = any, A extends Action = AnyAction> = (
  state: S,
  action: A
) => S

export interface Store<S = any, A extends Action = AnyAction> {
  dispatch: Dispatch<A>
  getState(): S;
  subscribe(listener: Listener): Unsubscribe
}

export interface Listener {
  (): void;
}

function createStore<S = any, A extends Action = AnyAction>(reducer: Reducer<S, A>, initialState: S):
  Store<S, A> {
  let preState = initialState;
  let state = initialState;
  const listeners: Listener[] = [];
  function dispatch(action: A) {
    state = reducer(preState, action);
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }
  function getState(): S {
    return state;
  }

  function subscribe(listener: Listener): Unsubscribe {
    listeners.push(listener);
    return () => {
      const i = listeners.indexOf(listener);
      listeners.splice(i, 1);
    }
  }

  dispatch({ type: Symbol() } as A)

  return {
    dispatch,
    getState,
    subscribe
  }
}

export { createStore };