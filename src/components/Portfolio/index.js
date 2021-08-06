import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

import HowRU from '../../assets/howru-img.jpg';
import HowRULogo from '../../assets/howru-logo.png';
import GitHub from '../../assets/github-logo.png';
import RunBuddy from '../../assets/run-buddy.jpg';
import ManageIt from '../../assets/manage-it.png';
import Cinfo from '../../assets/cinfo.png';
import DeepThoughts from '../../assets/deep-thoughts.png';
import WeatherDashboard from '../../assets/weather-dashboard.png';
import FoodFestival from '../../assets/chips.jpg';

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

            <Grid container className={classes.componentMainContainer} justifyContent='center'>
                
                <Grid item className={classes.projectFeatured} xs={8}>
                    <img src={HowRU} className={classes.featuredImage}/>
                    <img src={HowRULogo} className={classes.featuredLogo} />
                    <Grid container className={classes.featuredLinksDiv} alignItems='flex-start'>
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
                            <img src={RunBuddy} className={classes.featuredImage}/>

                            <Grid container className={classes.linksDiv} alignItems='flex-start'>
                                <Grid container alignItems='center'>
                                    <Link href='https://xavy-romeo.github.io/run-buddy/' className={classes.noDecoration} target='_blank' rel='noopener'>
                                        <Typography className={classes.projectSite} variant='h6' component='h5'>
                                            Run Buddy
                                        </Typography>
                                    </Link>
                                    <Link href='https://github.com/Xavy-Romeo/run-buddy' target='_blank' rel='noopener'>
                                        <img src={GitHub} className={classes.projectGithub} />
                                    </Link>
                                </Grid>
                            </Grid>

                            <Grid container className={classes.projectDescription} justifyContent='center'>
                                <Typography variant='h5'> 
                                    HTML CSS
                                </Typography>
                            </Grid>

                        </Grid>
                       
                        <Grid item className={classes.project} xs={5}>
                            <img src={DeepThoughts} className={classes.featuredImage} />
                           
                           <Grid container className={classes.linksDiv} alignItems='flex-start'>
                               <Grid container alignItems='center'>
                                   <Link href='https://deep-thoughts-random34234325.herokuapp.com/' className={classes.noDecoration} target='_blank' rel='noopener'>
                                       <Typography className={classes.projectSite} variant='h6' component='h5'>
                                           Deep Thoughts
                                       </Typography>
                                   </Link>
                                   <Link href='https://github.com/Xavy-Romeo/deep-thoughts' target='_blank' rel='noopener'>
                                       <img src={GitHub} className={classes.projectGithub} />
                                   </Link>
                               </Grid>
                           </Grid>

                           <Grid container className={classes.projectDescription} justifyContent='center'>
                               <Typography variant='h5'> 
                                   MERN STACK
                               </Typography>
                           </Grid>

                        </Grid>
                        
                        <Grid item className={classes.project} xs={5}>
                            <img src={ManageIt} className={classes.featuredImage} />
                           
                            <Grid container className={classes.linksDiv} alignItems='flex-start'>
                                <Grid container alignItems='center'>
                                    <Link href='https://cryptic-bastion-04157.herokuapp.com/' className={classes.noDecoration} target='_blank' rel='noopener'>
                                        <Typography className={classes.projectSite} variant='h6' component='h5'>
                                            Manage It
                                        </Typography>
                                    </Link>
                                    <Link href='https://github.com/Xavy-Romeo/manage-it' target='_blank' rel='noopener'>
                                        <img src={GitHub} className={classes.projectGithub} />
                                    </Link>
                                </Grid>
                            </Grid>

                            <Grid container className={classes.projectDescription} justifyContent='center'>
                                <Typography variant='h5'> 
                                    FULL STACK
                                </Typography>
                            </Grid>
                        </Grid>
                        
                        <Grid item className={classes.project} xs={5}>
                            <img src={WeatherDashboard} className={classes.featuredImage} />
                           
                           <Grid container className={classes.linksDiv} alignItems='flex-start'>
                               <Grid container alignItems='center'>
                                   <Link href='https://xavy-romeo.github.io/weather-dashboard/' className={classes.noDecoration} target='_blank' rel='noopener'>
                                       <Typography className={classes.projectSite} variant='h6' component='h5'>
                                           Weather Dash
                                       </Typography>
                                   </Link>
                                   <Link href='https://github.com/Xavy-Romeo/weather-dashboard' target='_blank' rel='noopener'>
                                       <img src={GitHub} className={classes.projectGithub} />
                                   </Link>
                               </Grid>
                           </Grid>

                           <Grid container className={classes.projectDescription} justifyContent='center'>
                               <Typography variant='h5'> 
                                   JAVASCRIPT HTML CSS
                               </Typography>
                           </Grid>
                        </Grid>
                        
                        <Grid item className={classes.project} xs={5}>
                            <img src={Cinfo} className={classes.featuredImage} />
                           
                           <Grid container className={classes.linksDiv} alignItems='flex-start'>
                               <Grid container alignItems='center'>
                                   <Link href='https://xavy-romeo.github.io/project-1-ucla/' className={classes.noDecoration} target='_blank' rel='noopener'>
                                       <Typography className={classes.projectSite} variant='h6' component='h5'>
                                           Cinfo
                                       </Typography>
                                   </Link>
                                   <Link href='https://github.com/Xavy-Romeo/project-1-ucla' target='_blank' rel='noopener'>
                                       <img src={GitHub} className={classes.projectGithub} />
                                   </Link>
                               </Grid>
                           </Grid>

                           <Grid container className={classes.projectDescription} justifyContent='center'>
                               <Typography variant='h5'> 
                                   JAVASCRIPT HTML CSS
                               </Typography>
                           </Grid>
                        </Grid>
                        
                        <Grid item className={classes.project} xs={5}>
                            <img src={FoodFestival} className={classes.featuredImage} />
                           
                           <Grid container className={classes.linksDiv} alignItems='flex-start'>
                               <Grid container alignItems='center'>
                                   <Link href='https://xavy-romeo.github.io/food-festival/' className={classes.noDecoration} target='_blank' rel='noopener'>
                                       <Typography className={classes.projectSite} variant='h6' component='h5'>
                                           Food Festival
                                       </Typography>
                                   </Link>
                                   <Link href='https://github.com/Xavy-Romeo/food-festival' target='_blank' rel='noopener'>
                                       <img src={GitHub} className={classes.projectGithub} />
                                   </Link>
                               </Grid>
                           </Grid>

                           <Grid container className={classes.projectDescription} justifyContent='center'>
                               <Typography variant='h5'> 
                                   PWA
                               </Typography>
                           </Grid>
                        </Grid>

                    </Grid>
                </Grid>

            </Grid>
        </>
    );
};