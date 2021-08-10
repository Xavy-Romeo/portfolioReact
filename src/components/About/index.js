import React, {useState} from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

import SentimentVerySatisfiedSharpIcon from '@material-ui/icons/SentimentVerySatisfiedSharp';

import avatarPic from '../../assets/avatar.png';
import plane from '../../assets/plane.jpg';
import soccer from '../../assets/soccer.jpg';
import weights from '../../assets/weights.jpg'

export default function About({ classes }) {
    const [profileHover, setProfileHover] = useState(false);

    return (
        <>
            <Grid container className={classes.sectionTitleContainer} justifyContent='center'>
                <Typography className={classes.sectionTitleShadow} variant='h6' component='h1'>
                    ABOUT
                </Typography>
                <Typography className={classes.sectionTitle} variant='h4'>
                    About Xavy
                </Typography>
            </Grid>

            <Grid container  className={classes.aboutSection}>
                <Grid item xs={12} xl={3}>
                    <img 
                        src={avatarPic} 
                        className={classes.profilePic} 
                        id='profile-img' 
                        alt="Xavy's avatar" 
                        onMouseEnter={() => setProfileHover(true)}
                        onMouseLeave={() => setProfileHover(false)}
                    />
                    {profileHover
                        ? (
                            <Typography className={classes.profilePicHello} variant='h3'>
                                Hello!!!
                                <SentimentVerySatisfiedSharpIcon fontSize='large' />
                            </Typography>
                        )
                        : null
                    } 
                </Grid>

                <Grid item xs={12} xl={9}>
                    <Typography className={classes.sectionText} variant='h5' component='p' paragraph>
                        Hi, my name is 
                        <span className={classes.sectionTextSpan}>
                            Xavy Romeo
                        </span>
                        . I am a 
                        <span className={classes.sectionTextSpan}>
                            Full Stack Software Engineer
                        </span>
                        . While I specialize in MERN stack (MongoDB, Express, React, Node), I am easily adaptable and capable
                        of using any stack. I'm the guy who makes things work, plain and simple. It is always satisfying to see what 
                        I create once the project is complete.
                    </Typography>
                    <Typography className={classes.sectionText} variant='h5' component='p' paragraph>
                        I live in the beautiful beach city of Santa Monica, California. Other hobbies of mine include traveling the world, 
                        working out and playing soccer.
                    </Typography>

                    <Hidden smDown>
                        <Grid container justifyContent='center' spacing={2}>
                            <Grid item xs={3}>
                                <img src={plane} className={classes.aboutImage} alt='airplane image' />
                            </Grid>
                            <Grid item xs={3}>
                                <img src={weights} className={classes.aboutImage} alt='weights image' />
                            </Grid>
                            <Grid item xs={3}>
                                <img src={soccer} className={classes.aboutImage} alt='soccer ball image on beach sand' />
                            </Grid>
                        </Grid>
                    </Hidden>
                
                </Grid>
            </Grid>
        </>
    );
};