import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';

import ContactMailSharpIcon from '@material-ui/icons/ContactMailSharp';
import ExploreSharpIcon from '@material-ui/icons/ExploreSharp';
import SentimentVerySatisfiedSharpIcon  from '@material-ui/icons/SentimentVerySatisfiedSharp';

import xavyLogo from '../../assets/xr-logo.png';
import GitHubLogo from '../../assets/github-logo.png';
import LinkedInLogo from '../../assets/linkedin-logo.svg';

export default function FooterTop({ classes }) {
    return (
                
        <Box className={classes.footerTop}>
            <Container maxWidth='xl'>
            
                <Grid container className={classes.footerHeader} justifyContent='center' alignItems='center'>
                    <img src={xavyLogo}  className={`xavy-logo ${classes.footerTopLogo}`} />
                    <Typography className={classes.footerHeaderName} variant='h3'>
                        Xavy Romeo
                    </Typography>
                </Grid>
                <Grid container className={classes.footerMiddle} justifyContent='center' alignItems='flex-start' spacing={4}>
                    
                    <Grid item xs={11} sm={8} md={5}>
                        <Grid container direction='column' spacing={1}>
                            <Typography className={classes.footerMiddleHeaders} variant='subtitle1'>
                                <ContactMailSharpIcon className={classes.iconFooterHeaders}/>
                                Contact Me
                            </Typography>

                            <Grid item>
                                <Grid container direction='row' spacing={1} alignItems='center'>
                                    <Grid item xs={3} sm={2}>
                                            <Typography className={classes.footerMiddleText} variant='body1'>
                                                Email:
                                            </Typography>
                                    </Grid>
                                    <Grid item xs={9} sm={10}>
                                        <Link 
                                            href='mailto:Xavy.Romeo.SSE@gmail.com'
                                            underline='none'
                                        >
                                            <Typography className={classes.footerLinks} variant='body1'>
                                                Xavy.Romeo.SSE@gmail.com
                                            </Typography>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                            
                            <Grid item>
                                <Grid container direction='row' spacing={1} alignItems='center'>
                                    <Grid item xs={3} sm={2}>
                                            <Typography className={classes.footerMiddleText} variant='body1'>
                                                Phone:
                                            </Typography> 
                                    </Grid>
                                    <Grid item xs={9} sm={10}>
                                        <Typography className={classes.footerMiddleText} variant='body1'>
                                            626-779-6690
                                        </Typography>
                                    </Grid>
                                </Grid>  
                            </Grid>
                                
                        </Grid>
                    </Grid>

                    <Grid item xs={11} sm={4} md={2}>
                        <Grid container direction='column' spacing={1}>
                            <Typography className={classes.footerMiddleHeaders} variant='subtitle1'>
                                <ContactMailSharpIcon className={classes.iconFooterHeaders}/>
                                Connect
                            </Typography>

                            <Grid item>
                                <Grid container direction='row' spacing={1} alignItems='center'>
                                    <Grid item xs={3} sm={5}>
                                        <Link 
                                            href='https://www.linkedin.com/in/xavy-romeo-722076215/'
                                            underline='none'
                                            target='_blank'
                                            rel='noopener'
                                            rel='noreferrer'
                                        >
                                            <Box className={classes.connectLogos}>
                                                <img src={LinkedInLogo} height='75%' />
                                            </Box>
                                        </Link>
                                        
                                    </Grid>
                                    <Grid item xs={9} sm={7}>
                                        <Link 
                                            href='https://www.linkedin.com/in/xavy-romeo-722076215/'
                                            underline='none'
                                            target='_blank'
                                            rel='noopener'
                                            rel='noreferrer'
                                        >
                                            <Typography className={classes.footerLinks} variant='body1'>
                                                LinkedIn
                                            </Typography>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item>
                                <Grid container direction='row' spacing={1} alignItems='center'>
                                    <Grid item xs={3} sm={5}>
                                        <Link 
                                            href='https://github.com/Xavy-Romeo'
                                            underline='none'
                                            target='_blank'
                                            rel='noopener'
                                            rel='noreferrer'
                                        >
                                            <Box className={classes.connectLogos}>
                                                <img src={GitHubLogo} height='120%' />
                                            </Box>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={9} sm={7}>
                                        <Link 
                                            href='https://github.com/Xavy-Romeo'
                                            underline='none'
                                            target='_blank'
                                            rel='noopener'
                                            rel='noreferrer'
                                        >
                                            <Typography className={classes.footerMiddleText} variant='body1'>
                                                GitHub
                                            </Typography>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid item  xs={11} sm={12} md={5}>
                        <Grid container justifyContent='center' spacing ={1}>
                            <Typography className={classes.footerMiddleHeaders} variant='subtitle1'>
                                <ExploreSharpIcon className={classes.iconFooterHeaders}/>
                                Based In
                            </Typography>
                            
                            <Grid item xs={12}>
                                    <iframe className={classes.map}
                                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.367984284133!2d-118.50000628445271!3d34.00876413061782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4d74d5ea79b%3A0xcd9a111aced18f4d!2sSanta%20Monica%20Pier!5e0!3m2!1sen!2sus!4v1627851327595!5m2!1sen!2sus' 
                                        allowfullscreen=''
                                        loading='lazy'
                                    />
                            </Grid>

                            <Typography className={classes.footerMiddleText} variant='body1'>
                                Santa Monica, CA, USA
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>
            </Container>

            <Hidden xsDown>
                <Box className={classes.marqueeContainer}>
                    <Typography variant='h5' className={`footer-marquee ${classes.marquee}`} >
                        <SentimentVerySatisfiedSharpIcon className={classes.marqueeIcon} />
                        Thank you for visting my site!!! 
                        <SentimentVerySatisfiedSharpIcon className={classes.marqueeIcon} />
                    </Typography>
                </Box>
            </Hidden>
        </Box>    
    );
};