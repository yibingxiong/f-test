import { combineReducers, configureStore } from '@reduxjs/toolkit';
import Redux from 'redux';
import counterReducer from '../features/counter/counterSlice';


const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});


export type CounterDispatch = typeof store.dispatch
export default store;
