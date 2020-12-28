import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import NoMatch from './components/NoMatch';


const TestAdvacedGuides = lazy(() => import('./pages/TestAdvacedGuides'));


function App() {

  return (
    <React.Fragment>
      <Router>
        <Link to="/">首页</Link><br/>
        <Link to="/TestAdvacedGuides">测试高级指引</Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={TestAdvacedGuides} />
            <Route path="/TestAdvacedGuides" component={TestAdvacedGuides} />
            <Route component={NoMatch} />
          </Switch>
        </Suspense>
      </Router>
    </React.Fragment>
  );
}

export default App;
