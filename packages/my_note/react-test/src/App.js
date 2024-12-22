import React, { Component } from 'react';
// import './App.css';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Routers from './router';
class App extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <Router>

        <div className="App">
          <div className='aa'>
            <div id="bb"></div>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={Routers["/"]} />
          <Route path="/home" exact component={Routers["/home"]} />
          <Route path="/about" component={Routers["/about"]} />
        </div>
      </Router>
    );
  }
}

export default App;
