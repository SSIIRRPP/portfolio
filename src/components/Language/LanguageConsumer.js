import { cloneElement, forwardRef } from "react";
import {
  useContext,
  useMemo,
  createElement,
  useEffect,
  useState,
  useRef,
} from "react";
import { LanguageContext } from "../../contexts/Language";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

const defaultAnimationDuration = 400; // ms

const LanguageConsumerComp = (props, ref) => {
  const tmRef = useRef();
  const [controller, setController] = useState({ visible: false, text: "" });
  const {
    path,
    basePath,
    element,
    text: propsText = undefined,
    duration,
    children,
    noElement,
    justAnimation,
  } = props;

  const { extractTextWithPath, lang } = useContext(LanguageContext);

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

  useEffect(() => {
    // controlls visibility when text changes
    setController((c) => {
      if (c.visible) {
        if (tmRef.current) {
          clearTimeout(tmRef.current);
        }
        tmRef.current = setTimeout(() => {
          setController({ visible: true, text });
          tmRef.current = null;
        }, duration);
        return {
          ...c,
          visible: false,
        };
      } else {
        return { visible: true, text };
      }
    });
    return () => clearTimeout(tmRef.current);
  }, [text, duration]);

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
  }, [props]);

  const style = useMemo(() => {
    // generates the new style with the animation,
    // and returns the merged ones with props.style, if any
    const s = {
      transition: `opacity ${duration}ms ease-in-out`,
      opacity: controller.visible ? "1" : "0",
    };
    return props.style ? { ...props.style, ...s } : s;
  }, [props.style, controller.visible, duration]);

  const childToShow = useMemo(() => {
    if (noElement) {
      return controller.text;
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
          // sends duration to children
          duration: props.duration,
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
        controller.text
      );
    }
  }, [controller, ref, element, noElement, newProps, style, props.duration]);

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
  duration: PropTypes.number,
  children: PropTypes.func,
  noElement: PropTypes.bool,
  justAnimation: PropTypes.bool,
};

LanguageConsumer.defaultProps = {
  element: "p",
  duration: defaultAnimationDuration,
  noElement: false,
  justAnimation: false,
};

export default LanguageConsumer;
