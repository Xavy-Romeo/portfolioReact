import React from 'react';

import Nav from '../Nav';

// import Material UI components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from '@material-ui/core/Link';

export default function Header({ classes }) {
    
    return (
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
                <Box className={classes.nameContainer}>
                    <Link
                        href='/'
                        className={classes.noDecoration} 
                    >
                        <Typography 
                            id='my-name'
                            className={classes.myName} 
                            component='span' 
                            variant='h1'  
                        >
                            Xavy Romeo
                        </Typography>
                    </Link>
                </Box>
                <Box>
                    <Nav 
                        classes={classes}
                    />
                </Box>
            </Toolbar>
        </AppBar>
    );
};