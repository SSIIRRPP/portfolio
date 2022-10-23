import { Container } from "@mui/system";
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import AnimationStepper from "react-animation-stepper";
import { useLocation } from "react-router-dom";
import DetailBasicInfo from "../components/Pages/Detail/DetailBasicInfo";
import DetailBody from "../components/Pages/Detail/DetailBody";
import AnimationPlaceholder from "../components/util/AnimationPlaceholder";
import MainContext from "../contexts/MainContext";
import useAnimation from "../hooks/useAnimation";
import "./styles/Detail.scss";

const Title = ({ title, animationRef }) => {
  return (
    <h1 ref={animationRef} className="Detail__title">
      {title}
    </h1>
  );
};

const Detail = ({ data, type }) => {
  const [animationEnded, setAnimationEnded] = useState(false);
  const { scrollToTop } = useContext(MainContext);
  const location = useLocation();
  const animRef = useRef();
  const { finished } = useAnimation({
    element: animRef,
    animations: "fade-in-comp",
    time: 400,
  });

  const onAnimationEnd = useCallback(() => setAnimationEnded(true), []);

  const components = useMemo(
    () => ({
      title: <Title title={data.title} />,
      info: (
        <DetailBasicInfo
          data={data}
          type={type}
          animationEnded={animationEnded}
        />
      ),
      body:
        data.details || data.courses || data.text_file ? (
          <DetailBody data={data} animationEnded={animationEnded} type={type} />
        ) : (
          <AnimationPlaceholder /> // keep animation working
        ),
    }),
    [data, type, animationEnded]
  );

  const steps = useMemo(
    () => [
      {
        config: {
          style: {
            animation: "fade-in-animation-to-bottom",
          },
          keepConfig: true,
        },
        duration: 400,
        elements: ["info"],
      },
      {
        config: {
          style: {
            animation: "fade-in-animation-to-right",
          },
          keepConfig: true,
        },
        duration: 400,
        elements: ["body"],
      },
    ],
    []
  );

  useEffect(() => {
    setAnimationEnded(false);
  }, [location.pathname]);

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);

  return data ? (
    <Container className="Detail__wrapper">
      <div className="Detail" ref={animRef}>
        <AnimationStepper
          components={components}
          steps={steps}
          automaticPlay={finished}
          onEnd={onAnimationEnd}
          update={location.pathname}
        />
      </div>
    </Container>
  ) : null;
};

export default Detail;
