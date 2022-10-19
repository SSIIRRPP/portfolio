import { createElement, useMemo, forwardRef } from "react";
import PropTypes from "prop-types";
import "./styles/MainButton.scss";

const MainButtonComp = (props, ref) => {
  const { as, type, className, children, center } = props;
  const newProps = useMemo(() => {
    let p = { ...props };
    delete p.children;
    delete p.as;
    delete p.type;
    delete p.center;
    return p;
  }, [props]);
  return createElement(
    as,
    {
      ...newProps,
      className: `MainButton${type ? ` ${type}` : ""}${
        className ? ` ${className}` : ""
      }${center ? " center" : ""}`,
      ref,
    },
    <div>{children}</div>
  );
};

MainButtonComp.displayName = "MainButton";

const MainButton = forwardRef(MainButtonComp);

MainButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string,
  as: PropTypes.elementType,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

MainButton.defaultProps = {
  as: "button",
  center: true,
};

export default MainButton;
