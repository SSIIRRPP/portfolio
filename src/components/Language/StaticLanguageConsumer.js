import {
  cloneElement,
  createElement,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { forwardRef, useRef } from "react";
import { LanguageContext } from "../../contexts/Language";

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

  const newProps = useMemo(() => {
    // removes irrelevant props before passing them to children
    let p = { ...props };
    delete p.basePath;
    delete p.path;
    delete p.element;
    delete p.noElement;
    delete p.animation;
    delete p.duration;
    delete p.text;
    delete p.children;
    delete p.justAnimation;
    delete p.style;
    return p;
  }, []);

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
