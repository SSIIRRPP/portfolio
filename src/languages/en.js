const en = {
  name: "en",
  isoCode: "en",
  errors: {
    generalErrorBoundary: (
      <>
        {"Something went wrong. :("} <br />{" "}
        {"Please, check your connection and try again."}
      </>
    ),
  },
  Head: {
    Title: "Jorge Mañanes, web developer",
  },
  Links: {
    home: "Home",
    projects: "Projects",
    education: "Education",
    contact: "Contact",
    code: "Code Samples",
  },
  Pages: {
    Main: {
      Body: {
        MainInfoCard: {
          title: "About me",
          list: {
            residence: "Residence",
            description: "Description",
            age: "Age",
          },
          stack: {
            title: "Known technologies",
          },
        },
        MainProfileImage: {
          imageAlt: "profile-image",
        },
        MainLanguages: {
          title: "Languages",
        },
      },
      subtitle: "FullStack Web Developer",
      links: "Links",
    },
    Projects: {
      title: "Projects",
    },
    Education: {
      title: "Education",
    },
    CodeSamples: {
      title: "Code samples",
    },
    CardsList: {
      noItems: "No item found",
      button: "Back to Home",
    },
    Detail: {
      DetailInfoCard: {
        title: "Basic information",
        github: "Repository",
        timeFrom: "From",
        timeTo: "To",
        type: "Type",
        mobileFirst: "Main focus",
        mobile: "Mobile devices",
        desktop: "Desktop",
        totalTime: "Total time spent",
        hours: "Hours",
        Github: {
          private: "Private",
          visitRepo: "Visit repository",
        },
      },
      DetailBody: {
        openButton: "Details",
        bodyListTitle: "List of courses:",
      },
      DetailCourseBadge: {
        certificateDate: "Date of certification",
        certificateDownload: "Download certificate (spanish)",
        certificate: "Certificate",
        hours: "Hours",
        description: "Description",
      },
      DetailCodeSampleFile: {
        multi: {
          openButton: "View code files",
        },
        openButton: "View complete code file",
      },
      ProblemSolutionImageCard: {
        header: {
          title: "Solution to the problem",
        },
        footer: {
          button: {
            problem: "Show problem",
            solution: "Show solution",
          },
        },
      },
    },
    Contact: {
      title: "Contact",
      subtitle: "Means of contact",
      paragraph:
        "These are my means of contact. You can also fill out the form below, and I will contact you as soon as possible.",
      form: {
        labels: {
          name: "Name / Company",
          email: "Contact email",
          message: "Message",
          agreement: "I accept the terms and conditions",
          send: "Send",
        },
        feedback: {
          success: "Your email has been sent successfully!",
          error:
            "There has been an error. Please try again later, or try another means of contact.",
        },
      },
    },
    NotFound: {
      title: {
        project: "We have not found the project you are looking for.",
        course: "We have not found the course you are looking for.",
        code: "We have not found the code sample you are looking for.",
        general: "We have not found what you are looking for.",
      },
      noCodeSample: {
        h2: "The code sample may not yet be available, as they are constantly being updated.",
        h3: "Try again later, or contact me and I can provide it for you.",
      },
    },
  },
  Components: {
    Visual: {
      Link: "Visit web page",
      DateShow: {
        today: "Today",
      },
      TechStack: {
        title: "Technology stack",
        level: "Level",
      },
      ImageCard: {
        Modal: {
          closeButton: "Close",
          feedback: "Zoomable",
        },
      },
    },
    ContactCard: {
      buttonText: "Visit",
    },
  },
};

export default en;
