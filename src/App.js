import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

// import pages
import Content from './pages/Content';
import Landing from './pages/Landing';
// import components
import Header from './components/Header';
import Footer from './components/Footer';

// import styles
import './App.css';
import { useStyles } from './utils/styles';

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider>
      <Router>
          <Header classes={classes} />
          
          <Switch>
            <Route exact path='/'>
              <Landing classes={classes} />
            </Route>
            
            <Route exact path='/XR'>
              <Content classes={classes} />
            </Route>
          </Switch>

          <Footer classes={classes} />
          
      </Router>
    </ThemeProvider>
  );
}

export default App;