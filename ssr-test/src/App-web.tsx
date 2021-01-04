import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import loadable from '@loadable/component'

const PageA = loadable(() => import('./page/PageA'));

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
        </Switch>
      </div>
    </Router>
  )
}

export default App;
