import React, { useState } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from "@material-ui/core/Typography";

export default function Nav({ classes }) {
    const [navSection] = useState([
        {name: 'About Me'},
        {name: 'Contact Me'},
        {name: 'Portfolio'},
        {name: 'Resume'}
    ]);

    const [currentSection, setCurrentSection] = useState(navSection[0]);
    
    const nameLoad = () => {
        const name = document.getElementById('my-name');
        
        name.animate([
             { transform: 'translateY(150%)', opacity: '.1' },
             { transform: 'translateY(0)', opacity: '.6'},
             { transform: 'translateY(-20%)', opacity: '.6' },
             { transform: 'translateY(0)', opacity: '1' }
        ], {duration: 3000});
    };

    return (
        <List className={classes.navSections}>
            {navSection.map((section) => (
                <ListItem
                    onClick={() => {
                        setCurrentSection(section.name)
                        nameLoad()
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
    );
    
};