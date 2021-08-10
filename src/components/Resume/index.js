import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

export default function Resume({ classes }) {
    window.scrollTo(0,0);
    
    return (
        <>
            <Grid container className={classes.sectionTitleContainer} justifyContent='center'>
                <Typography className={classes.sectionTitleShadow} variant='h6' component='h1'>
                    RESUME
                </Typography>
                <Typography className={classes.sectionTitle} variant='h4'>
                    My Resume
                </Typography>
            </Grid>

            <Grid container className={classes.componentMainContainer} justifyContent='center'>
                <Paper>
                    MY RESUME POSTED HERE
                    PENDING PENDING PENDING
                </Paper>
                
            </Grid>
        </>
    );
};