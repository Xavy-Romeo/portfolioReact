// import { createTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

// defining attributes
const primaryColor = 'rgb(10, 163, 194);';
const secondaryColor = 'rgb(195, 2, 2)';

// export const theme = createTheme({
//     palette: {
//       primary: {
//         main: 'rgb(10, 163, 194)'
//       },
//       secondary: {
//           main: 'rgb(195, 2, 2)'
//       }
//     }
// });

export const useStyles = makeStyles({
    headerActive: {
        transform: 'scaleY(.7) translate(0%, -30%)'
    },

    appBar: {
        position: '-webkit-sticky', /* to support Safari */
        position: 'sticky',
        background: 'linear-gradient(349deg, rgba(2,0,36,1) 0%, rgba(114,18,20,1) 16%, rgba(121,9,9,1) 47%, rgba(10,163,194,1) 100%)',
        height: '75px'
    },

    toolBar: {
        justifyContent: 'space-between'
    },

    noDecoration: {
        '&:hover': {
            textDecoration: 'none'
        }
    },

    nameContainer: {
        // marginBottom: '10px'
    },

    myName: {
        margin: '20px',
        color: secondaryColor,
        fontSize: '50px',
        fontFamily: 'Kaushan Script, sans-sefif',
        fontWeight: 'bold',
        textShadow: '4px 3px black',
        '&:hover': {
            color: 'black',
            textShadow: '3px 3px rgb(195, 2, 2)',
            transition: '1s'
        }
    },

    navSections: {
        display: 'flex',
        justifyContent: 'space-evenly',
    },

    navLI: {
        marginTop: '20px',
    },

    listSpan: {
        fontFamily: 'Kaushan Script, sans-sefif',
        color: primaryColor,
        fontSize: '24px',
        textShadow: '1px 1px black',
        display: 'block',
        whiteSpace: 'nowrap',
        margin: '0 30px',
        width: '100%',
        '&:before': {
            position: 'absolute',
            content: 'attr(id)',
            top: -60,
            opacity: 0,
            transition: '.2s',
        },
        '&:hover': {
            color: 'black',
            fontSize: '40px',
            textShadow: `1px 1px ${primaryColor}`,
            transform: 'translateY(10%)',
            transition: '.2s ease'
        },
        '&:hover:before': {
            top: 0,
            opacity: 1,
            transition: '.3s ease',
            textDecoration: 'underline'
        }
    },

    landing: {
        backgroundColor: 'rgb(22, 22, 22)',
        height: '2000px'
    }


});