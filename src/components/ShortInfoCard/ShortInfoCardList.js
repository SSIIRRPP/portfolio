import FadeIn from "react-fade-in";
import PropTypes from "prop-types";
import ShortInfoCard from "./ShortInfoCard";
import { useMemo } from "react";

const ShortInfoCardList = ({ elements, className, delay = 600, children }) => {
  const childToShow = useMemo(
    () =>
      elements.map((element, iterator) => {
        return (
          <ShortInfoCard key={element.id} info={element} iterator={iterator} />
        );
      }),
    [elements]
  );
  return (
    <>
      <FadeIn
        className={`ShortInfoCardList${className ? ` ${className}` : ""}`}
        delay={delay}
      >
        {childToShow}
      </FadeIn>
      {children}
    </>
  );
};

ShortInfoCardList.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

ShortInfoCardList.defaultProps = {
  delay: 100,
};

export default ShortInfoCardList;
