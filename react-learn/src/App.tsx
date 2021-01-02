import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import NoMatch from './components/NoMatch';


const TestAdvacedGuides = lazy(() => import('./pages/TestAdvacedGuides'));

const UseTS = lazy(() => import('./pages/UseTs'));

const TestRedux = lazy(() => import('./pages/TestRedux'));


function App() {

  return (
    <React.Fragment>
      <Router>
        <Link to="/">首页</Link><br/>
        <Link to="/TestAdvacedGuides">测试高级指引</Link><br/>
        <Link to="/TestRedux">测试使用redux</Link><br/>
        <Link to="/UseTS">测试使用TS</Link><br/>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={UseTS} />
            <Route path="/TestAdvacedGuides" component={TestAdvacedGuides} />
            <Route path="/TestRedux" component={TestRedux} />
            <Route path="/UseTS" component={UseTS} />
            <Route component={NoMatch} />
          </Switch>
        </Suspense>
      </Router>
    </React.Fragment>
  );
}

export default App;
