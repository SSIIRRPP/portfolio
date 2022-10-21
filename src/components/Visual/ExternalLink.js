import { forwardRef, useMemo } from "react";
import PropTypes from "prop-types";
import useClearProps from "../../hooks/useClearProps";

const ExternalLinkComp = (props, ref) => {
  const { href, children } = props;
  const newProps = useClearProps(props, [
    "href",
    "children",
    "makeMainButton",
    "className",
    "buttonType",
  ]);
  const className = useMemo(() => {
    let clNm = "";
    const concat = (str) => {
      clNm = clNm.concat(clNm.length > 1 ? ` ${str}` : str);
    };
    if (props.className) {
      concat(props.className);
    }
    if (props.makeMainButton) {
      concat("MainButton");
      if (typeof props.buttonType === "string") {
        concat(props.buttonType);
      }
    }
    return clNm;
  }, [props.className, props.buttonType, props.makeMainButton]);
  return (
    <a
      className={className}
      href={href}
      ref={ref}
      target="_blank"
      rel="noreferrer"
      {...newProps}
    >
      {children}
    </a>
  );
};

ExternalLinkComp.displayName = "ExternalLink";

const ExternalLink = forwardRef(ExternalLinkComp);

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string,
  ]),
  className: PropTypes.string,
  makeMainButton: PropTypes.bool,
  buttonType: PropTypes.string,
};

ExternalLink.defaultProps = {
  makeMainButton: false,
};

export default ExternalLink;
