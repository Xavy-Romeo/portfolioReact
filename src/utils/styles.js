import { makeStyles } from '@material-ui/core/styles';

// defining attributes
const primaryColor = 'rgb(10, 163, 194);';
const secondaryColor = 'rgb(195, 2, 2)';

const useStyles = makeStyles({
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
        marginBottom: '10px'
    },

    myName: {
        marginTop: '0px',
        color: secondaryColor,
        fontFamily: 'Kaushan Script, sans-sefif',
        fontWeight: 'bold',
        textShadow: '4px 3px black',
        '&:hover': {
            color: 'black',
            textShadow: '3px 3px rgb(195, 2, 2)',
            transition: '1s'
        }
    },

    menuIcon: {
        fontSize: '60px',
        backgroundColor: 'rgba(0,0,0,.3)',
        border: '1px solid black',
        color: primaryColor,
        '&:hover': {
            border: '1px solid white',
            backgroundColor: 'rgb(0,0,0, .5)'
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

    menuPaperProps: {
        fontFamily: 'Kaushan Script, sans-sefif',
        color: primaryColor,
        fontSize: '24px',
        textShadow: '1px 1px black',
    },

    landingPageContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(55,188,241,1)',
        display: 'flex',
        justifyContent: 'center',
        minHeight: '110vh',
        overflow: 'hidden'
    },

    contentPageContainer: {
        minHeight: '65vh'
    },

    landingSea: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '40vh',
        zIndex:'8'
    },

    landingSun: {
        position: 'absolute',
        height: '20vh',
        right: '15%',
        top: '5%',
        zIndex: '5',
    },

    landingCloud: {
        position: 'absolute',
        height: '30vh',
        left: '10%',
        top: '2%',
        zIndex: '7',
        opacity: '0',
        '@media (min-width:1920px)': {
            opacity: '1'
        } 
    },

    landingCloud2: {
        position: 'absolute',
        height: '26vh',
        right: '20%',
        top: '15%',
        zIndex: '6'
    },

    landingYatch: {
        position: 'absolute',
        height: '15vh',
        top: '55%',
        right: '15%',
        zIndex: '10'
    },

    landingShip: {
        position: 'absolute',
        height: '5vh',
        bottom: '36%',
        left: '30%',
        zIndex: '9'
    },

    landingPalm: {
        position: 'absolute',
        height: '80vh',
        bottom: '2%',
        left: '-15%',
        zIndex: '11'
    },

    landingTitle: {
        position: 'absolute',
        color: 'black',
        fontFamily: 'Kaushan Script, sans-sefif',
        fontWeight: 'bold',
        fontSize: '3.2rem',
        textShadow: `4px 3px ${secondaryColor}`,
        zIndex: '1',
        '@media (min-width:960px)': {
            fontSize: '5rem'
        },
        '@media (min-width:1280px)': {
            fontSize: '6rem'
        },
        '@media (min-width:1920px)': {
            fontSize: '8rem'
        }
    },

   componentMainContainer: {
        marginBottom: '100px'
   },

    sectionTitleContainer: {
        position: 'relative'
    },

    sectionTitleShadow: {
        textAlign: 'center',
        width: '100%',
        color: 'white',
        textShadow: '10px 10px 5px rgb(220,220,220)',
        opacity: '5%',
        fontWeight: 'bold',
        fontFamily: 'Londrina Outline, sans-sefif'
    },

    sectionTitle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -20%)',
        color: primaryColor,
        textDecoration: 'underline'
    },

    aboutSection: {
        marginBottom: '50px'
    },

    profilePic: {
        display: 'flex',
        textAlign: 'center',
        border: `5px solid ${secondaryColor}`,
        borderRadius: '30%',
        padding: '10px',
        maxWidth: '400px',
        '@media (max-width:1919px)': {
            width: '80%',
            margin: '0 auto 20px auto'
        }
    },

    profilePicHello: {
        color: primaryColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px'
    },

    sectionText: {
        color: primaryColor,
        textAlign: 'justify',
        lineHeight: '1.6',
        marginBottom: '30px'
    },

    sectionTextSpan: {
        color: secondaryColor,
        fontSize: '30px',
        fontWeight: 'bold',
        marginLeft: '10px',
        textShadow: '2px 2px 3px black'
    },

    aboutImage: {
        marginTop: '10px',
        border: '3px solid black',
        borderRadius: '5px',
        height: '80%',
        width: '80%',
        '&:hover': {
            transform: 'scale(1.2)'
        }
    },

    contactForm: {
        border: `4px solid ${primaryColor}`,
        borderRadius: '10px',
        padding: '10px 20px 20px 20px',
        backgroundColor: 'rgba(10, 163, 194, 0.4)',
    },

    contactFormLabel: {
        marginBottom: '5px',
        color: primaryColor,
        textShadow: '2px 2px 5px black'
    },

    contactFromInputs: {
        backgroundColor: 'rgb(230,230,230)',
        minHeight: '20px',
        borderRadius: '10px',
        border: `3px solid ${primaryColor}`,
        fontFamily: 'Cardo, serif',
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '20px',
        padding: '5px 15px',
        '&:hover': {
            border: `3px solid black`,
        },
        '&:focus': {
            border: '3px solid white',
            backgroundColor: 'rgb(160,160,160)',
            outline: 'none'
        },
        '@media (max-width:599px)': {
            maxWidth: '85%',
        }
    },

    formButton: {
        border: `3px solid black`,
        borderRadius: '10px',
        justifyContent: 'center',
        width: '80%',
        margin: '0 10%',
        padding: '5px',
        backgroundColor: primaryColor,
        '&:hover': {
            border: `3px solid ${primaryColor}`,
            color: primaryColor,
            backgroundColor: 'black',
        }
    },

    projectFeatured: {
        height: '300px',
        width: '100%',
        border: `3px solid ${primaryColor}`,
        borderRadius: '10px',
        marginBottom: '115px',
        padding: '10px',
        position: 'relative',
        '&:hover': {
            transform: 'scale(1.2)'
        }
    },

    featuredImage: {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        '&:hover': {
            opacity: '50%'
        }
    },

    featuredLogo: {
        position: 'absolute',
        right: '5%',
        top: '10%',
        height: '40%'
    },

    project: {
        position: 'relative',
        height: '200px',
        width: '100%',
        border: `2px solid ${primaryColor}`,
        borderRadius: '10px',
        marginBottom: '65px',
        padding: '10px',
        '&:hover': {
            transform: 'scale(1.1)',
        }
    },

    featuredLinksDiv: {
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0,
        width: '100%',
        height: '100%',
        padding: '35px 0 0 40px',
        '&:hover': {
            opacity: 1
        },
    },

    linksDiv: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        opacity: 0,
        padding: '20px 0 0 20px',
        '&:hover': {
            opacity: 1
        }
    },

    projectSite: {
        fontFamily: 'Kaushan Script, sans-sefif',
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: primaryColor,
        border: '3px solid black',
        borderRadius: '10px',
        padding: '5px 10px',
        marginRight: '10px',
        width: '140px',
        display: 'flex',
        justifyContent: 'center',
        '&:hover': {
            transform: 'scale(1.1)',
            backgroundColor: 'rgb(200,200,200)',
            border: `3px solid ${primaryColor}`
        }
    },

    projectGithub: {
        backgroundColor: primaryColor,
        border: '3px solid black',
        borderRadius: '50%',
        width: '70px',
        '&:hover': {
            transform: 'scale(1.1)',
            backgroundColor: 'rgb(200,200,200)',
            border: `3px solid ${primaryColor}`
        },
        '@media (max-width:1279px)': {
            width: '50px',
        }
    },

    projectDescription: {
        border: `2px solid black`,
        borderRadius: '10px',
        backgroundColor: primaryColor,
        margin: '15px 12.5% 0 12.5%',
        width: '75%',
        '@media (max-width:450px)': {
            width: '100%',
            margin: '15px 0 0 0'
        }

    },

    resumeImg: {
        height: '75vh',
        width: 'calc(75vh*0.773)',
        maxWidth: '90vw',
        display: 'flex',
        margin: '0 auto',
        '@media (max-width:750px)': {
            height:'calc(90vw*1.294)'
        }
    },

    resumeButton: {
        marginTop: '15px',
        backgroundColor: primaryColor,
    },

    footerTop: {
        backgroundColor: 'rgba(10, 10, 10)',
    }, 

    footerHeader: {
        borderBottom: `2px solid ${primaryColor}`,
        width: '70%',
        margin: '0 auto 20px auto',
    },

    footerHeaderName: {
        margin: '10px',
        color: secondaryColor,
        fontFamily: 'Kaushan Script, sans-sefif',
        fontWeight: 'bold',
    },

    footerTopLogo: {
        height: '2.5rem',
        '@media (min-width:960px)': {
            height: '3.125rem'
        }
    },

    footerMiddle: {
        paddingBottom: '20px'
    },
    
    footerMiddleHeaders: {
        color: secondaryColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: `1px solid ${primaryColor}`, 
        width: '100%',
        marginBottom: '10px',
        paddingBottom: '5px',
    },

    iconFooterHeaders: {
        marginRight: '10px'
    },

    footerMiddleText: {
        color: primaryColor,
        display: 'flex',
        alignItems: 'center'
    },

    footerLinks: {
        color: primaryColor,
        '&:hover': {
            color: secondaryColor
        }
    },

    connectLogos: {
        backgroundColor: primaryColor,
        height: '50px',
        width: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '7px',
        border: `3px solid ${secondaryColor}`,
        marginRight: '20px',
        '&:hover': {
            backgroundColor: 'white'
        }
    },

    map: {
        width: '100%',
        height: '100%',
        borderRadius: '7px',
        border: `3px solid ${secondaryColor}`
    },

    builtWithItems: {
        display: 'flex',
        margin: '0 5px 10px 10px',
        padding: '5px',
    },

    footerBottom: {
        height: '100%',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 25px',
        marginBottom: 0
    },

    footerLogo: {
        height: '3.75rem',
        '@media (min-width:960px)': {
            height: '4.375rem'
        }
    },

    footerCopy: {
        color: secondaryColor,
        fontWeight: 'bold',
    },

    marqueeContainer: {
        overflow: 'hidden',
        position: 'relative',
    },
    
    marquee: {
        margin: '0 10px',
        fontWeight: 'bold',
        color: secondaryColor,
        alignItems: 'center',
        '&:hover': {
            color: primaryColor
        }
    },

    marqueeIcon: {
        margin: '-6px 10px',
        fontSize: '1.875rem',
    },

});


export default useStyles;