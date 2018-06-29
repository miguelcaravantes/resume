import React, { Component } from "react";
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/teal";
import green from "@material-ui/core/colors/amber";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import Header from "./Header";
import Profile from "./Profile";
import Contact from "./Contact";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[600],
      dark: purple[800]
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    }
  }
});

const styles = theme => {
  return ({
    container: {
      width: '100%',
      marginRight: 'auto',
      marginLeft: 'auto',
      padding: '15px',
      [theme.breakpoints.up('sm')]: {
        maxWidth: 580
      },
      [theme.breakpoints.up('md')]: {
        maxWidth: 920
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: 1180
      },
    }
  });
};
class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Grid container className={classes.container}>
          <Grid  container direction="row-reverse" spacing={40}>
            <Grid item md={8}>
              <Profile />
              <Experience />
              <Education />
            </Grid>
            <Grid item md={4}>
              <Contact />
              <Skills />
            </Grid>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
