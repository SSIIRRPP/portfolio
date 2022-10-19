import { Container } from "@mui/system";
import { useRef } from "react";
import LanguageConsumer from "../components/Language/LanguageConsumer";
import useAnimation from "../hooks/useAnimation";
import "./styles/NotFound.scss";

const NotFound = ({ type }) => {
  const ref = useRef();
  useAnimation({
    element: ref,
    animations: "fade-in-comp-alt",
    time: 600,
    initTimeout: 400,
    keepActive: true,
  });
  return (
    <Container ref={ref} className="NotFound__wrapper">
      <div className="NotFound">
        <LanguageConsumer
          element="h1"
          path={`Pages.NotFound.title.${type ? type : "general"}`}
        />
        {type === "code" ? (
          <>
            <LanguageConsumer
              element="h2"
              path="Pages.NotFound.noCodeSample.h2"
            />
            <LanguageConsumer
              element="h3"
              path="Pages.NotFound.noCodeSample.h3"
            />
          </>
        ) : null}
      </div>
    </Container>
  );
};

export default NotFound;
