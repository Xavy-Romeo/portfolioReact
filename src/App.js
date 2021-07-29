import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import pages
import Content from './pages/Content';
import Landing from './pages/Landing';
// import components
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        
        <Switch>
          
          <Route exact path='/'>
            <Landing />
          </Route>
          
          <Route exact path='/XR'>
            <Content />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;