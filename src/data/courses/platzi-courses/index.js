const softwareEngineering = {
  name: {
    spa: "Ingeniería de software",
    en: "Software Engineering",
  },
  id: "platzi-ingenieria",
  date: 1597795200000,
  hours: 16,
  certificate: "diploma-ingenieria.pdf",
};

const basicoDeJavascript = {
  name: {
    spa: "Curso Básico de Javascript",
    en: "Javascript Basic Course",
  },
  id: "platzi-basico-javascript",
  date: 1607212800000,
  hours: 19,
  certificate: "diploma-basico-javascript.pdf",
};

const fundamentosBasesDatos = {
  name: {
    spa: "Fundamentos de Bases de Datos",
    en: "Database Fundamentals",
  },
  id: "platzi-db-fundamentos",
  date: 1598313600000,
  hours: 26,
  certificate: "diploma-bd.pdf",
};

const platziBootstrap = {
  name: {
    spa: "Curso de Bootstrap",
    en: "Bootstrap Course",
  },
  id: "platzi-bootstrap",
  date: 1611187200000,
  hours: 8,
  certificate: "diploma-bootstrap.pdf",
};

const cssGridLayout = {
  name: {
    spa: "Curso de CSS Grid Layout",
    en: "CSS Grid Layout Course",
  },
  id: "platzi-css-grid-layout",
  date: 1606694400000,
  hours: 2,
  certificate: "diploma-css-grid-layout-2017.pdf",
};

const platziFlask = {
  name: {
    spa: "Curso de Flask",
    en: "Flask Course",
  },
  id: "platzi-flask",
  date: 1605916800000,
  hours: 12,
  certificate: "diploma-flask.pdf",
};

const platziGitGithub = {
  name: {
    spa: "Curso de Git y GitHub",
    en: "Git and GitHub Course",
  },
  id: "platzi-git-github",
  date: 1597104000000,
  hours: 22,
  certificate: "diploma-git-github.pdf",
};

const platziHtmlCss = {
  name: {
    spa: "Curso de HTML y CSS",
    en: "HTML and CSS Course",
  },
  id: "platzi-html-css",
  date: 1607040000000,
  hours: 18,
  certificate: "diploma-html-css-2019.pdf",
};

const platziHtmlPractico = {
  name: {
    spa: "Curso de HTML y CSS Práctico",
    en: "Practical HTML and CSS Course",
  },
  id: "platzi-html-practico",
  date: 1607126400000,
  hours: 16,
  certificate: "diploma-html-practico.pdf",
};

const platziJqueryJs = {
  name: {
    spa: "Curso de Jquery a JavaScript",
    en: "Jquery to JavaScript Course",
  },
  id: "platzi-jquery-js",
  date: 1607731200000,
  hours: 6,
  certificate: "diploma-jquery-js.pdf",
};

const platziOOP = {
  name: {
    spa: "Curso de Programación Orientada a Objetos",
    en: "Object-Oriented Programming Course",
  },
  id: "platzi-oop",
  date: 1599004800000,
  hours: 20,
  certificate: "diploma-oop.pdf",
};

const platziMaquetacionCSS = {
  name: {
    spa: "Curso de Práctico de Maquetación en CSS",
    en: "Practical CSS Layout Training Course",
  },
  id: "platzi-practico-css",
  date: 1607212800000,
  hours: 19,
  certificate: "diploma-practico-css.pdf",
};

const platziPreprocesadoresCSS = {
  name: {
    spa: "Curso de Preprocesadores de CSS (SASS, LESS)",
    en: "CSS Preprocessors Course (SASS, LESS)",
  },
  id: "platzi-preprocesadores",
  date: 1610582400000,
  hours: 22,
  certificate: "diploma-preprocesadores.pdf",
};

const platziPythonBasico = {
  name: {
    spa: "Curso Básico de Python",
    en: "Basic Python Course",
  },
  id: "platzi-python",
  date: 1597104000000,
  hours: 16,
  certificate: "diploma-python.pdf",
};

const platziPython = {
  name: {
    spa: "Curso de Python",
    en: "Python Course",
  },
  id: "platzi-python-2019",
  date: 1597708800000,
  hours: 28,
  certificate: "diploma-python-2019.pdf",
};

const platziPythonPractico = {
  name: {
    spa: "Curso Práctico de Python: Creacion de un CRUD",
    en: "Python Hands-on Course: Creating a CRUD",
  },
  id: "platzi-python-practico",
  date: 1599091200000,
  hours: 21,
  certificate: "diploma-python-practico.pdf",
};

const platziSQLMySQL = {
  name: {
    spa: "Curso de SQL y MySQL",
    en: "SQL and MySQL Course",
  },
  id: "platzi-sql-mysql",
  date: 1598313600000,
  hours: 18,
  certificate: "diploma-sql-mysql.pdf",
};

const platziTerminal = {
  name: {
    spa: "Curso De Introducción a Terminal y Línea de Comandos",
    en: "Introduction to Terminal and Command Line Course",
  },
  id: "platzi-terminal",
  date: 1593129600000,
  hours: 12,
  certificate: "diploma-terminal-2019.pdf",
};

const typescriptFundamentos = {
  name: {
    spa: "Fundamentos de TypeScript",
    en: "TypeScript Basics",
  },
  id: "platzi-typescript",
  date: 1666558663591,
  hours: 11,
  certificate: "diploma-typescript.pdf",
};

const platziCoursesList = [
  softwareEngineering,
  basicoDeJavascript,
  fundamentosBasesDatos,
  platziBootstrap,
  cssGridLayout,
  platziFlask,
  platziGitGithub,
  platziHtmlCss,
  platziHtmlPractico,
  platziJqueryJs,
  platziOOP,
  platziMaquetacionCSS,
  platziPreprocesadoresCSS,
  platziPythonBasico,
  platziPython,
  platziPythonPractico,
  platziSQLMySQL,
  platziTerminal,
  typescriptFundamentos,
];

// sort by certificate date, from new to old
platziCoursesList.sort(
  (a, b) => (a.date < b.date ? 1 : b.date < a.date ? -1 : 0),
  0
);

const platziCourses = {
  title: "Platzi",
  id: "platzi-courses",
  time: {
    from: new Date(1596153600000),
  },
  github: {
    private: false,
    link: "https://github.com/SSIIRRPP/platzi",
  },
  short: {
    spa: (
      <div>
        <p>Cursos tomados en la plataforma de Platzi.com</p>
      </div>
    ),
    en: (
      <div>
        <p>Courses taken on the Platzi.com platform</p>
      </div>
    ),
  },
  details: {
    spa: [
      <div>
        <p>Cursos tomados en la plataforma de Platzi.com</p>
        <p>
          Empecé a tomar estos cursos para construir la plataforma de OrdNServe
        </p>
      </div>,
      <div>
        <p>Actualmente intento tomar al menos 4 de estos cursos por semana.</p>
      </div>,
    ],
    en: [
      <div>
        <p>Courses taken on the Platzi.com platform</p>
        <p>I started taking these courses to build the OrdNServe platform.</p>
      </div>,
      <div>
        <p>I currently try to take at least 4 of these courses per week.</p>
      </div>,
    ],
  },
  totalHours: platziCoursesList.reduce((a, b) => a + b.hours, 0),
  certificatesRoute: "platzi",
  courses: platziCoursesList,
  link: "https://platzi.com/p/JorgeSirp/",
};

export default platziCourses;
