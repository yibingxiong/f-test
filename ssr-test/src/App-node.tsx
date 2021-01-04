import React from 'react';
import {
  StaticRouter as Router,
  Switch,
  Route,
  StaticRouterProps,
} from 'react-router-dom'
import loadable from '@loadable/component'
// import PageA from './page/PageA'

const PageA = loadable(() => import('./page/PageA'));


export const routes = [
  {
    path: '/abcdef',
    component: PageA
  }
]
type AppFn = (param: StaticRouterProps) => JSX.Element;

const App: AppFn = ({ context, location }) => {
  const Root = () => {
    console.log({
      context,
      location
    })
    return (
      <Router context={context} location={location}>
        <div className="App">
          <Switch>
            {
            routes.map((route, index) => {
              return <Route key={index} {...route} />
            })
          }
          </Switch>
        </div>
      </Router>
    )
  }
  return <Root />
}

export default App;
