import React from "react";
import Section from "./Section";
import Chip from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& *": {
      margin: theme.spacing(1) / 2,
    },
  },
});

const Skills = (props) => {
  const { classes } = props;
  return (
    <Section title="Skills">
      <div className={classes.root}>
        <Chip label="Rust " />
        <Chip label=".NET5 C#9" />
        <Chip label="React" />
        <Chip label="Angular" />
        <Chip label="MongoDB" />
        <Chip label="SQL" />
        <Chip label="REST" />
        <Chip label="GraphQL" />
        <Chip label="HTML5" />
        <Chip label="Boostrap 5" />
        <Chip label="CSS / Saas" />
        <Chip label="Node.js" />
        <Chip label="Javascript" />
        <Chip label="Typescript" />
        <Chip label="Rescript" />
        <Chip label="SOLID" />
        <Chip label="Clean Architecture" />
        <Chip label="Scrum" />
      </div>
    </Section>
  );
};

export default withStyles(styles)(Skills);
