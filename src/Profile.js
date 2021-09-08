import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Section from "./Section";

const Profile = () => {
  return (
    <Section icon={AccountCircleIcon} title="Profile">
      Senior Sofwate Engineer with over 8 years of experience in the software
      development process, knowledge in software architecture, design patterns
      and good practices, focused on write clean, testable and quality code,
      passion for technologies, self-taught and proactive person, high ability
      to solve problems. Currently working mainly in Rust, .NET5 and React.js
    </Section>
  );
};

export default Profile;
