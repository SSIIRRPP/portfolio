import { Container } from "@mui/material";
import { useRef } from "react";
import { Link } from "react-router-dom";
import MainButton from "../components/Buttons/MainButton";
import LanguageConsumer from "../components/Language/LanguageConsumer";
import ShortInfoCardList from "../components/ShortInfoCard/ShortInfoCardList";
import useAnimation from "../hooks/useAnimation";
import "./styles/CardsList.scss";

const basePath = "Pages.CardsList";

const NoItems = () => {
  const ref = useRef(null);
  useAnimation({
    element: ref,
    animations: "fade-in-comp",
    duration: 800,
    initTimeout: 800,
  });
  return (
    <Container>
      <div ref={ref} className="CardsList__noItems--wrapper">
        <div className="CardsList__noItems">
          <LanguageConsumer element="h2" basePath={basePath} path="noItems" />
          <LanguageConsumer
            element={MainButton}
            type="dark"
            as={Link}
            to="/"
            center
            basePath={basePath}
            path="button"
          />
        </div>
      </div>
    </Container>
  );
};

const CardsList = ({ langPath, elements }) => {
  return (
    <div className="CardsList fade-in-comp">
      <div className="CardsList__header">
        <LanguageConsumer element="h1" path={`${langPath}.title`} />
      </div>
      <div className="CardsList__body">
        {elements?.length > 0 ? (
          <ShortInfoCardList elements={elements} delay={100} />
        ) : (
          <NoItems />
        )}
      </div>
    </div>
  );
};

export default CardsList;
