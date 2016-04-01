/**
 * Created by hzou on 2/28/16.
 */

angular
  .module('portfolio.resume')
  .controller('resumeController', ResumeController);

function ResumeController() {
  var self = this;

  _.extend(self, {
    experiences    : getExperiences(),
    school         : [],
    recommendations: getRecommendations()
  });


  function getRecommendations() {
    return [{
      user        : "David Katz",
      company     : "Projector PSA",
      title       : "User experience design leader",
      linkedin    : "https://www.linkedin.com/in/dkatz",
      imgSrc      : "https://media.licdn.com/mpr/mpr/shrinknp_100_100/p/4/005/045/29f/252a712.jpg",
      message     : "Henry is a fantastic software engineer and was a pleasure to have on my team. Actually, software engineer doesn't reflect the depth of Henry's expertise. He's more of a software architect. I worked with Henry on a multi-year iterative effort to redesign and build a large, complex web application. Henry continually looked for ways to make the front-end architecture more scaleable, reduce the effort to implement features, improve reuse, and eliminate some fundamental technical problems. For example, on his own initiative, Henry researched and experimented with Marionette and StickIt, open source components that extend the capabilities of Backbone, the core Javascript MVC framework used in our application (and which have proved essential).",
      date        : "February 23, 2014",
      relationship: "David managed Henry at Projector PSA"
    }, {
      user        : "Dmitri Fradkin",
      company     : "The TriZetto Group",
      title       : "Director of Engineering",
      linkedin    : "https://www.linkedin.com/in/dmitri-fradkin-9100442",
      imgSrc      : "https://media.licdn.com/mpr/mpr/shrink_100_100/p/1/005/076/2c2/35d549c.jpg",
      message     : "Henry is independent problem solver with a great understanding of cutting edge technologies and web development principals. Henry is passionate about work he does every day and motivated by success of the product he developed. Over the past two years Henry worked on multiple web applications, researching and developing complex user interfaces and services for TriZetto core architecture components. While working on the projects he constantly looked at opportunities to improve existing development methods and frameworks. When Henry was asked to work on bringing offshore resources to the team, Henry went above and beyond to make sure the knowledge transition was smooth and the new team was enabled in shortest period possible.",
      date        : "May 9, 2011",
      relationship: "Dmitri managed Henry at The TriZetto Group"
    }, {
      user        : "Marcos Elugardo",
      company     : "The TriZetto Group",
      title       : "Director of Engineering",
      linkedin    : "https://www.linkedin.com/in/marcos-elugardo-37ba348",
      imgSrc      : "https://media.licdn.com/mpr/mpr/shrinknp_100_100/p/8/005/017/010/2fe75f9.jpg",
      message     : "I have worked with Henry for a year and have constantly been impressed with his approach to his job. His love for the field, his adaptability and his commitment to meeting deadlines have all stood out to me above other colleagues I have worked with in the past. He loves his work and is always bring forth new ideas or bits of information he has found while reading about development. He is quick to offer help when needed and often has a fresh perspective that advances the task at hand. Always open to input, Henry is not afraid to look back at his code and see where it can be improved, again showing his interest in coding as something he can take pride in. In addition to this excitement for engineering, I have been surprised to see how quickly Henry was able to become a valuable contributor to our team. After a very short time, he was given entire projects to build with little guidance and was able to deliver quality work by the deadline. He was available to QA when needed and delivered tools to our customers that have enabled them to be successful. As hinted to above, Henry is committed to the deadline, but not at the cot of quality. When needed, he willingly works late or on the weekends, not because he is asked to, but because he cares about what he produces. He could easily meet his deadlines with half baked solutions, but instead he goes the extra mile to ensure what he delivers is quality. If you are considering him, I can’t emphasize enough how valuable he will quickly become to your team or company. I would gladly work with Henry again knowing with confidence that I can rely on him to accomplish and even exceed the goals set before him.",
      date        : "May 12, 2010",
      relationship: "Marcos managed Henry indirectly at The TriZetto Group"
    }];
  }

  function getExperiences() {
    return [{
      title      : "Sr. Front end Software Engineer",
      companyUrl : "http://InterSystems.com",
      companyName: "InterSystems",
      startDate  : new Date("2015-6-29"),
      endDate    : null,
      description: "Healthcare organizations worldwide are charged with improving quality, accessibility, and efficiency.",
      positions  : [{
        role        : "Lead Developer",
        duties      : [
          "Leading InterSystem's Angular Framework team",
          "Main contributor to InterSystem's Angular Framework",
          "Mentored teammates with regular training sessions",
          "Mentoring and guiding Junior and Veteran Engineers",
          "making shit more efficient by creating "
        ],
        technologies: ["AngularJs", "Foundation for Apps", "SASS", "Gulp", "Slush", "Yeoman", "NodeJs", "WallabyJs", "OS X"]
      }, {
        role  : "UI Developer",
        duties: [
          "Created a responsive Care Management Application for managing end-of-life care for U.K.",
          "Creating reusable components to be used by all Angular Teams"
        ]
      }]
    }, {
      title      : "Sr. Software Engineer",
      companyUrl : "http://amadeus.com",
      companyName: "Amadeus",
      startDate  : new Date("2014-10-27"),
      endDate    : new Date("2015-06-27"),
      description: "Created Hotel Management Platform used by 5K+ Hotels (and growing) with anticipated additional revenue of $500million/year",
      positions  : [{
        role        : "Lead Tech",
        duties      : [
          "Defined the Application’s Framework, patterns, and coding guidelines",
          "Created and shared common Angular directives, services, and patterns",
          "Accounted for 40% of all UI feature implementations",
          "Reviewed 70% of all UI Pull-Requests",
          "Mentored teammates with regular training sessions",
          "Recognized as a key contributor and decision maker to a very aggressive 6-months deadline; where a brand new project was created from scratch and delivered on time"
        ],
        technologies: ["Angular", "Bootstrap", "LESS", "Grunt", "Java", "Spring REST API"]
      }]
    }, {
      title      : "Principal Software Engineer",
      companyUrl : "http://projectorpsa.com",
      companyName: "Projector PSA",
      startDate  : new Date("2011-11-07"),
      endDate    : new Date("2015-10-27"),
      description: "Migrated over 5 Professional Services Automation WinForms applications over to Web.",
      positions  : [{
        role        : "UI Architect",
        duties      : [
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
        summary     : {
          quote: "I think a lot of the technical self-education you’ve done, as well as the training of other team members, and technical infrastructure design, has been invaluable for the company, and I highly applaud your initiative and enthusiasm for it",
          cite : "Jeff Richman - Co-founder and VP of Engineering"
        }
      }]
    }, {
      title      : "Software Engineer",
      companyUrl : "http://http://trizetto.com",
      companyName: "TriZetto",
      startDate  : new Date("2009-3-1"),
      endDate    : new Date("2011-10-27"),
      description: "",
      positions  : [{
        role        : "UI Lead Developer",
        duties      : [
          "Mentored and led team to deliver 8 applications within aggressive deadlines",
          "Achieved application design, enhancements, code reviews and quality inspection",
          "Designed and implemented a robust, flexible and reusable component to eliminate 75% of Unit Test code base using design patterns and .Net Reflection",
          "Created Unit Tests using Microsoft Moles Framework while utilizing TDD methodologies",
          "Participated in design meetings"
        ],
        technologies: ["ASP.NET"]
      },
        {
          role        : "Framework Developer",
          duties      : [
            "Polished wireframes and functional specs with UI Design Team",
            "Designed and built reusable components using ASP.NET, jQuery, and Telerik Controls",
            "Participated in Installer/Packaging team to address configurable components",
            "Provided input for QA to identify, log and test defects",
            "Maintained Stored Procedures using SQL Management Studios",
            "Accustomed to configuring IIS 6.0 and 7.5",
            "Developed and deployed WCF Web Service configurations and projects",
            "Worked with Waterfall & Agile Methodologies",
            "Multi-tasked 2-3 projects simultaneously",
            "Assisted other teams with product integrations"
          ],
          technologies: ["ASP.NET"]
        }]
    }, {
      title      : "Associate Software Engineer",
      companyUrl : "http://isobar.com",
      companyName: "Molecular/isobar",
      startDate  : new Date("2007-6-01"),
      endDate    : new Date("2009-2-27"),
      description: "Migrated over 5 Professional Services Automation WinForms applications over to Web.",
      positions  : [{
        role        : "Web Developer",
        duties      : [
          "Designed and implemented an electrical engineering web app using third party Microsoft Excel IO Software (Spreadsheetgear) and Microsoft SQL",
          "Applied MVC pattern to existing code",
          "Collaborated with the ADI Clients and Engineers on a daily basis",
          "Used Spreadsheet Dataset, DataView and DataReader objects for data retrieval and manipulation",
          "Implemented front-end UI using Flex 3.0",
          "Built Web Services using C# and .Net framework",
          "Designed, developed, and implemented necessary Web Forms with .NET",
          "Created and updated Stored Procedures in SQL Server 2005"
        ],
        technologies: ["ASP.NET", "Flex 3.0"]
      },
      ]
    }];

  }
}
