import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import(/* webpackChunkName: "home" */'./pages/Home'));
const About = lazy(() => import(/* webpackChunkName: "about" */'./pages/About'));
const ContextTest = lazy(() => import(/* webpackChunkName: "contextTest" */'./pages/ContextTest'));
const ErrorBoundry = lazy(() => import(/* webpackChunkName: "ErrorBoundry" */'./pages/ErrorBoundry'));
const PortalTest = lazy(() => import(/* webpackChunkName: "PortalTest" */'./pages/PortalTest'));
const ForwardRefTest = lazy(() => import(/* webpackChunkName: "ForwardRefTest" */'./pages/ForwardRefTest'));
const HookTest = lazy(() => import(/* webpackChunkName: "HookTest" */'./pages/HookTest'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/context" component={ContextTest} />
        <Route path="/ErrorBoundry" component={ErrorBoundry}/>
        <Route path="/PortalTest" component={PortalTest}/>
        <Route path="/ForwardRefTest" component={ForwardRefTest}/>
        <Route path="/HookTest" component={HookTest}/>
      </Switch>
    </Suspense>
  </Router>
);

export default App;
