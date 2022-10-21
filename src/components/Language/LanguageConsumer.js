import { cloneElement, forwardRef } from "react";
import { useContext, useMemo, createElement } from "react";
import { LanguageContext } from "../../contexts/Language";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import useClearProps from "../../hooks/useClearProps";

const LanguageConsumerComp = (props, ref) => {
  const {
    path,
    basePath,
    element,
    text: propsText = undefined,
    children,
    noElement,
    justAnimation,
  } = props;

  const { controller, consumerStyle, extractTextWithPath } =
    useContext(LanguageContext);

  // remove irrelevant props before passing them to children
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
  const lang = useMemo(() => controller.lang, [controller.lang]);

  const modifiedPropsText = useMemo(() => {
    if (justAnimation) {
      return Date.now();
    }
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
      return null;
    }
  }, [propsText, lang, justAnimation]);

  // gets text from language file with path prop, or from optional text prop.
  const text = useMemo(() => {
    if (modifiedPropsText) {
      return modifiedPropsText;
    }
    return extractTextWithPath(`${basePath ? `${basePath}.` : ""}${path}`);
  }, [modifiedPropsText, extractTextWithPath, basePath, path]);

  const style = useMemo(() => {
    // generates new style merging consumerStyle with props.style if any
    return props.style ? { ...props.style, ...consumerStyle } : consumerStyle;
  }, [props.style, consumerStyle]);

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
        // and give it relevant props.
        possibleComponentProps = {
          // sends visibility status to children
          visible: controller.visible,
        };
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
          style,
        },
        text
      );
    }
  }, [controller.visible, text, ref, element, noElement, newProps, style]);

  return typeof children === "function"
    ? children({ controller, text: childToShow, style })
    : childToShow;
};

LanguageConsumerComp.displayName = "LanguageConsumer";

const LanguageConsumer = forwardRef(LanguageConsumerComp);

LanguageConsumer.propTypes = {
  path: PropTypes.string,
  basePath: PropTypes.string,
  element: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),
  text: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.array),
    PropTypes.objectOf(PropTypes.node),
  ]),
  children: PropTypes.func,
  noElement: PropTypes.bool,
  justAnimation: PropTypes.bool,
};

LanguageConsumer.defaultProps = {
  element: "p",
  noElement: false,
  justAnimation: false,
};

export default LanguageConsumer;
