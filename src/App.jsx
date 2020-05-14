import React from "react";
import clsx from "clsx";
import {
  useMediaQuery,
  CssBaseline,
  Grid,
  Paper,
  Link,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import heroburst from "../public/icons/hero-burst.svg";
import heroburstMobile from "../public/icons/hero-burst-mobile.svg";
import "./ButtonHover.css";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    color: "black",
  },
  info: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingTop: "2rem",
    paddingBottom: "1rem",
  },
  infoSM: {
    paddingLeft: "10vw",
    paddingRight: "10vw",
  },
  infoTitle: {
    color: "#2d46b9",
    fontWeight: "bold",
  },
  infoContent: {
    fontWeight: "500",
  },
  infoLink: {
    textDecoration: "underline",
  },
  main: {
    paddingTop: "40vh",
    paddingBottom: "40vh",
    paddingLeft: "25vw",
    paddingRight: "25vw",
    position: "relative",
  },
  mainGradiant: {
    background: "linear-gradient(#F037A5 -60%, #FAE62D 140%)",
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  mainImage: {
    backgroundImage: `url(${heroburstMobile})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "absolute",
    width: "auto",
    height: "100%",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
  },
  mainImageMD: {
    backgroundImage: `url(${heroburst})`,
  },
  mainTitle: {
    color: "white",
    fontWeight: "bold",
  },
  mainSecondaryTitle: {
    color: "white",
    fontWeight: "600",
    marginTop: "0.5rem",
  },
  mainButton: {
    backgroundColor: "#1db954",
    lineHeight: "1",
    letterSpacing: "2px",
    fontWeight: "700",
    fontSize: "14px",
    padding: "16px 48px",
    borderRadius: "500px",
    marginTop: "2rem",
    textAlign: "center",
    verticalAlign: "middle",
    display: "inline-block",
    borderWidth: "0",
    minWidth: "160px",
  },
}));

const App = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.up("sm"));
  const matchMD = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <CssBaseline />
      <div className={classes.wrapper}>
        <Navbar></Navbar>
        <Grid container>
          <Grid item xs={12}>
            <Paper
              elevation={0}
              className={clsx(classes.info, matchSM && classes.infoSM)}
            >
              <Typography className={classes.infoTitle} variant="h5">
                新冠肺炎音樂援助計畫
              </Typography>
              <Grid container justify="flex-start">
                <Grid item>
                  <Typography
                    className={classes.infoContent}
                    variant="body1"
                    component="span"
                  >
                    協助我們一起支援全球音樂社群度過這個空前危機。
                  </Typography>
                </Grid>
                <Grid item>
                  <Link href="#!" color="inherit">
                    <Typography
                      className={clsx(classes.infoContent, classes.infoLink)}
                      variant="body1"
                      component="span"
                    >
                      更多資訊
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.main}>
              <div className={classes.mainGradiant}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  className={clsx(
                    classes.mainImage,
                    matchMD && classes.mainImageMD
                  )}
                >
                  <Grid
                    item
                    container
                    direction="column"
                    justif="start"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography className={classes.mainTitle} variant="h3">
                        音樂人人愛
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        className={classes.mainSecondaryTitle}
                        variant="body1"
                      >
                        數百萬首歌曲。無需信用卡。
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Button
                      className={clsx(classes.mainButton, "button-hover")}
                      variant="contained"
                      color="primary"
                    >
                      立即使用 SPOTIFY FREE
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default App;
