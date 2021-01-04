import React from 'react';
import ReactDOM from 'react-dom';
import App from './App-web';

const render = ReactDOM.hydrate;

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

