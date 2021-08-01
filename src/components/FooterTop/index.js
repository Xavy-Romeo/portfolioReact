import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SvgIcon from '@material-ui/core/SvgIcon';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import BuildIcon from '@material-ui/icons/Build';
import ContactMailSharpIcon from '@material-ui/icons/ContactMailSharp';
import ExploreSharpIcon from '@material-ui/icons/ExploreSharp';

import MuiLogo from '../../assets/muiLogo.png';
import xavyLogo from '../../assets/xavyLogo.png';
import GitHubLogo from '../../assets/GitHub.png';
import GmailLogo from '../../assets/Gmail.png';
import LinkedInLogo from '../../assets/LinkedIn.svg';

export default function FooterTop({ classes }) {
    return (
                
        <Box className={classes.footerTop}>
            
            <Grid container className={classes.footerHeader} justifyContent='center' alignItems='center'>
                <img src={xavyLogo}  className='xavy-logo' height='50px' />
                <Typography className={classes.footerHeaderName} variant='h5' component='h3' color='primary'>
                    Xavy Romeo
                </Typography>
            </Grid>
       
            <Grid container className={classes.footerMiddle} justifyContent='center' alignItems='flex-start' spacing={4}>
                
                <Grid item xs={3}>
                    {/* <Paper> */}
                    <Grid container direction='column'>
                        <Typography className={classes.footerMiddleHeaders} variant='h5' component='h4'>
                            <ContactMailSharpIcon />
                            Contact Links
                        </Typography>

                        <Grid item className={classes.contactLinks}>
                            <Grid container direction='row' spacing={1}>
                                <Grid item xs={3}>
                                    <img src={GmailLogo} height='30px' />
                                </Grid>
                                <Grid item xs={9}>
                                    <Typography className={classes.footerMiddleText} variant='h6' component='h5'>
                                        Gmail:
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        
                        <Grid item className={classes.contactLinks}>
                            <Grid container direction='row' spacing={1}>
                                <Grid item xs={3}>
                                    <SvgIcon>
                                        <svg width="30px" height="30px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z" fill="#069"/><path d="M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z" fill="#fff"/></g></svg>
                                    </SvgIcon>
                                </Grid>
                                <Grid item xs={9}>
                                    <Typography className={classes.footerMiddleText} variant='h6' component='h5'>
                                        LinkedIn:
                                    </Typography>
                                </Grid>
                            </Grid>  
                        </Grid>

                        <Grid item className={classes.contactLinks}>
                            <Grid container direction='row' spacing={1}>
                                <Grid item xs={3}>
                                    <img src={GitHubLogo} height='50px' />
                                </Grid>
                                <Grid item xs={9}>
                                    <Typography className={classes.footerMiddleText} variant='h6' component='h5'>
                                        GitHub:
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                            
                    </Grid>
                    {/* </Paper> */}
                </Grid>

                <Grid item xs={5}>
                    {/* <Paper> */}
                    <Grid container>
                        <Typography className={classes.footerMiddleHeaders} variant='h5' component='h4'>
                            <ExploreSharpIcon />
                            Map
                        </Typography>
                    </Grid>
                    {/* </Paper> */}
                </Grid>

                <Grid item xs={3}>
                    {/* <Paper> */}
                    <Grid container direction='column'>
                        <Typography className={classes.footerMiddleHeaders} variant='h5' component='h4'>
                            <BuildIcon />
                            Built With
                        </Typography>
                        <Grid item className={classes.contactLinks}>
                            <SvgIcon style={{ fontSize: '50px'}} className='react-logo'> 
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3"><g fill="#61DAFB"><path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/><circle cx="420.9" cy="296.5" r="45.7"/><path d="M520.5 78.1z"/></g></svg>
                            </SvgIcon>
                            <Typography className={classes.footerMiddleText} variant='h6' component='h5'>
                                React.js
                            </Typography>
                        </Grid>
                        <Grid item className={classes.contactLinks}>
                            <img src={MuiLogo} className='mui-logo' height='40px' />
                            <Typography className={classes.footerMiddleText} variant='h6' component='h5'>
                                Material UI
                            </Typography>
                        </Grid>

                    </Grid>
                    {/* </Paper> */}
                </Grid>

            </Grid>

        </Box>
       
    );
};