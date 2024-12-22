import { createStore } from 'redux';

import('./hello.es').then((res) => {
  console.log(res);
});

console.log(createStore);
