import React, { useEffect } from 'react';

import About from '../components/About';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Sea from '../assets/sea.png';
import Sun from '../assets/sun.webp';
import Yatch from '../assets/yatch.png';
import Ship from '../assets/pirate-ship.png';
import Cloud from '../assets/cloud.png';
import Palm from '../assets/palm-tree.webp'



export default function Landing({ classes }) {

    useEffect(() => {
        const sun = document.getElementById('sun');
        const cloud = document.getElementById('cloud');
        const cloud2 = document.getElementById('cloud2');
        const yatch = document.getElementById('yatch');
        const ship = document.getElementById('ship');
        const title = document.getElementById('title');

        window.addEventListener('scroll', () => {
            var value = window.scrollY;
            sun.style.transform = `translate3d(-${value*.5}px, ${value*.75}px , 0px)`;
            cloud.style.transform = `translate3d(-${value*.5}px, ${value*.35}px , 0px)`;
            cloud2.style.transform = `translate3d(-${value*.5}px, ${value*.15}px , 0px)`;
            yatch.style.transform = `translate3d(-${value*2}px, ${value*.1}px , 0px)`;
            ship.style.transform = `translateX(-${value*.15}px)`;
            title.style.transform = `translateY(${value*1.5}px)`;
        });  
    });

    return (
        <>
            <Box className={classes.landingPageContainer}>
                <img src={Sun} className={classes.landingSun} id='sun' />
                <img src={Cloud} className={classes.landingCloud} id='cloud' />
                <img src={Cloud} className={classes.landingCloud2} id='cloud2'/>
                <img src={Yatch} className={classes.landingYatch} id='yatch' />
                <img src={Ship} className={classes.landingShip} id='ship' />
                <img src={Sea} className={classes.landingSea} id='sea' />  
                <img src={Palm} className={classes.landingPalm} id='palm'/>          
                <Typography className={classes.landingTitle} variant='h2' id='title'>
                    Xavy Romeo
                </Typography>      
            </Box>

            <Container maxWidth='xl'>
                <About classes={classes} />
            </Container>
        </>
    );
};