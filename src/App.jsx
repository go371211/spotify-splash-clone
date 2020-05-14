import React from 'react';
import { useMediaQuery, CssBaseline, Box, Container, Grid, Paper, Link, Typography, Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import heroburst from '../public/icons/hero-burst.svg';
import heroburstMobile from '../public/icons/hero-burst-mobile.svg';

export const primary = 'black';
export const accent = 'white';

const useStyles = makeStyles(theme => ({
    px2: {
        paddingLeft: '1rem',
        paddingRight: '1rem',
    },
    py2: {
        paddingTop: '1rem',
        paddingBottom: '1rem',
    },
    px20vw: {
        paddingLeft: '10vw',
        paddingRight: '10vw',
    },
    main: {
        paddingTop: '40vh',
        paddingBottom: '40vh',
        paddingLeft: '25vw',
        paddingRight: '25vw',
        position: 'relative',
    },
    mainGradiant: {
        background: 'linear-gradient(#F037A5 -60%, #FAE62D 140%)',
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
    },
    mainImage: {
        backgroundImage: `url(${heroburstMobile})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'absolute',
        width: 'auto',
        height: '100%',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
    },
    mainImageDesktop: {
        backgroundImage: `url(${heroburst})`,
    },
}));


const App = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchSM = useMediaQuery(theme.breakpoints.up('sm'));
    const matchMD = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <>
        <CssBaseline />
        <div style={{ color: primary }}>
            <Navbar></Navbar>
            <Grid container>
                <Grid item xs="12">
                    <Paper elevation="0" className={[classes.px2, classes.py2, (matchSM ? classes.px20vw : '')]} style={{ paddingTop: '2rem'}}>
                        <Typography variant="h5" style={{ color: '#2d46b9', fontWeight: 'bold' }}>新冠肺炎音樂援助計畫</Typography>
                        <Grid container justify="flex-start" style={{ fontWeight: '500' }}>
                            <Grid item>
                                <Typography variant="body1" component="span" style={{ fontWeight: 'inherit' }}>協助我們一起支援全球音樂社群度過這個空前危機。</Typography>
                            </Grid>
                            <Grid item>
                                <Link href="#!" color="inherit"><Typography variant="body1"  component="span" style={{ textDecoration: 'underline', fontWeight: 'inherit' }}>更多資訊</Typography></Link>
                            </Grid>
                        </Grid>
                    </Paper>                 
                </Grid>
                <Grid item xs="12">
                        <Paper elevation="0" className={classes.main}>
                            <div className={classes.mainGradiant}>
                                <Grid container direction="column" justify="center" alignItems="center" className={[classes.mainImage, matchMD && classes.mainImageDesktop]}>
                                    <Grid item container direction="column" justif="start" alignItems="center">
                                        <Grid item>
                                            <Typography variant="h3" style={{ color: 'white', fontWeight: 'bold' }}>音樂人人愛</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body1" style={{ color: 'white', fontWeight: '600', marginTop: '0.5rem' }}>數百萬首歌曲。無需信用卡。</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color="primary" style={{ backgroundColor: '#1db954', lineHeight: '1',  letterSpacing: '2px', fontWeight: '700', fontSize: '14px', padding: '16px 48px', borderRadius: '500px', marginTop: '2rem', textAlign: 'center', verticalAlign: 'middle', display: 'inline-block', borderWidth: '0', minWidth: '160px' }}>立即使用 SPOTIFY FREE</Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Paper>
                </Grid>
                <Grid item xs="12">
                    <Footer />
                </Grid>
            </Grid>
        </div>
        </>
    )
};

export default App;
