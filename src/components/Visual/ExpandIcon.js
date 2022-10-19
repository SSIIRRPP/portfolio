import { forwardRef } from "react";
import { useMemo } from "react";
import { ReactComponent as ExpandSVG } from "../../assets/icons/expand.svg";
import "./styles/ExpandIcon.scss";

const ExpandIconComp = (props, ref) => {
  const newProps = useMemo(() => {
    const p = { ...props };
    delete p.open;
    delete p.className;
    return p;
  }, [props]);

  return (
    <ExpandSVG
      className={`ExpandIcon${props.open ? " open" : ""}${
        props.className ? ` ${props.className}` : ""
      }`}
      ref={ref}
      {...newProps}
    />
  );
};

ExpandIconComp.displayName = "ExpandIcon";

const ExpandIcon = forwardRef(ExpandIconComp);

export default ExpandIcon;
