import React from 'react'
import ReactDOM from 'react-dom'
import { loadableReady } from '@loadable/component'
import App from './App-web'


let render: ReactDOM.Renderer
const root = document.getElementById('root')

if (root && root.innerHTML !== "") {
  render = ReactDOM.hydrate;
} else {
  render = ReactDOM.render;
}


loadableReady(() => {
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
    root)
})

