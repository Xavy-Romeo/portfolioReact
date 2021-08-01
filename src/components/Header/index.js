import React, { useState, useEffect } from 'react';
import { throttle, debounce } from '../../utils';

// import components
import Nav from '../Nav';

// import Material UI components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from '@material-ui/core/Link';

export default function Header({ classes }) {
    const [headerActive, setHeaderActive] = useState(false);

    const changeHeader = () => {
        if (window.scrollY > 5) {
            setHeaderActive(true);
        }
        else {
            setHeaderActive(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', throttle(debounce(changeHeader)));
        return () => window.removeEventListener('scroll', throttle(debounce(changeHeader)));
    }, []);



    return (
        <AppBar className={headerActive ? `${classes.appBar} ${classes.headerActive}` : `${classes.appBar}`}>
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