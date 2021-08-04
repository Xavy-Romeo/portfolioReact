import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function Portfolio({ classes }) {
    return (
        <>
            <Grid container justifyContent='center'>
                <Grid item xs={12}>
                    PORTFOLIO TITLE SECTION
                </Grid>
                
                <Grid item xs={12}>
                    <Grid container justifyContent='center'>
                        <Grid item xs={9}>
                            FEATURED PROJECT HERE!!!!!
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justifyContent='center'>
                                <Grid item xs={5}>
                                    PROJECT 1
                                </Grid>
                                <Grid item xs={5}>
                                    PROJECT 2
                                </Grid>
                                <Grid item xs={5}>
                                    PROJECT 3
                                </Grid>
                                <Grid item xs={5}>
                                    PROJECT 4
                                </Grid>
                                <Grid item xs={5}>
                                    PROJECT 5
                                </Grid>
                                <Grid item xs={5}>
                                    PROJECT 6
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};