import { useMemo, useRef } from "react";
import AnimationStepper from "react-animation-stepper";
import useAnimation from "../../../hooks/useAnimation";
import MainInfoCard from "./MainInfoCard";
import MainLanguages from "./MainLanguages";
import MainProfileImage from "./MainProfileImage";

const MainBody = ({ info, visible }) => {
  const ref = useRef();
  const { finished } = useAnimation({
    element: ref,
    condition: visible,
    animations: "fade-in-comp-alt",
    initTimeout: 600,
    time: 600,
    keepActive: true,
  });

  const components = useMemo(
    () => ({
      card: <MainInfoCard info={info} />,
      image: <MainProfileImage info={info} />,
      langs: <MainLanguages info={info} startAnimations={finished} />,
    }),
    [info, finished]
  );

  const steps = useMemo(
    () => [
      {
        config: {
          card: {
            classes: "fade-to-right",
            keepConfig: true,
          },
          image: {
            classes: "fade-to-left",
            keepConfig: true,
            delay: 100,
          },
        },
        elements: ["card", "image"],
        duration: 400,
      },
      {
        config: {
          style: {
            animationName: "fade-in-animation-to-top",
          },
          keepConfig: true,
        },
        elements: ["langs"],
        duration: 400,
      },
    ],
    []
  );

  return (
    <>
      <div className="Main__body" ref={ref}>
        <AnimationStepper
          components={components}
          steps={steps}
          automaticPlay={finished}
        />
      </div>
    </>
  );
};

export default MainBody;
