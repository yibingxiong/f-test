import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import routes from './routes'


const App: React.FC = () => {
  return (
    <Router>
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

export default App;
