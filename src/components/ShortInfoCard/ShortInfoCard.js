import { useCallback, useState, useMemo, useRef } from "react";
import AnimationStepper from "react-animation-stepper";
import { Link as ReactRouterLink } from "react-router-dom";
import useAnimation from "../../hooks/useAnimation";
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
  const { title, id, short } = info;

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
    }),
    [title, short, stepsCompleted]
  );

  const steps = useMemo(
    () => [
      {
        config: {
          classes: "fade-to-right",
          keepConfig: true,
        },
        duration: 200,
        elements: ["title"],
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
    <ReactRouterLink
      className="ShortInfoCard__anchor"
      onClick={stopPropagation}
      to={`${id}`}
    >
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
