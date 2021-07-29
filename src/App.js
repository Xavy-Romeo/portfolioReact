import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Content from './pages/Content';
import Landing from './pages/Landing';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        
        <Route exact path='/'>
          <Landing />
        </Route>
        
        <Route exact path='/XR'>
          <Content />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;