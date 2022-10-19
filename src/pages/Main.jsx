import { Collapse, Container } from "@mui/material";
import { useRef, useState } from "react";
import useAnimation from "../hooks/useAnimation";
import FadeIn from "react-fade-in";
import "./styles/Main.scss";
import "../styles/animations.scss";
import SpaFlag from "../assets/icons/spa.png";
import EnFlag from "../assets/icons/en.png";
import FrFlag from "../assets/icons/fr.png";
import LanguageConsumer from "../components/Language/LanguageConsumer";
import MainBody from "../components/Pages/Main/MainBody";
import MainButton from "../components/Buttons/MainButton";
import { Link } from "react-router-dom";
import ExpandIcon from "../components/Visual/ExpandIcon";

const info = {
  name: "Jorge Mañanes López",
  birthdate: new Date(857818800000),
  about: {
    en: "Active, efficient and productive young man. Quick learner, always interested in new technologies. Good teamworker. Thorough, methodical, formal and energetic.",
    spa: "Joven activo, eﬁciente y productivo. Gran capacidad e interés por aprender nuevas tecnologías. Con capacidad de trabajo en equipo. Minucioso, metódico, formal y enérgico. ",
  },
  city: "Galapagar",
  state: "Madrid",
  country: {
    en: "Spain",
    spa: "España",
  },
  languages: [
    {
      id: "spanish",
      name: { en: "Spanish", spa: "Español" },
      level: 5,
      flag: SpaFlag,
    },
    {
      id: "english",
      name: { en: "English", spa: "Inglés" },
      level: 4,
      flag: EnFlag,
    },
    {
      id: "french",
      name: { en: "French", spa: "Francés" },
      level: 1,
      flag: FrFlag,
    },
  ],
};

const baseLangPath = "Pages.Main";

const Main = () => {
  const [openLinks, setOpenLinks] = useState(false);
  const ref = useRef();
  const { finished } = useAnimation({
    element: ref,
    animations: "fade-in-comp-alt",
    time: 600,
    keepActive: true,
  });

  return (
    <Container ref={ref} className="Main__wrapper">
      <div className="Main">
        <FadeIn visible={finished} delay={200}>
          <h1 className="Main__title">{info.name}</h1>
          <LanguageConsumer
            element="h2"
            className="Main__subtitle"
            basePath={baseLangPath}
            path="subtitle"
          />
          <div className="Main__links">
            <LanguageConsumer noElement basePath={baseLangPath} path="links">
              {({ text, style }) => (
                <div className="Main__links--header" style={style}>
                  <MainButton
                    type="dark"
                    as="h3"
                    onClick={() => setOpenLinks((open) => !open)}
                    center
                  >
                    <div className="Main__links--button">
                      {text}
                      <ExpandIcon className="light" open={openLinks} />
                    </div>
                  </MainButton>
                </div>
              )}
            </LanguageConsumer>
            <Collapse in={openLinks}>
              <div className="Main__links--body">
                <LanguageConsumer
                  element={MainButton}
                  type="dark"
                  as={Link}
                  to="/projects"
                  path="Links.projects"
                  center
                />
                <LanguageConsumer
                  element={MainButton}
                  type="dark"
                  as={Link}
                  to="/education"
                  path="Links.education"
                  center
                />
                <LanguageConsumer
                  element={MainButton}
                  type="dark"
                  as={Link}
                  to="/code-samples"
                  path="Links.code"
                  center
                />
              </div>
            </Collapse>
          </div>
          <MainBody info={info} visible={finished} />
        </FadeIn>
      </div>
    </Container>
  );
};

export default Main;
