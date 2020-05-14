import React, { useState } from 'react';
import './Link.css';
import { primary, accent } from '../App';
import { useMediaQuery, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Hidden, AppBar, Toolbar, Link, Grid, IconButton, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import grey from '@material-ui/core/colors/grey';

const height = 40;

const useStyles = makeStyles(theme => ({
    navbar: {
        backgroundColor: primary,
        color: accent,
        height: 'auto',
        paddingLeft: '12px',
    },
    navbarSM: {
        backgroundColor: primary,
        opacity: '0.6',
        color: accent,
        height: 'auto',
        paddingLeft: '10vw',
        paddingRight: '10vw',
    },
    toolbar: {
        minHeight: '45px',
    },
    toolbarSM: {
        minHeight: '67px',
    },
    link: {
        color: 'white',
        fontWeight: '900',
    },
    linkSecondary: {
        color: grey[400],
        fontweight: '900',
    },
    drawer: {
        width: '99vw',
        height: '100vh',
        padding: '20px',
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    drawerLink: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    drawerLinkSecondary: {
        fontSize: '1.2rem',
        color: grey[300]
    },
}));

const Navbar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchSM = useMediaQuery(theme.breakpoints.up('sm'));
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const toggleDrawer = (isOpen) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerIsOpen(isOpen);
    };
    return (
        <AppBar position="sticky" className={matchSM ? classes.navbarSM : classes.navbar}>
            <Toolbar disableGutters className={matchSM ? classes.toolbarSM : classes.toolbar}>
                <Grid container justify="space-between" alignItems="center" wrap="nowrap">
                    <Grid item>
                        <Typography variant="h5" style={{ height: +(height * (matchSM ? 0.85 : 0.6)) + 'px' }}>Logo</Typography>
                    </Grid>
                    <Grid item container justify="flex-end" alignItems="center">
                        <Hidden smUp>
                            <Grid item>
                                <IconButton color="inherit" style={{ paddingTop: '0', paddingBottom: '0' }} onClick={toggleDrawer(true)}>
                                    <MenuIcon />
                                </IconButton>
                                <Drawer anchor="right" open={drawerIsOpen} onClose={toggleDrawer(false)}>
                                    <List className={classes.drawer} disableGutters onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                                        <div>
                                            {['Premium', '幫助中心', '下載'].map(text => <ListItem button disableRipple><ListItemText disableTypography className={[classes.drawerLink, 'link']} primary={text}></ListItemText></ListItem>)}
                                            <ListItem><ListItemText className={[classes.drawerLink]} primary="—"></ListItemText></ListItem>
                                            {['註冊', '登入'].map(text => <ListItem button disableRipple><ListItemText disableTypography className={[classes.drawerLinkSecondary, 'link']} primary={text}></ListItemText></ListItem>)}
                                        </div>
                                        <ListItem button disableRipple><ListItemText disableTypography primary="Logo" style={{ fontWeight: 'bold' }}></ListItemText></ListItem>
                                    </List>
                                </Drawer>
                            </Grid>
                        </Hidden>
                        <Hidden xsDown>
                            <Grid item container justify="flex-end" alignItems="center" spacing="4">
                                <Grid item>
                                    <Link underline="none" className={[classes.link, 'link']} href="#!">Premium</Link>
                                </Grid>
                                <Grid item>
                                    <Link underline="none" className={[classes.link, 'link']} href="#!">幫助中心</Link>
                                </Grid>
                                <Grid item>
                                    <Link underline="none" className={[classes.link, 'link']} href="#!">下載</Link>
                                </Grid>
                                <Grid item><p style={{ color: 'white' }}>|</p></Grid>
                                <Grid item>
                                    <Link underline="none" className={[classes.linkSecondary, 'link']} href="#!">註冊</Link>
                                </Grid>
                                <Grid item>
                                    <Link underline="none" className={[classes.linkSecondary, 'link']} href="#!">登入</Link>
                                </Grid>
                            </Grid>
                        </Hidden>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
