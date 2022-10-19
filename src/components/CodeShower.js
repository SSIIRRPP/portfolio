import PropTypes from "prop-types";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import ocean from "react-syntax-highlighter/dist/esm/styles/hljs/ocean";
import "./styles/CodeShower.scss";

SyntaxHighlighter.registerLanguage("javascript", js);

const CodeShower = ({ children, className, id, title, text, file }) => {
  return (
    <code-shower class={`CodeShower ${className}`} id={id} is="custom">
      {title ? title : null}
      {text ? text : null}
      <SyntaxHighlighter
        customStyle={{ width: "95%" }}
        language="javascript"
        style={ocean}
      >
        {file ? file : children}
      </SyntaxHighlighter>
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
