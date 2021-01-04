import React from 'react';
import {
  StaticRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import loadable from '@loadable/component'

const PageA = loadable(() => import(/* webpackChunkName: "PageA" */ './page/PageA'));

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            component={PageA}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
