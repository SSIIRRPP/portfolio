import { useCallback, useState, useMemo, useRef } from "react";
import AnimationStepper from "react-animation-stepper";
import { useNavigate, Link as ReactRouterLink } from "react-router-dom";
import useAnimation from "../../hooks/useAnimation";
import AnimationPlaceholder from "../util/AnimationPlaceholder";
import Link from "../Visual/Link";
import Short from "../Visual/Short";
import "./styles/ShortInfoCard.scss";

export const animationSeparation = 200;

const Title = ({ title, animationRef }) => {
  return (
    <h2 ref={animationRef} className="ShortInfoCard__title">
      {title}
    </h2>
  );
};

const ShortInfoCard = ({ info, children, iterator }) => {
  const animRef = useRef();
  const [stepsCompleted, setStepsCompleted] = useState(false);
  const { finished } = useAnimation({
    element: animRef,
    condition: typeof iterator === "number",
    time: animationSeparation * 4,
    initTimeout: animationSeparation * (iterator + 1) + 200,
    animations: "fade-to-bottom",
    keepActive: true,
  });

  const navigate = useNavigate();
  const { title, id, link, short } = info;

  /*   const goToPage = useCallback(() => {
    navigate(`${id}`);
  }, [navigate, id]); */

  const setCompleted = useCallback(
    () => setStepsCompleted(true),
    [setStepsCompleted]
  );

  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const components = useMemo(
    () => ({
      title: <Title title={title} />,
      short: (
        <Short
          short={short}
          show={stepsCompleted}
          animationSeparation={animationSeparation}
        />
      ),
      link: link ? (
        <Link className="ShortInfoCard__link" link={link} useExternalLink />
      ) : (
        <AnimationPlaceholder className="ShortInfoCard__link" />
      ),
    }),
    [title, short, link, stepsCompleted]
  );

  const steps = useMemo(
    () => [
      {
        config: {
          title: {
            classes: "fade-to-right",
            keepConfig: true,
          },
          link: {
            classes: "fade-to-left",
            keepConfig: true,
            delay: animationSeparation,
          },
        },
        duration: 200,
        elements: ["title", "link"],
      },
      {
        config: {
          style: {
            animationName: "fade-in-animation-to-top",
          },
          keepConfig: true,
        },
        duration: 100,
        elements: ["short"],
      },
    ],
    []
  );

  return (
    <ReactRouterLink onClick={stopPropagation} to={`${id}`}>
      <div className="ShortInfoCard__container scale-on-hover">
        <div className="ShortInfoCard" ref={animRef}>
          <AnimationStepper
            components={components}
            steps={steps}
            automaticPlay={finished}
            onEnd={setCompleted}
          />
          {children}
        </div>
      </div>
    </ReactRouterLink>
  );
};

export default ShortInfoCard;
