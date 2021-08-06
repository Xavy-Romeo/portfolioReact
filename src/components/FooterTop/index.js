import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

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
                    <img src={xavyLogo}  className='xavy-logo' height='50px' />
                    <Typography className={classes.footerHeaderName} variant='h5' component='h3' color='primary'>
                        Xavy Romeo
                    </Typography>
                </Grid>
                <Grid container className={classes.footerMiddle} justifyContent='center' alignItems='flex-start' spacing={4}>
                    
                    <Grid item xs={5}>
                        <Grid container direction='column' spacing={1}>
                            <Typography className={classes.footerMiddleHeaders} variant='h5' component='h4'>
                                <ContactMailSharpIcon className={classes.iconFooterHeaders}/>
                                Contact Me
                            </Typography>

                            <Grid item>
                                <Grid container direction='row' spacing={1} alignItems='center'>
                                    <Grid item xs={2}>
                                            <Typography className={classes.footerMiddleText} variant='h6' component='h5'>
                                                Email:
                                            </Typography>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography className={classes.footerMiddleText} variant='h6' component='h5'>
                                            Xavy.Romeo.SSE@gmail.com
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            
                            <Grid item>
                                <Grid container direction='row' spacing={1} alignItems='center'>
                                    <Grid item xs={2}>
                                            <Typography className={classes.footerMiddleText} variant='h6' component='h5'>
                                                Phone:
                                            </Typography> 
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Typography className={classes.footerMiddleText} variant='h6' component='h5'>
                                            626-779-6690
                                        </Typography>
                                    </Grid>
                                </Grid>  
                            </Grid>
                                
                        </Grid>
                    </Grid>

                    <Grid item xs={2}>
                        <Grid container direction='column' spacing={1}>
                            <Typography className={classes.footerMiddleHeaders} variant='h5' component='h4'>
                                <ContactMailSharpIcon className={classes.iconFooterHeaders}/>
                                Connect
                            </Typography>

                            <Grid item>
                                <Grid container direction='row' spacing={1} alignItems='center'>
                                    <Grid item xs={5}>
                                        <Box className={classes.connectLogos}>
                                            <img src={LinkedInLogo} height='75%' />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Typography className={classes.footerMiddleText} variant='h6' component='h5'>
                                            LinkedIn
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item>
                                <Grid container direction='row' spacing={1} alignItems='center'>
                                    <Grid item xs={5}>
                                        <Box className={classes.connectLogos}>
                                            <img src={GitHubLogo} height='120%' />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <Typography className={classes.footerMiddleText} variant='h6' component='h5'>
                                            GitHub
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid item xs={5}>
                        <Grid container justifyContent='center' spacing ={1}>
                            <Typography className={classes.footerMiddleHeaders} variant='h5' component='h4'>
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

                            <Typography className={classes.footerMiddleText} variant='h6' component='h5'>
                                Santa Monica, CA, USA
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>

                <Box className={classes.marqueeContainer}>
                    <Typography variant='h4' className={`footer-marquee ${classes.marquee}`} >
                        <SentimentVerySatisfiedSharpIcon className={classes.marqueeIcon} fontSize='large'/>
                        Thank you for visting my site!!! 
                        <SentimentVerySatisfiedSharpIcon className={classes.marqueeIcon} fontSize='large'/>
                    </Typography>
                </Box>

            </Container>
        </Box>    
    );
};