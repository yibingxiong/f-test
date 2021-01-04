import React from 'react';
import {
  StaticRouter as Router,
  Switch,
  Route,
  Redirect,
  StaticRouterProps,
} from 'react-router-dom'
import loadable from '@loadable/component'

const PageA = loadable(() => import(/* webpackChunkName: "PageA" */ './page/PageA'));

type AppProps = StaticRouterProps;

export const routes = [
  {
    path: '/',
    component: PageA
  }
]

const App: React.FC<AppProps> = ({ context, location }) => {
  return (
    <Router context={context} location={location} basename='/'>
      <div className="App">
        <Switch>
          {
            routes.map((route, index) => {
              return <Route  key = {index} {...route} />
            })
          }
        </Switch>
      </div>
    </Router>
  )
}

export default App;
