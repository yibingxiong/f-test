import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import NoMatch from './components/NoMatch';


const TestAdvacedGuides = lazy(() => import('./pages/TestAdvacedGuides'));

const UseTS = lazy(() => import('./pages/UseTs'));

function App() {

  return (
    <React.Fragment>
      <Router>
        <Link to="/">首页</Link><br/>
        <Link to="/TestAdvacedGuides">测试高级指引</Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={UseTS} />
            <Route path="/TestAdvacedGuides" component={TestAdvacedGuides} />
            <Route path="/UseTS" component={UseTS} />
            <Route component={NoMatch} />
          </Switch>
        </Suspense>
      </Router>
    </React.Fragment>
  );
}

export default App;
