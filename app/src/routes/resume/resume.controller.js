/**
 * Created by hzou on 2/28/16.
 */

angular
  .module('portfolio.resume')
  .controller('resumeController', ResumeController);

function ResumeController() {
  var self = this;

  _.extend(self, {
    experiences: getExperiences(),
    school: [],
    recommendations: []

  });


  function getExperiences() {
    return [{
      title: "Senior Front-End Consultant",
      companyUrl: "http://InterSystems.com",
      companyName: "InterSystems",
      startDate: new Date("2015-6-29"),
      endDate: null,
      description: "Created Hotel Management Platform used by 5K+ Hotels (and growing) with anticipated additional revenue of $500million/year",
      positions: [{
        role: "Lead Developer",
        duties: [
          "Leading InterSystem's Angular Framework team",
          "Main contributor to InterSystem's Angular Framework",
          "Mentored teammates with regular training sessions",
          "Mentoring and guiding Junior and Veteran Engineers",
          "making shit more efficient by creating "
        ],
        technologies: ["AngularJs", "Foundation for Apps", "SASS", "Gulp", "Slush", "Yeoman", "NodeJs", "WallabyJs", "OS X"]
      }, {
        role: "UI Developer",
        duties: [
          "Created a responsive Care Management Application for managing end-of-life care for U.K.",
          "Creating reusable components to be used by all Angular Teams"
        ]
      }]
    }, {
      title: "Senior Front-End Software Engineer",
      companyUrl: "http://amadeus.com",
      companyName: "Amadeus",
      startDate: new Date("2014-10-27"),
      endDate: new Date("2015-06-27"),
      description: "Created Hotel Management Platform used by 5K+ Hotels (and growing) with anticipated additional revenue of $500million/year",
      positions: [{
        role: "Lead Tech",
        duties: [
          "Defined the Application’s Framework, patterns, and coding guidelines",
          "Created and shared common Angular directives, services, and patterns",
          "Accounted for 40% of all UI feature implementations",
          "Reviewed 70% of all UI Pull-Requests",
          "Mentored teammates with regular training sessions",
          "Recognized as a key contributor and decision maker to a very aggressive 6-months deadline; where a brand new project was created from scratch and delivered on time"
        ],
        technologies: ["Angular", "Bootstrap", "LESS", "Grunt", "Java", "Spring REST API"],
      }]
    }, {
      title: "Principal Software Engineer",
      companyUrl: "http://projectorpsa.com",
      companyName: "Projector PSA",
      startDate: new Date("2011-11-07"),
      endDate: new Date("2015-10-27"),
      description: "Migrated over 5 Professional Services Automation WinForms applications over to Web.",
      positions: [{
        role: "UI Architect",
        duties: [
          "Converted legacy Windows Applications to web based single-page apps by using latest client-side web technologies",
          "Designed and implemented two in-house MV* patterns by using a combination of Backbone, Marionette and Stickit",
          "Defined architectural patterns and coding guidelines to promote code reusability, extensibility, maintainability, and encapsulation",
          "Championed for continuous learning; advanced team’s technical skill with a weekly lunch-and-learn program",
          "Acted as role model for best practices",
          "Improved page rendering time from 30 seconds to 5 seconds",
          "Optimized performance by profiling, tuning JavaScript, and reducing event handlers",
          "Eliminated memory leaks by cleaning up Backbone phantom views",
          "Instrumental contributor to release the smoothest and fewest bugs products for the past couple iterations"
        ],
        technologies: ["Backbone", "Marionette", "SASS", ".NET MVC", "TFS"],
        summary: {
          quote: "I think a lot of the technical self-education you’ve done, as well as the training of other team members, and technical infrastructure design, has been invaluable for the company, and I highly applaud your initiative and enthusiasm for it",
          cite: "Jeff Richman - Co-founder and VP of Engineering"
        }
      }]
    }, {
      title: "Software Engineer",
      companyUrl: "http://http://trizetto.com",
      companyName: "TriZetto",
      startDate: new Date("2009-3-1"),
      endDate: new Date("2011-10-27"),
      description: "Migrated over 5 Professional Services Automation WinForms applications over to Web.",
      positions: [{
        role: "UI Fabrication Lead",
        duties: [
          "Mentored and led team to deliver 8 applications within aggressive deadlines",
          "Achieved application design, enhancements, code reviews and quality inspection",
          "Designed and implemented a robust, flexible and reusable component to eliminate 75% of Unit Test code base using design patterns and .Net Reflection",
          "Created Unit Tests using Microsoft Moles Framework while utilizing TDD methodologies",
          "Participated in design meetings"
        ],
        technologies: ["Asp.Net"]
      },
        {
          role: "Framework Developer",
          duties: [
            "Polished wireframes and functional specs with UI Design Team",
            "Designed and built reusable components using Asp.Net, jQuery, and Telerik Controls",
            "Participated in Installer/Packaging team to address configurable components",
            "Provided input for QA to identify, log and test defects",
            "Maintained Stored Procedures using SQL Management Studios",
            "Accustomed to configuring IIS 6.0 and 7.5",
            "Developed and deployed WCF Web Service configurations and projects",
            "Worked with Waterfall & Agile Methodologies",
            "Multi-tasked 2-3 projects simultaneously",
            "Assisted other teams with product integrations"

          ],
          technologies: ["Asp.Net"],
          summary: {
            quote: "I think a lot of the technical self-education you’ve done, as well as the training of other team members, and technical infrastructure design, has been invaluable for the company, and I highly applaud your initiative and enthusiasm for it",
            cite: "Jeff Richman - Co-founder and VP of Engineering"
          }
        }]
    }, {
      title: "Associate Software Engineer",
      companyUrl: "http://isobar.com",
      companyName: "Molecular/isobar",
      startDate: new Date("2007-7-01"),
      endDate: new Date("209-2-27"),
      description: "Migrated over 5 Professional Services Automation WinForms applications over to Web.",
      positions: [{
        role: "Web Developer",
        duties: [

        ],
        technologies: ["Backbone", "Marionette", "SASS", ".NET MVC", "TFS"],
        summary: {
          quote: "I think a lot of the technical self-education you’ve done, as well as the training of other team members, and technical infrastructure design, has been invaluable for the company, and I highly applaud your initiative and enthusiasm for it",
          cite: "Jeff Richman - Co-founder and VP of Engineering"
        }
      }]
    }];

  }
}
