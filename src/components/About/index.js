import React from 'react';

import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

export default function About({ classes }) {
    return (
        <>
            <Grid container>
                ABOUT ME TITLE SECTION
            </Grid>
            <Grid container>
                <Grid item>
                    PORTFOLIO PIC HERE
                </Grid>
                <Grid item>
                    ABOUT ME CONTENT HERE!!!
                    <Typography variant='h5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa recusandae non libero repellendus quo doloribus labore hic adipisci, dolorem a placeat temporibus ipsam est aliquid vel mollitia eius illo dicta nobis harum ipsum pariatur error laboriosam! Ex quaerat cupiditate tempora officia, laboriosam voluptate quae earum. Repudiandae facere rem culpa consequuntur?
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};