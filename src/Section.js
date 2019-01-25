import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3
    /*     marginBottom: theme.spacing.unit * 3  */
  },
  title: {
    borderBottomWidth: "2px",
    borderBottom: "solid",
    paddingBottom: "6px",
    borderBottomColor: theme.palette.primary.main
  },
  body: {
    paddingTop: theme.spacing.unit * 2
  }
});

const Section = props => {
  const { classes } = props;
  const Icon = props.icon;
  return (
    <section className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h5">
          {Icon && <Icon />} {props.title}
        </Typography>
      </div>
      <div className={classes.body}>{props.children}</div>
    </section>
  );
};

export default withStyles(styles)(Section);
