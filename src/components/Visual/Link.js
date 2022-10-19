import { useCallback } from "react";
import MainButton from "../Buttons/MainButton";
import LanguageConsumer from "../Language/LanguageConsumer";
import ExternalLink from "./ExternalLink";
import "./styles/Link.scss";

const Link = ({ link, className, useExternalLink, animationRef, type }) => {
  const goToPage = useCallback(
    (e) => {
      e.stopPropagation();
      const aElement = document.createElement("a");
      aElement.href = link;
      aElement.target = "_blank";
      aElement.click();
    },
    [link]
  );

  return (
    <LanguageConsumer element="span" path="Components.Visual.Link">
      {({ text }) =>
        useExternalLink ? (
          <ExternalLink
            makeMainButton
            buttonType={type}
            className={`Link${className ? ` ${className}` : ""}`}
            href={link}
            ref={animationRef}
          >
            <div>{text}</div>
          </ExternalLink>
        ) : (
          <MainButton
            ref={animationRef}
            type={type}
            className={`Link${className ? ` ${className}` : ""}`}
            onClick={goToPage}
          >
            {text}
          </MainButton>
        )
      }
    </LanguageConsumer>
  );
};

export default Link;
