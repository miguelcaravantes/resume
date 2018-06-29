import React from "react";
import WorkIcon from "@material-ui/icons/Work";
import Section from "./Section";
import { withStyles, Typography } from "@material-ui/core";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  }
});

const ExperienceItem = withStyles(styles)(
  ({ company, location, lapse, activities, tools, classes }) => {
    return (
      <div className={classes.root}>
        <Typography  variant="title">{company}</Typography> <b>{location}</b> <i>{lapse}</i>
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
        company="EMCOR Software"
        location="Ciudad Obregon, Sonora. (Remote from Los Mochis, Sinaloa)"
        lapse="January 2017 - Current"
        activities={[
          "Design architecture of web-based applications that allows to easily maintain and scale applications.",
          "Developm reponsive single page applications in Angular",
          "Build web services in REST and GraphQL",
          "Deploy web applications",
          "Teach angular courses to coworkers.",
          "Develop a payroll platform capable of supporting a large amount of information and users with a web portal to make it easy for customers to upload information about their payroll safely and quickly.",
          "Develop a web application for ticket electronic invoicing to allow customers to invoice their tickets easily.",
          "Maintain and improve ERP and B2B portal focused on the need of the customer.",
          "Develop a product tracking application for a phone selling company."
        ]}
        tools=".NET Framework, .NET Core, Entity Framework, ASP.NET MVC, SQL SERVER, Clean Architecture, Web API, GraphQL, Telerik, Angular, Bootstrap, Typescript, Javascript, jQuery, SASS, TFS, Git."
      />
      <ExperienceItem
        company="BBP & IT ENTERPRISE SERVICES"
        location="Los Mochis, Sinaloa."
        lapse="August 2015 - December 2016"
        activities={[
          "Design architecture and development of web-based applications.",
          "Analyze the customer's needs to create appropriate solutions",
          "Develop internal frameworks and tools to improve the software development process.",
          "Lead a development project",
          "Teach ASP.NET MVC and AngularJs to coworkers",
          "Deploy applications in productive environments (IIS and SQL Server)",
          "Create stored procedures in SQL Server.",
          "Manage version control tools.",
          "Develop a excel data import software."
        ]}
        tools="SQL Server, TFS, EXCEL, .NET, Entity Framework, ASP.NET MVC, Sharepoint, Web Services, AngularJS, Javascript, jQuery."
      />
      <ExperienceItem
        company="EMCOR Software"
        location="Ciudad Obregón, Sonora."
        lapse="May 2014 - August 2015"
        activities={[
          "Development of web applications and desktop applications for Collaborative Planning Forecasting and Replenishment",
          "Re-engineering of enterprise resource planning application.",
          "Advice to interns about Android.",
          "Requirements analysis, project documentation, creation of user stories and planning.",
          "Participation in development of internal tools for process management.",
          "Development of storage application and cloud-based file management."
        ]}
        tools=".NET, SQL Server, TFS, EXCEL, Entity Framework, ASP.NET MVC, Razor, Telerik UI, Windows Forms, Bootstrap, Javascript, jQuery, Kendo UI."
      />
      <ExperienceItem
        company="ART Software"
        location="Los Mochis, Sinaloa."
        lapse="January 2013 - April 2014"
        activities={[
          "Development of enterprise resource planning software.",
          "Maintenance of electronic invoicing module.",
          "Development of credit and collection software.",
          "On-site support with customers.",
          "Import and management of data in SQL Server.",
          "Creation of reports in DevExpress."
        ]}
        tools=".NET, SQL Server, SVN, DevExpress, Windows Forms, Firebird."
      />
    </Section>
  );
};

export default Experience;
