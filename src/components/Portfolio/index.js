import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

import HowRU from '../../assets/howru-img.jpg';
import HowRULogo from '../../assets/howru-logo.png';
import GitHub from '../../assets/github-logo.png';

export default function Portfolio({ classes }) {
    return (
        <>
            
            <Grid container className={classes.sectionTitleContainer} justifyContent='center'>
                <Typography className={classes.sectionTitleShadow} variant='h1'>
                    PROJECTS
                </Typography>
                <Typography className={classes.sectionTitle} variant='h4' component='h3'>
                    Portfolio
                </Typography>
            </Grid>

            <Grid container justifyContent='center'>
                <Grid item className={classes.projectFeatured} xs={8}>
                    <img src={HowRU} className={classes.featuredImage}/>
                    <img src={HowRULogo} className={classes.featuredLogo} />
                    <Grid container className={classes.linksDiv} alignItems='flex-start'>
                        <Grid container alignItems='center'>
                            <Link href='https://howru-meditation.herokuapp.com/' className={classes.noDecoration} target='_blank' rel='noopener'>
                                <Typography className={classes.projectSite} variant='h5' component='h4'>
                                    HowRU
                                </Typography>
                            </Link>
                            <Link href='https://github.com/Xavy-Romeo/how-r-u' target='_blank' rel='noopener'>
                                <img src={GitHub} className={classes.projectGithub} />
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.projectDescription} justifyContent='center'>
                        <Typography variant='h3'> 
                            MERN STACK
                        </Typography>
                    </Grid>
                </Grid>
                

                <Grid item xs={10}>
                    <Grid container justifyContent='space-evenly'>
                        <Grid item className={classes.project} xs={5}>

                        </Grid>
                        <Grid item className={classes.project} xs={5}>

                        </Grid>
                        <Grid item className={classes.project} xs={5}>

                        </Grid>
                        <Grid item className={classes.project} xs={5}>

                        </Grid>
                        <Grid item className={classes.project} xs={5}>

                        </Grid>
                        <Grid item className={classes.project} xs={5}>

                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </>
    );
};