import React, { useState } from 'react';
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

  const [navActive, setNavActive] = useState(false);

  return (
    <ThemeProvider>
      <Header 
        classes={classes}
        setNavActive={setNavActive} 
      />
      <main>
        {!navActive 
          ? <Landing classes={classes} />
          : <Content classes={classes} />
        }        
      </main>
      <Footer classes={classes} />
    </ThemeProvider>
  );
}

export default App;