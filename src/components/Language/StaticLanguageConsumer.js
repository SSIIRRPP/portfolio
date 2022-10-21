import { cloneElement, createElement, useContext, useMemo } from "react";
import { forwardRef } from "react";
import { LanguageContext } from "../../contexts/Language";
import useClearProps from "../../hooks/useClearProps";

const StaticLanguageConsumer = forwardRef((props, ref) => {
  const {
    element,
    children,
    basePath,
    noElement,
    path,
    text: propsText = undefined,
  } = props;
  const { extractTextWithPath, lang } = useContext(LanguageContext);

  const text = useMemo(() => {
    if (propsText) {
      let propsTextForLang = propsText[lang];
      if (Array.isArray(propsTextForLang)) {
        return propsTextForLang.map((t) => {
          // if the element from the array is a ReactComponent,
          // it will generate a "key" prop for it
          if (t.props) {
            return cloneElement(t, { key: nanoid(6) });
          }
          return t;
        });
      } else {
        return propsTextForLang;
      }
    } else {
      return extractTextWithPath(`${basePath ? `${basePath}.` : ""}${path}`);
    }
  }, []);

  // removes irrelevant props before passing them to children
  const newProps = useClearProps(props, [
    "path",
    "basePath",
    "element",
    "text",
    "noElement",
    "children",
    "animation",
    "justAnimation",
    "style",
  ]);

  const childToShow = useMemo(() => {
    if (noElement) {
      return text;
    } else {
      let renderFunction = createElement;
      let possibleComponentProps = {};
      if (element.props) {
        // if element is a ReactComponent/Function,
        // it will clone it instead of creating a new one,
        renderFunction = cloneElement;
      }
      return renderFunction(
        element,
        {
          ...newProps,
          ...possibleComponentProps,
          className: newProps.className
            ? `LanguageConsumer ${newProps.className}`
            : "LanguageConsumer",
          ref,
        },
        text
      );
    }
  }, []);

  return typeof children === "function"
    ? children({ text: childToShow })
    : childToShow;
});

export default StaticLanguageConsumer;
