import { useCallback } from "react";
import LanguageConsumer from "../Language/LanguageConsumer";
import ExternalLink from "./ExternalLink";
import "./styles/Link.scss";

const Link = ({ link, className, animationRef, type }) => {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  return (
    <LanguageConsumer element="span" path="Components.Visual.Link">
      {({ text }) => (
        <ExternalLink
          makeMainButton
          buttonType={type}
          className={`Link${className ? ` ${className}` : ""}`}
          href={link}
          onClick={stopPropagation}
          ref={animationRef}
        >
          <div>{text}</div>
        </ExternalLink>
      )}
    </LanguageConsumer>
  );
};

export default Link;
