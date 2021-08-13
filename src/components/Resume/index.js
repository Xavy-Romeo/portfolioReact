import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import ResumePdf from '../../assets/resume.pdf';
import ResumeImg from '../../assets/resume.png'

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
                <Grid item xs={12}>
                    <img src={ResumeImg} className={classes.resumeImg} />
                </Grid>
                <Link 
                    download='Xavy Romeo - Resume'
                    href={ResumePdf}
                >
                    <Button className={classes.resumeButton} variant='contained'>
                        <Typography variant='subtitle2'>
                            Download Resume
                        </Typography>
                    </Button>
                </Link>  
            </Grid>
        </>
    );
};