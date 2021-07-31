import React from 'react';

import FooterTop from '../FooterTop';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import SentimentVerySatisfiedSharpIcon  from '@material-ui/icons/SentimentVerySatisfiedSharp';
import xavyLogo from '../../assets/xavyLogo.png';


export default function Footer({ classes }) {
    return (
        <footer>
            <FooterTop classes={classes} />
            

            <Grid container className={classes.footerBottom} direction='row' justifyContent='space-between' alignItems='center' spacing={1}>
                
                <Grid item xs={1}>
                    <Grid container direction='row' justifyContent='flex-start' alignItems='center' xs={2} spacing={2}>
                        <img src={xavyLogo} height='70px' />
                    </Grid>
                </Grid>

                <Grid item xs={9} className={classes.marqueeContainer}>
                    <Typography variant='h4' className={`footer-marquee ${classes.marquee}`} >
                        <SentimentVerySatisfiedSharpIcon className={classes.marqueeIcon} fontSize='large'/>
                        Thank you for visting my site!!! 
                        <SentimentVerySatisfiedSharpIcon className={classes.marqueeIcon} fontSize='large'/>
                    </Typography>
                </Grid>

                <Grid item xs={2}>
                    <Grid container justifyContent='flex-end' alignItems='center'>
                        <Grid item>
                            <Typography className={classes.footerCopy} >
                                &copy; {new Date().getFullYear()}
                            </Typography>
                            <Typography className={classes.footerCopy} >
                                Xavy Romeo
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </footer>
    );
};