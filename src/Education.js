import React from "react";
import Section from "./Section";
import SchoolIcon from "@material-ui/icons/School";

const Contact = () => {
  return (
    <Section icon={SchoolIcon} title="Education">
      Bachelor in computer science <i> 2008 - 2012</i>
      <br />
      Instituto Tecnológico de Los Mochis<br />
      Specialization in systems
    </Section>
  );
};

export default Contact;
