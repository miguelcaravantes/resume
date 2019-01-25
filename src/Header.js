import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = theme => {
  return {
    header: {
      background: theme.palette.primary.main,
      padding: theme.spacing.unit * 3
    },
    profileImage: {
      width: 200,
      height: 200,
      borderRadius: "50%"
    },
    alignCenter: {
      textAlign: "center"
    },
    title: {
      textAlign: "center",
      [theme.breakpoints.up("md")]: {
        textAlign: "left",
        marginTop: theme.spacing.unit * 5
      }
    },
    name: {
      color: "white"
    }
  };
};

const Header = props => {
  const { classes } = props;
  return (
    <div>
      <header className={classes.header}>
        <Grid container direction="row">
          <Grid item md={1} xs={false} />
          <Grid item className={classes.alignCenter} xs={12} md={4}>
            <img
              alt="profile"
              src="profile.jpg"
              className={classes.profileImage}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.title}>
            <Typography  variant="h3" className={classes.name}>Miguel Caravantes</Typography>
            <Typography  variant="h4">Software Developer</Typography>
          </Grid>
        </Grid>
      </header>
    </div>
  );
};

export default withStyles(styles)(Header);
