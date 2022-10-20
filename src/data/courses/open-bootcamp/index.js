import opBtcmpIntroduccionProgramacionCertificate from "./certificates/diploma-introduccion-programacion.pdf";

const opBtcmpIntroduccionProgramacion = {
  name: {
    spa: "Introduccion a la Programación",
    en: "Introduction to Programming",
  },
  id: "open-bootcamp-introduccion-programacion",
  date: 1663372800000,
  hours: 9,
  certificate: opBtcmpIntroduccionProgramacionCertificate,
};

const openBootcampCourses = [opBtcmpIntroduccionProgramacion];

const openBootcamp = {
  title: "Open Bootcamp",
  id: "open-bootcamp-courses",
  time: {
    from: new Date(1662336000000),
  },
  github: {
    private: false,
    link: "https://github.com/SSIIRRPP/open-bootcamp",
  },
  short: {
    spa: (
      <div>
        <p>Cursos tomados en la plataforma de open-bootcamp.com</p>
      </div>
    ),
    en: (
      <div>
        <p>Courses taken on the open-bootcamp.com platform</p>
      </div>
    ),
  },
  details: {
    spa: [
      <div>
        <p>Cursos tomados en la plataforma de open-bootcamp.com</p>
        <p>
          Empecé a tomar estos cursos para incrementar mis habilidades como
          programador
        </p>
      </div>,
    ],
    en: [
      <div>
        <p>Courses taken on the open-bootcamp.com platform</p>
        <p>
          I started taking these courses to increase my skills as a programmer.
        </p>
      </div>,
    ],
  },
  totalHours: openBootcampCourses.reduce((a, b) => a + b.hours, 0),
  courses: openBootcampCourses,
  link: "https://open-bootcamp.com",
};

export default openBootcamp;
