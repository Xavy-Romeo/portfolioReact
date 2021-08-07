import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Cardo, Serif',
        h1:{
            fontSize:'2.5rem',
            '@media (min-width:960px)': {
                fontSize: '3.125rem'
            }
        },
        h2:{
            fontSize:'2.25rem',
            '@media (min-width:960px)': {
                fontSize: '2.875rem'
            }
        },
        h3:{
            fontSize:'2rem',
            '@media (min-width:960px)': {
                fontSize: '2.5rem'
            }
        },
        h4:{
            fontSize:'1.75rem',
            '@media (min-width:960px)': {
                fontSize: '2.25rem'
            }
        },
        h5:{
            fontSize:'1.5rem',
            '@media (min-width:960px)': {
                fontSize: '1.875rem'
            }
        },
        subtitle1:{
            fontSize:'1.25rem',
            '@media (min-width:960px)': {
                fontSize: '1.5rem'
            }
        },
        subtitle2:{
            fontSize:'1.125rem',
            '@media (min-width:960px)': {
                fontSize: '1.375rem'
            }
        },
        body1:{
            fontSize:'1rem',
            '@media (min-width:960px)': {
                fontSize: '1.25rem'
            }
        },
        body2:{
            fontSize:'0.875rem',
            '@media (min-width:960px)': {
                fontSize: '1.125rem'
            }
        },
        caption:{
            fontSize:'0.625rem',
            '@media (min-width:960px)': {
                fontSize: '0.875rem'
            }
        },
    }
});

export default theme;