import React from 'react';

// import Material UI components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link';

export default function Header({ classes }) {
    
    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <Box flexGrow='1'>
                    <Link
                        href='/'
                        className={classes.noDecoration} 
                    >
                        <Typography 
                            className={classes.myName} 
                            component='span' 
                            variant='h1'   
                        >
                            XAVY ROMEO
                        </Typography>
                    </Link>
                </Box>
                <Box>
                <List className={classes.navSections}>
                   <ListItem className={classes.listLI}>
                        <Typography className={classes.listSpan}>
                            HEYAAAA
                        </Typography>
                   </ListItem>
                   <ListItem className={classes.navLI}>
                        <Typography className={classes.listSpan}>
                                    HEYAAAA
                                </Typography>
                        </ListItem>
                   <ListItem className={classes.navLI}>
                        <Typography className={classes.listSpan}>
                            HEYAAAA
                        </Typography>
                   </ListItem>
                   <ListItem className={classes.navLI}>
                        <Typography className={classes.listSpan}>
                            HEYAAAA
                        </Typography>
                   </ListItem>
                  
                </List>
                </Box>
            </Toolbar>
        </AppBar>
    );
};