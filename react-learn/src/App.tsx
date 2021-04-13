import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import NoMatch from './components/NoMatch';
import './App.css'

const TestAdvacedGuides = lazy(() => import('./pages/TestAdvacedGuides'));

const Index = lazy(() => import('./pages/Index'));
const UseTS = lazy(() => import('./pages/UseTs'));

const TestRedux = lazy(() => import('./pages/TestRedux'));

const TestBullets = lazy(() => import('./pages/TestBullets'));
const TestList = lazy(() => import('./pages/TestList'));
const TestList2 = lazy(() => import('./pages/TestList2'));
const TestSetState = lazy(() => import('./pages/TestSetState'));
const LifeCycleTest = lazy(() => import('./pages/LifeCycleTest'));
const TestHooks = lazy(() => import('./pages/TestHooks'));
const TestEvents = lazy(() => import('./pages/TestEvents'));


function App() {

  return (
    <React.Fragment>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/TestAdvacedGuides" component={TestAdvacedGuides} />
            <Route path="/TestRedux" component={TestRedux} />
            <Route path="/UseTS" component={UseTS} />
            <Route path="/TestBullets" component={TestBullets} />
            <Route path="/TestList" component={TestList} />
            <Route path="/TestList2" component={TestList2} />
            <Route path="/TestSetState" component={TestSetState} />
            <Route path="/LifeCycleTest" component={LifeCycleTest} />
            <Route path="/TestHooks" component={TestHooks} />
            <Route path="/TestEvents" component={TestEvents} />
            <Route component={NoMatch} />
          </Switch>
        </Suspense>
      </Router>
    </React.Fragment>
  );
}

export default App;
