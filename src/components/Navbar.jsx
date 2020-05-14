import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  useMediaQuery,
  Typography,
  Hidden,
  AppBar,
  Toolbar,
  Link,
  Grid,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import grey from "@material-ui/core/colors/grey";
import "./LinkHover.css";

const height = 40;

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "black",
    color: "white",
    height: "auto",
    paddingLeft: "12px",
  },
  navbarSM: {
    backgroundColor: "black",
    opacity: "0.6",
    color: "white",
    height: "auto",
    paddingLeft: "10vw",
    paddingRight: "10vw",
  },
  toolbar: {
    minHeight: "45px",
  },
  toolbarSM: {
    minHeight: "67px",
  },
  link: {
    color: "white",
    fontWeight: "900",
  },
  linkSecondary: {
    color: grey[400],
    fontweight: "900",
  },
  linkDivider: { color: "white" },
  drawer: {
    width: "99vw",
    height: "100vh",
    padding: "20px",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  drawerLogo: { fontWeight: "bold" },
  drawerToggle: { paddingTop: "0", paddingBottom: "0" },
  drawerLink: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  drawerLinkSecondary: {
    fontSize: "1.2rem",
    color: grey[300],
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.up("sm"));
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerIsOpen(isOpen);
  };
  return (
    <AppBar
      position="sticky"
      className={matchSM ? classes.navbarSM : classes.navbar}
    >
      <Toolbar
        disableGutters
        className={matchSM ? classes.toolbarSM : classes.toolbar}
      >
        <Grid
          container
          justify="space-between"
          alignItems="center"
          wrap="nowrap"
        >
          <Grid item>
            <Typography
              variant="h5"
              style={{ height: +(height * (matchSM ? 0.85 : 0.6)) + "px" }}
            >
              Logo
            </Typography>
          </Grid>
          <Grid item container justify="flex-end" alignItems="center">
            <Hidden smUp>
              <Grid item>
                <IconButton
                  className={classes.drawerToggle}
                  color="inherit"
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={drawerIsOpen}
                  onClose={toggleDrawer(false)}
                >
                  <List
                    className={classes.drawer}
                    disableGutters
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                  >
                    <div>
                      {["Premium", "幫助中心", "下載"].map((text) => (
                        <ListItem button disableRipple key={text}>
                          <ListItemText
                            disableTypography
                            className={clsx(classes.drawerLink, "link-hover")}
                            primary={text}
                          ></ListItemText>
                        </ListItem>
                      ))}
                      <ListItem>
                        <ListItemText
                          className={classes.drawerLink}
                          primary="—"
                        ></ListItemText>
                      </ListItem>
                      {["註冊", "登入"].map((text) => (
                        <ListItem button disableRipple key={text}>
                          <ListItemText
                            disableTypography
                            className={clsx(
                              classes.drawerLinkSecondary,
                              "link-hover"
                            )}
                            primary={text}
                          ></ListItemText>
                        </ListItem>
                      ))}
                    </div>
                    <ListItem button disableRipple>
                      <ListItemText
                        className={classes.drawerLogo}
                        disableTypography
                        primary="Logo"
                      ></ListItemText>
                    </ListItem>
                  </List>
                </Drawer>
              </Grid>
            </Hidden>
            <Hidden xsDown>
              <Grid
                item
                container
                justify="flex-end"
                alignItems="center"
                spacing={4}
              >
                <Grid item>
                  <Link
                    underline="none"
                    className={clsx(classes.link, "link-hover")}
                    href="#!"
                  >
                    Premium
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    underline="none"
                    className={clsx(classes.link, "link-hover")}
                    href="#!"
                  >
                    幫助中心
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    underline="none"
                    className={clsx(classes.link, "link-hover")}
                    href="#!"
                  >
                    下載
                  </Link>
                </Grid>
                <Grid item>
                  <p className={classes.linkDivider}>|</p>
                </Grid>
                <Grid item>
                  <Link
                    underline="none"
                    className={clsx(classes.linkSecondary, "link-hover")}
                    href="#!"
                  >
                    註冊
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    underline="none"
                    className={clsx(classes.linkSecondary, "link-hover")}
                    href="#!"
                  >
                    登入
                  </Link>
                </Grid>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
