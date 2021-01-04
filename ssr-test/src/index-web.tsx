import React from 'react'
import ReactDOM from 'react-dom'
import App from './App-web'


let render:ReactDOM.Renderer
const root = document.getElementById('root')

if (root && root.innerHTML !== "") {
  render = ReactDOM.hydrate;
} else {
  render = ReactDOM.render;
}

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

