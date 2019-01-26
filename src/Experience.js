import React from "react";
import WorkIcon from "@material-ui/icons/Work";
import Section from "./Section";
import { withStyles, Typography } from "@material-ui/core";

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.unit * 3
  }
});

const ExperienceItem = withStyles(styles)(
  ({ company, location, lapse, activities, tools, classes }) => {
    return (
      <div className={classes.root}>
        <Typography  variant="h6">{company}</Typography> <b>{location}</b> <i>{lapse}</i>
        <ul>
          {activities.map((activity, index) => <li key={index}>{activity}</li>)}
        </ul>
        <b>Tools:</b> {tools}
      </div>
    );
  }
);

const Experience = () => {
  return (
    <Section icon={WorkIcon} title="Job experience">
          <ExperienceItem
        company="Tiempo Development"
        location="Guadalajara, Jalisco."
        lapse="July 2018 - Current"

        activities={[
          "Created reports on SQL Reporting Services.",
          "Created stored procedures, functions and views to deliver requiered data to customers",
        ]}
        tools="SQL Server, Server SQL Reporting Services, GIT, Azure DevOps"
      />
      <ExperienceItem
        company="EMCOR Software"
        location="Ciudad Obregon, Sonora. (Remote from Los Mochis, Sinaloa)"
        lapse="January 2017 - July 2018"

        activities={[
          "Implemented architecture based on Clean Architecture to create scalable applications with a great quality.",
          "Used SOLID principles to kept a good quality of code.",
          "Used Angular to create several SPA (Single Page Application) with a great user experience on the web.",
          "Built service oriented aplications with REST and GraphQL web services.",
          "Teached Angular courses to coworkers.",
          "Developed a payroll platform capable of supporting a large amount of information and users, with a web portal to make it easy for customers to upload information about their payroll safely and quickly.",
          "Developed a web application for ticket electronic invoicing to allow customers to invoice their tickets easily.",
          "Maintained and improved ERP and B2B portal focused on the need of the customer.",
          "Developed a product tracking application for a phone selling company."
        ]}
        tools=".NET Framework, .NET Core, Entity Framework, ASP.NET MVC, SQL Server, Web API, GraphQL, Telerik, Angular, Bootstrap, Typescript, Javascript, jQuery, SASS, TFS, Git."
      />
      <ExperienceItem
        company="BBP & IT ENTERPRISE SERVICES"
        location="Los Mochis, Sinaloa."
        lapse="August 2015 - December 2016"
        activities={[
          "Implemented architecture based on Onion Architecture and service pattern to create modular and robust applications.",
          "Used MVC pattern to separate concerns, created internal libraries to solve common problems over it.",
          "Analyzed the customer's needs to create appropriate solutions.",
          "Used AngularJS to create single page applications with web components to reuse them in the whole application.",
          "Led development projects.",
          "Teached ASP.NET MVC and AngularJS to coworkers.",
          "Deployed applications in productive environments (IIS and SQL Server).",
          "Created stored procedures in SQL Server.",
          "Developed a powelful configurable excel data import software."
        ]}
        tools="SQL Server, TFS, EXCEL, .NET, Entity Framework, ASP.NET MVC, Sharepoint, Web Services, AngularJS, Javascript, jQuery."
      />
      <ExperienceItem
        company="EMCOR Software"
        location="Ciudad Obregón, Sonora."
        lapse="May 2014 - August 2015"
        activities={[
          "Developed web applications and desktop applications for Collaborative Planning Forecasting and Replenishment.",
          "Worked on re-engineering of enterprise resource planning application.",
          "Adviced to interns about Android plataform.",
          "Analized requirements, documented projects, created user stories.",
          "Participated in development of internal tools for process management.",
          "Developed storage application and cloud-based file management to share and give easy access to business information."
        ]}
        tools=".NET, SQL Server, TFS, EXCEL, Entity Framework, ASP.NET MVC, Razor, Telerik UI, Windows Forms, Bootstrap, Javascript, jQuery, Kendo UI."
      />
      <ExperienceItem
        company="ART Software"
        location="Los Mochis, Sinaloa."
        lapse="January 2013 - April 2014"
        activities={[
          "Worked on a enterprise resource planning software.",
          "Maintained electronic invoicing module.",
          "Developed a credit and collection software to a company dedicated to sales.",
          "Given on-site support to customers.",
          "Imported data from another systems using SQL Server.",
          "Created business reports using DevExpress Reporting."
        ]}
        tools=".NET, SQL Server, SVN, DevExpress, Windows Forms, Firebird."
      />
    </Section>
  );
};

export default Experience;
