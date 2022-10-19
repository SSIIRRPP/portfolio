import { useRef } from "react";
import useAnimation from "../../../hooks/useAnimation";
import useVisibility from "../../../hooks/useVisibility";
import LanguageConsumer from "../../Language/LanguageConsumer";
import StarPunctuation from "../../Visual/StarPunctuation";
import "./styles/MainLanguages.scss";

const baseLangPath = "Pages.Main.Body.MainLanguages";

const LanguageBadge = ({ lang, iterator, startAnimations }) => {
  const ref = useRef();
  useAnimation({
    condition: startAnimations,
    element: ref,
    initTimeout: 200 * (iterator + 1),
    animations: "fade-in-comp-alt",
    time: 600,
    keepActive: true,
  });
  return (
    <div className="MainLanguages__language--wrapper" ref={ref}>
      <div className="MainLanguages__language">
        <LanguageConsumer element="h4" text={lang.name}>
          {({ text, style }) => (
            <div className="MainLanguages__language--header" style={style}>
              <img src={lang.flag} alt={`${lang.id}-flag`} />
              {text}
            </div>
          )}
        </LanguageConsumer>
        <div className="MainLanguages__language--body">
          <StarPunctuation punctuation={lang.level} />
        </div>
      </div>
    </div>
  );
};

const MainLanguages = ({ info, animationRef, startAnimations }) => {
  const { isVisible } = useVisibility({
    childRef: animationRef,
    options: { ratio: 0.4, threshold: [0.6, 0.4] },
    stopOnDetection: true,
  });
  const { languages } = info;
  return (
    <div className="MainLanguages" ref={animationRef}>
      <div className="MainLanguages__header">
        <LanguageConsumer element="h3" basePath={baseLangPath} path="title" />
      </div>
      <div
        className="MainLanguages__body"
        style={{ gridTemplateColumns: `1fr `.repeat(languages.length) }}
      >
        {languages.map((l, i) => (
          <LanguageBadge
            key={`language-badge-${l.id}`}
            lang={l}
            iterator={i}
            startAnimations={isVisible && startAnimations}
          />
        ))}
      </div>
    </div>
  );
};

export default MainLanguages;
