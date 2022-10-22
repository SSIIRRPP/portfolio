import PropTypes from "prop-types";
import Highlight from "react-highlight";
import "./styles/CodeShower.scss";

const CodeShower = ({ children, className, id, title, text, file }) => {
  return (
    <code-shower
      class={`CodeShower${className ? ` ${className}` : ""}`}
      id={id}
      is="custom"
    >
      {title ? title : null}
      {text ? text : null}
      <Highlight language="javascript">{file ? file : children}</Highlight>
    </code-shower>
  );
};

CodeShower.propTypes = {
  children: PropTypes.string,
  file: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default CodeShower;
