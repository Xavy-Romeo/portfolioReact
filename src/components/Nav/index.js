import React, { useState } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from "@material-ui/core/Typography";
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';

// import Material UI icons
import MenuIcon from '@material-ui/icons/Menu';

export default function Nav({ classes, setNavActive, navSection, setCurrentSection }) {
    
    const nameLoad = () => {
        const name = document.getElementById('my-name');
        
        name.animate([
             { transform: 'translateY(150%)', opacity: '.1' },
             { transform: 'translateY(0)', opacity: '.6'},
             { transform: 'translateY(-20%)', opacity: '.6' },
             { transform: 'translateY(0)', opacity: '1' }
        ], {duration: 3000});
    };

    const [anchorEl, setAnchorEl] = useState(null);

    const openMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const closeMenu = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Hidden smUp>
                <Box>
                    <Button>
                        <MenuIcon 
                            className={classes.menuIcon} 
                            onClick={openMenu}
                        />
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={closeMenu}
                    >
                        {navSection.map((section) => (
                            <MenuItem
                                onClick={() => {
                                    nameLoad()
                                    setCurrentSection(section.name)
                                    setNavActive(true)
                                    setAnchorEl(null)
                                }} 
                                key={section.name}
                                className={classes.navLI}
                            >
                                <Typography className={classes.listSpan} id={section.name}>
                                    {section.name}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Hidden>
            <Hidden xsDown>
                <List className={classes.navSections}>
                    {navSection.map((section) => (
                        <ListItem
                            onClick={() => {
                                nameLoad()
                                setCurrentSection(section.name)
                                setNavActive(true)
                            }} 
                            key={section.name}
                            className={classes.navLI}
                        >
                            <Typography className={classes.listSpan} id={section.name}>
                                {section.name}
                            </Typography>
                        </ListItem>
                    ))}           
                </List>
            </Hidden>
            
        </>
    );
    
};