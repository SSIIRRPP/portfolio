import { Collapse } from "@mui/material";
import { Container } from "@mui/system";
import { forwardRef } from "react";
import { useState } from "react";
import useClearProps from "../../../hooks/useClearProps";
import MainButton from "../../Buttons/MainButton";
import LanguageConsumer from "../../Language/LanguageConsumer";
import ExpandIcon from "../../Visual/ExpandIcon";
import "./styles/DetailExpandItem.scss";

const DetailExpandItemComp = (props, ref) => {
  const { children, baseLangPath, languageTextProp } = props;
  const [open, setOpen] = useState(false);
  const newProps = useClearProps(props, [
    "children",
    "baseLangPath",
    "languageTextProp",
  ]);

  return (
    <Container ref={ref} {...newProps}>
      <div className="DetailExpandItem__container">
        <div className="DetailExpandItem">
          <LanguageConsumer
            noElement
            basePath={baseLangPath}
            path="openButton"
            text={languageTextProp}
          >
            {({ text, style }) => (
              <MainButton
                as="h4"
                style={style}
                onClick={() => setOpen((s) => !s)}
              >
                {text}
              </MainButton>
            )}
          </LanguageConsumer>
          <div className="DetailExpandItem__icon">
            <ExpandIcon open={open} className="light" />
          </div>
        </div>
        <Collapse in={open}>{children}</Collapse>
      </div>
    </Container>
  );
};

DetailExpandItemComp.displayName = "DetailExpandItem";

const DetailExpandItem = forwardRef(DetailExpandItemComp);

export default DetailExpandItem;
