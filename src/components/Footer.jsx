import React from 'react';
import './Link.css';
import { useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Hidden, Grid, Typography, Link, IconButton, List, ListItem } from '@material-ui/core';
import { Instagram, Twitter, Facebook } from '@material-ui/icons';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles(theme => ({
    main: {
        backgroundColor: 'black',
        color: 'white',
        lineHeight: '1',
        padding: '12px 12px',
        paddingTop: '50px',
    },
    mainSM: {
        backgroundColor: 'black',
        color: 'white',
        lineHeight: '1',
        padding: '50px 10vw 12px 10vw',
    },
    linkList: {
        marginTop: '40px',
        marginBottom: '0px',
    },
    linkListTitle: {
        color: grey[400],
        fontSize: '10px',
    },
    linkListLink: {
        color: 'white',
        fontSize: '14px',
    },
    localization: {
        color: grey[400],
        fontSize: '8px',
    },
    flag: {
        height: '16px',
    },
    copyright: {
        color: grey[400],
        fontSize: '8px',
    },
    copyrightLinks: {
        display: 'inline-block',
    },
}));

const Footer = () => {
    const { main, linkList, linkListTitle, linkListLink, localization, flag, copyright, copyrightLinks, mainSM } = useStyles();
    const theme = useTheme();
    const matchSM = useMediaQuery(theme.breakpoints.up('sm'))

    const LinkList = ({ title, links }) => {
        return (
            <Box className={linkList}>
                <Typography className={linkListTitle}>{title}</Typography>
                <List componet="nav">
                    {links.map(link => <ListItem style={{ paddingLeft: '0', marginTop: '0.3rem' }}><Link underline="none" className={[linkListLink, 'link']} href="#!">{link.title}</Link></ListItem>)}
                </List>
            </Box>
        );
    };

    return (
        <footer className={matchSM ? mainSM : main}>
            <Grid container direction="column">
                <Grid item>
                    <Hidden smUp>
                        <IconButton disableRipple disableFocusRipple disableTouchRipple style={{ justifyContent: 'flex-start', padding: '0' }}>
                            <Typography variant="h5" style={{ width: '25%', color: 'white' }}>Logo</Typography>
                        </IconButton>
                    </Hidden>
                </Grid>
                <Grid item container>
                    <Hidden xsDown>
                        <Grid item sm="3" md="2">
                            <IconButton disableRipple disableFocusRipple disableTouchRipple style={{ justifyContent: 'flex-start', padding: '0' }}>
                                <Typography variant="h5" style={{ width: '50%', color: 'white' }}>Logo</Typography>
                            </IconButton>
                        </Grid>
                    </Hidden>
                    <Grid item xs="12" sm="3" md="2">
                        <LinkList title="公司簡介" links={[
                                    {title: '關於我們'},
                                    {title: '職位空缺'},
                                    {title: 'For the Record'}
                                ]}
                        />
                    </Grid>
                    <Grid item xs="12" sm="3" md="2">
                        <LinkList title="社群" links={[
                                    {title: '藝人專屬'},
                                    {title: '開發商'},
                                    {title: '品牌合作夥伴'},
                                    {title: '投資者'},
                                    {title: '供應商'},
                                ]}
                        />
                    </Grid>
                    <Grid item xs="12" sm="3" md="2">
                        <LinkList title="常用連結" links={[
                                    {title: '幫助中心'},
                                    {title: '網路播放器'},
                                ]}
                        />
                    </Grid>
                    <Hidden smDown>
                        <Grid item container justify="flex-end" md="4">
                            <Grid item><IconButton color="inherit" className="link"><Instagram /></IconButton></Grid>
                            <Grid item><IconButton color="inherit" className="link"><Twitter /></IconButton></Grid>
                            <Grid item><IconButton color="inherit" className="link" style={{ paddingRight: '0' }}><Facebook /></IconButton></Grid>
                        </Grid>
                    </Hidden>
                    <Hidden mdUp>
                        <Grid item container>
                            <Grid item><IconButton color="inherit" className="link" style={{ paddingLeft: '0' }}><Instagram /></IconButton></Grid>
                            <Grid item><IconButton color="inherit" className="link"><Twitter /></IconButton></Grid>
                            <Grid item><IconButton color="inherit" className="link"><Facebook /></IconButton></Grid>
                        </Grid>
                    </Hidden>
                    <Grid item container justify="flex-end" alignItems="center">
                        <Grid item>
                            <Typography className={localization} variant="body2" style={{ display: 'inline' }}>台灣</Typography>
                            <IconButton style={{ paddingRight: '0' }}>
                                <svg className={flag} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 32"><path d="M0 0h48v32H0V0z" fill="#DE2110"/><path d="M0 0h24.106v16H0V0z" fill="#08399C"/><path d="M17.63 11.16l-2.957-.608.63 2.954-2.258-2.005-.93 2.874-.954-2.867L8.92 13.53l.608-2.958-2.954.63 2.005-2.258-2.873-.93L8.57 7.06 6.548 4.817l2.958.608-.63-2.954 2.258 2.007.93-2.873.954 2.866 2.243-2.023-.607 2.958 2.954-.63-2.005 2.258 2.873.93-2.866.954z" fill="#FFF"/><path d="M14.904 10.933l-.933.496-.91.537-1.057-.036-1.057.013-.898-.56-.922-.516-.497-.932-.54-.908.036-1.055-.012-1.055.56-.895.52-.92.932-.496.91-.538 1.058.036 1.058-.012.898.56.922.516.497.93.538.91-.036 1.054.012 1.055-.56.895z" fill="#005387"/><path d="M15.29 8.018c0 1.79-1.45 3.242-3.242 3.242S8.806 9.81 8.806 8.018s1.45-3.242 3.242-3.242 3.242 1.45 3.242 3.242z" fill="#FFF"/></svg>
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid item container justify="space-between" alignItems="baseline">
                        <Grid item container spacing="3" xs="9">
                            {[
                                '法律條款',
                                '隱私權中心',
                                '隱私政策',
                                'Cookies',
                                '關於廣告',
                            ].map(link => <Grid item><Link underline="none" className={[copyright, copyrightLinks, 'link']} href="#!">{link}</Link></Grid>)}
                        </Grid>
                        <Grid item xs="3" style={{ flexBasis: 'auto' }}><Typography className={copyright}>© 2020 spotify splash demo</Typography></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer
