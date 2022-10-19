import { useEffect, useMemo, useState } from "react";
import "./styles/TecIcon.scss";
import { useCallback } from "react";
import { Popover, Typography } from "@mui/material";
import LanguageConsumer from "../Language/LanguageConsumer";
import StarPunctuation from "../Visual/StarPunctuation";
import { useContext } from "react";
import MainContext from "../../contexts/MainContext";

const TecIcon = (props) => {
  const [anchorElement, setAnchorElement] = useState(null);
  const { isScrolling } = useContext(MainContext);
  const IconElement = useMemo(() => props.icon, [props.icon]);
  const newStyle = useMemo(() => {
    let s = {};
    if (props.iconCorrection) {
      s = {
        ...s,
        margin: props.iconCorrection,
      };
    }
    return props.iconProps?.style ? { ...props.iconProps.style, ...s } : s;
  }, [props.iconProps, props.iconCorrection]);

  const handlePopoverClose = useCallback(() => setAnchorElement(null), []);
  const handlePopoverOpen = useCallback(
    (e) => setAnchorElement(e.currentTarget),
    []
  );

  useEffect(() => {
    if (isScrolling) {
      handlePopoverClose();
    }
  }, [handlePopoverClose, isScrolling]);

  const open = Boolean(anchorElement);

  const Icon = IconElement ? (
    <div className="TecIcon__wrapper">
      <div
        className={`TecIcon${props.className ? ` ${props.className}` : ""}`}
        style={props.contStyle || {}}
      >
        <IconElement
          width={30}
          height={30}
          aria-haspopup="true"
          onClick={open ? handlePopoverClose : handlePopoverOpen}
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          {...(props.iconProps || {})}
          style={newStyle}
        />
      </div>
    </div>
  ) : null;

  return (
    <>
      {Icon}
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorElement}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        classes={{
          root: "TecIcon__popover--root",
          paper: "TecIcon__popover--wrapper",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div className="TecIcon__popover">
          <Typography className="TecIcon__popover--name" sx={{ p: 1 }}>
            {props.name}
          </Typography>
          {props.showLevel && props.level ? (
            <div className="TecIcon__level">
              <LanguageConsumer
                element="h6"
                path="Components.Visual.TechStack.level"
                className="TecIcon__level--title"
              />
              <div className="TecIcon__level--stars">
                <StarPunctuation punctuation={props.level} />
              </div>
            </div>
          ) : null}
        </div>
      </Popover>
    </>
  );
};

export default TecIcon;
