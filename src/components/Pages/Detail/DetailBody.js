import { Collapse } from "@mui/material";
import { useEffect, useState } from "react";
import useQueryParams from "../../../hooks/useQueryParams";
import LanguageConsumer from "../../Language/LanguageConsumer";
import ParagraphGenerator from "../../ParagraphGenerator";
import ExpandIcon from "../../Visual/ExpandIcon";
import DetailCodeSampleFile from "./DetailCodeSampleFile";
import DetailCourseBadge from "./DetailCourseBadge";
import "./styles/DetailBody.scss";

const paragraphHighlightDelay = 800;
const paragraphHighlightDuration = 800;

const DetailBody = ({ data, type, animationEnded, animationRef }) => {
  const [open, setOpen] = useState(false);
  const [paramParagraph, setParamParagraph] = useState(null);
  const params = useQueryParams();

  useEffect(() => {
    if (Boolean(paramParagraph) && animationEnded) {
      setOpen(true);
      setTimeout(() => {
        document
          .getElementById(paramParagraph)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, paragraphHighlightDelay);
    }
  }, [paramParagraph, animationEnded]);

  useEffect(() => {
    const paragraphId = params.get("paragraphId");
    if (paragraphId && paramParagraph !== paragraphId) {
      setParamParagraph(paragraphId);
    }
    if (!paragraphId) {
      setParamParagraph(null);
    }
  }, [params, paramParagraph]);

  return (
    <div className="DetailBody" ref={animationRef}>
      <div className="DetailBody__openButton" onClick={() => setOpen(!open)}>
        <LanguageConsumer noElement path="Pages.Detail.DetailBody.openButton">
          {({ text, style }) => (
            <h2 style={style}>
              {text}
              <div className="DetailBody__openButton--icon">
                <ExpandIcon open={open} className="light" />
              </div>
            </h2>
          )}
        </LanguageConsumer>
      </div>
      <Collapse
        in={open}
        classes={{ wrapperInner: "DetailBody__expand--wrapper" }}
        timeout={800}
      >
        {data.text_file && animationEnded ? (
          <DetailCodeSampleFile data={data} />
        ) : null}
        {data.details ? (
          <LanguageConsumer
            className="DetailBody__expand"
            show={animationEnded && open}
            element={
              <ParagraphGenerator
                paragraphsProps={{
                  highlightDuration: paragraphHighlightDuration,
                  highlightDelay: paragraphHighlightDelay,
                }}
              />
            }
            text={data.details}
          />
        ) : null}
        {type === "course" && data.courses ? (
          <div className="DetailBody__bodyList">
            <ParagraphGenerator
              className="DetailBody__bodyList--list"
              show={animationEnded && open}
              visibilityOptions={{
                threshold: [0.95, 0.05],
                ratio: 0.05,
              }}
              paragraphsProps={{
                highlightDuration: paragraphHighlightDuration,
                highlightDelay: paragraphHighlightDelay,
              }}
            >
              <LanguageConsumer
                element="h4"
                className="center"
                path="Pages.Detail.DetailBody.bodyListTitle"
              />
              {data.courses.map((c) => (
                <DetailCourseBadge
                  key={c.id}
                  course={c}
                  certificatesRoute={data.certificatesRoute}
                />
              ))}
            </ParagraphGenerator>
          </div>
        ) : null}
      </Collapse>
    </div>
  );
};

export default DetailBody;
