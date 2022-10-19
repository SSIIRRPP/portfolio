import ParagraphGenerator from "../ParagraphGenerator/index.js";
import LanguageConsumer from "../Language/LanguageConsumer";
import PropTypes from "prop-types";
import "./styles/Short.scss";

const Short = ({
  short,
  animationRef,
  show,
  animationSeparation,
  className,
  childClassName,
}) => {
  return (
    <div
      className={`Short${className ? ` ${className}` : ""}`}
      ref={animationRef}
    >
      <LanguageConsumer
        className={childClassName ? ` ${childClassName}` : undefined}
        show={show}
        duration={animationSeparation}
        element={ParagraphGenerator}
        text={short}
      />
    </div>
  );
};

Short.propTypes = {
  short: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.node])
  ).isRequired,
};

export default Short;
