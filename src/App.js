import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// import pages
import Content from './pages/Content';
import Landing from './pages/Landing';
// import components
import Header from './components/Header';
import Footer from './components/Footer';

// import styles
import './App.css';
import useStyles from './utils/styles';
import theme from './utils/theme';

function App() {
  const classes = useStyles();

  const [navActive, setNavActive] = useState(false);
  
  const [navSection] = useState([
    {name: 'About Me'},
    {name: 'Contact Me'},
    {name: 'Portfolio'},
    {name: 'Resume'}
  ]);

const [currentSection, setCurrentSection] = useState(navSection[0]);

  return (
    <ThemeProvider theme={theme}>
      <Header 
        classes={classes}
        setNavActive={setNavActive}
        navActive={navActive}
        setCurrentSection={setCurrentSection}
        navSection={navSection}
      />
      <main>
        
        {!navActive 
          ? <Landing classes={classes} />

          : <Container maxWidth='xl'>
              <Content 
                classes={classes}
                currentSection={currentSection} 
              />
            </Container> 
        } 
              
      </main>
      <Footer classes={classes} />
    </ThemeProvider>
  );
}

export default App;