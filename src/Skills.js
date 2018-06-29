import React from "react";
import Section from "./Section";
import Chip from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& *" : {
        margin: theme.spacing.unit / 2
    }
  }
});

const Skills = props => {
  const { classes } = props;
  return (
    <Section title="Skills">
      <div className={classes.root}>
        <Chip label="C#" />
        <Chip label="Angular / AngularJs" />
        <Chip label="SQL" />
        <Chip label=".NET / .NET Core" />
        <Chip label="ASP.NET MVC / Web API" />
        <Chip label="REST" />
        <Chip label="GraphQL" />
        <Chip label="HTML" />
        <Chip label="Boostrap" />
        <Chip label="CSS / Saas" />
        <Chip label="Javascript" />
        <Chip label="Typescript" />
        <Chip label="React" />
        <Chip label="Node.js" />
        <Chip label="SOLID" />
        <Chip label="Clean Architecture" />
        <Chip label="Scrum" />
      </div>
    </Section>
  );
};

export default withStyles(styles)(Skills);
