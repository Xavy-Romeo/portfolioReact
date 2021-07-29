// import { createTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

// defining attributes
const primaryColor = '#06aed5';
const secondaryColor = 'rgb(195, 2, 2)';

// export const theme = createTheme({
//     palette: {
//       primary: {
//         main: '#06aed5'
//       },
//       secondary: {
//           main: 'rgb(195, 2, 2)'
//       }
//     }
// });

export const useStyles = makeStyles({
    appBar: {
        position: '-webkit-sticky', /* to support Safari */
        position: 'sticky',
        background: 'linear-gradient(349deg, rgba(2,0,36,1) 0%, rgba(114,18,20,1) 16%, rgba(121,9,9,1) 47%, rgba(10,163,194,1) 100%)',
        height: 80,
    },

    noDecoration: {
        '&:hover': {
            textDecoration: 'none'
        }
    },

    myName: {
        color: secondaryColor,
        fontSize: 50,
        fontFamily: 'Kaushan Script, sans-sefif',
        fontWeight: 'bold',
        textShadow: '3px 3px black',
        '&:hover': {
            color: 'black',
            textShadow: '3px 3px rgb(195, 2, 2)',
            transition: '1s'
        }
    },

    navSections: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    navLI: {
        position: 'relative',
        display: 'block'
    },

    listSpan: {
        color: primaryColor,
        fontSize: 24,
        textShadow: '1px 1px black',
        display: 'block' 
    }



});
