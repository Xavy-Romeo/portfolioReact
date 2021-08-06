import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function Contact({ classes }) {
    return (
        <>
            <Grid container className={classes.sectionTitleContainer} justifyContent='center'>
                <Typography className={classes.sectionTitleShadow} variant='h1'>
                    CONTACT
                </Typography>
                <Typography className={classes.sectionTitle} variant='h4' component='h3'>
                    Contact Me
                </Typography>
            </Grid>

            <Grid container className={classes.componentMainContainer} justifyContent='center'>
                <Grid item xs={9}>
                    <form className={classes.contactForm}>
                        <Grid container direction='column'>
                            <Typography className={classes.contactFormLabel} variant='h5'>
                                Name:
                            </Typography>
                            <input className={classes.contactFromInputs} type='text' placeholder='Your Name' />
                        </Grid>

                        <Grid container direction='column'>
                            <Typography className={classes.contactFormLabel} variant='h5'>
                                Email:
                            </Typography>
                            <input className={classes.contactFromInputs} type='email' placeholder='Your Email' />
                        </Grid>

                        <Grid container direction='column'>
                            <Typography className={classes.contactFormLabel} variant='h5'>
                                Message:
                            </Typography>
                            <textarea className={classes.contactFromInputs} placeholder='Your Message Here' rows='7' />
                        </Grid>

                        <button className={classes.formButton} type='submit'>
                            <Typography variant='h5'>
                                Send Message
                            </Typography>
                        </button>
                        
                    </form>
                </Grid>
            </Grid>
        </>
    );
};