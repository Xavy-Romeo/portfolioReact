import React from 'react';

import Box from '@material-ui/core/Box';

import About from '../components/About';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import Resume from '../components/Resume';

export default function Content({ classes, currentSection }) {
    return (
        <Box className={classes.contentPageContainer}>
            {currentSection === 'Contact Me' &&
                <Contact classes={classes} />
            }
            {currentSection === 'Portfolio' &&
                <Portfolio classes={classes} />
            }
            {currentSection === 'Resume' &&
                <Resume classes={classes} />
            }

            <About classes={classes} />
        </Box>
    );
};