import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function Landing({ classes }) {
    return (
        <Box className={classes.landing}>
            <Grid container justifyContent='center'>
                <Grid item className={classes.landingImage} xs={11}>
                    <Typography variant='h1'>
                        Parallax Image
                    </Typography>
                    <Typography variant='h1'>
                        Place holder image remove class on change
                    </Typography>
                    <Typography variant='h1'>
                        Some animation in background
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};