const spa = {
  name: "spa",
  isoCode: "es",
  errors: {
    generalErrorBoundary: (
      <>
        {"Algo ha ido mal. :("} <br />
        {"Por favor, comprueba tu conexión e intétalo de nuevo."}
      </>
    ),
  },
  Head: {
    Title: "Jorge Mañanes, desarrollador web",
  },
  Links: {
    home: "Inicio",
    projects: "Proyectos",
    education: "Educación",
    contact: "Contacto",
    code: "Muestras de código",
  },
  Pages: {
    Main: {
      Body: {
        MainInfoCard: {
          title: "Sobre mi",
          list: {
            residence: "Residencia",
            description: "Descripción",
            age: "Edad",
          },
          stack: {
            title: "Tecnologías conocidas",
          },
        },
        MainProfileImage: {
          imageAlt: "imagen-de-perfil",
        },
        MainLanguages: {
          title: "Idiomas",
        },
      },
      subtitle: "Desarrollador Web FullStack",
      links: "Enlaces",
    },
    Projects: {
      title: "Proyectos",
    },
    Education: {
      title: "Educación",
    },
    CodeSamples: {
      title: "Muestras de código",
    },
    CardsList: {
      noItems: "No se ha encontrado ningún elemento",
      button: "Volver a Inicio",
    },
    Detail: {
      DetailInfoCard: {
        title: "Información básica",
        github: "Repositorio",
        timeFrom: "Desde",
        timeTo: "Hasta",
        type: "Tipo",
        mobileFirst: "Enfoque",
        mobile: "Dispositivos móviles",
        desktop: "Escritorio",
        Github: {
          private: "Privado",
          visitRepo: "Visitar respositorio",
        },
      },
      DetailBody: {
        openButton: "Detalles",
        bodyListTitle: "Lista de cursos:",
      },
      DetailCourseBadge: {
        certificateDate: "Fecha de certificación",
        certificateDownload: "Descargar certificado",
        certificate: "Certificado",
        hours: "Horas",
        description: "Descripción",
      },
    },
    Contact: {
      title: "Contacto",
      subtitle: "Medios de contacto",
      paragraph:
        "También puedes rellenar el siguiente formulario, y me pondré en contacto lo más brevemente.",
      form: {
        labels: {
          name: "Nombre / Empresa",
          email: "Correo electrónico de contacto",
          message: "Mensaje",
          agreement: "Acepto los términos y condiciones",
          send: "Enviar",
        },
        feedback: {
          success: "¡Tu correo se ha enviado con éxito!",
          error:
            "Ha habido un error. Por favor, inténtalo más tarde, o prueba otro medio de contacto.",
        },
      },
    },
    NotFound: {
      title: {
        project: "No hemos encontrado el proyecto que estás buscando.",
        course: "No hemos encontrado el curso que estás buscando.",
        code: "No hemos encontrado la muestra de código que estás buscando.",
        general: "No hemos encontrado lo que estás buscando.",
      },
      noCodeSample: {
        h2: "Puede que la muestra de código aún no esté disponible, puesto que están en constante actualización",
        h3: "Inténtalo de nuevo más tarde, o contáctame y podré facilitártela.",
      },
    },
  },
  Components: {
    Visual: {
      Link: "Visitar página web",
      DateShow: {
        today: "Hoy",
      },
      TechStack: {
        title: "Stack tecnológico",
        level: "Nivel",
      },
    },
    ContactCard: {
      buttonText: "Visitar",
    },
  },
};

export default spa;
