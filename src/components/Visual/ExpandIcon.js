import { forwardRef } from "react";
import { ReactComponent as ExpandSVG } from "../../assets/icons/expand.svg";
import useClearProps from "../../hooks/useClearProps";
import "./styles/ExpandIcon.scss";

const ExpandIconComp = (props, ref) => {
  const newProps = useClearProps(props, ["open", "className"]);

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
