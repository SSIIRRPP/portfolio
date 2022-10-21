import { forwardRef } from "react";
import MainButton from "../../Buttons/MainButton";
import LanguageConsumer from "../../Language/LanguageConsumer";
import ParagraphGenerator from "../../ParagraphGenerator";
import DateShow from "../../Visual/DateShow";
import DetailExpandItem from "./DetailExpandItem";
import "./styles/DetailCourseBadge.scss";

const baseLangPath = "Pages.Detail.DetailCourseBadge";

const DetailCourseBadgeComp = (
  { course: { name, id, date, description, hours, certificate } },
  ref
) => {
  return (
    <DetailExpandItem
      ref={ref}
      id={id}
      languageTextProp={name}
      className="DetailCourseBadge"
    >
      {description ? (
        <div className="DetailCourseBadge__description">
          <LanguageConsumer
            className="DetailCourseBadge__description--title"
            element="h4"
            basePath={baseLangPath}
            path="description"
          />
          <LanguageConsumer
            className="DetailCourseBadge__description--body"
            element={ParagraphGenerator}
            text={description}
          />
        </div>
      ) : null}
      <div className="DetailCourseBadge__body">
        <LanguageConsumer
          element="h5"
          basePath={baseLangPath}
          path="certificateDate"
        >
          {({ text, style }) => (
            <div
              className="DetailCourseBadge__body--item DetailCourseBadge__date"
              style={style}
            >
              {text}
              <DateShow date={new Date(date)} showDay />
            </div>
          )}
        </LanguageConsumer>
        <LanguageConsumer basePath={baseLangPath} path="hours" noElement>
          {({ text, style }) => (
            <div
              className="DetailCourseBadge__body--item DetailCourseBadge__hours"
              style={style}
            >
              <h5>{text}</h5>
              <p>
                {hours} {text}
              </p>
            </div>
          )}
        </LanguageConsumer>
        <LanguageConsumer
          element="h5"
          basePath={baseLangPath}
          path="certificate"
        >
          {({ text, style }) => (
            <div
              className="DetailCourseBadge__body--item DetailCourseBadge__certificate"
              style={style}
            >
              {text}
              <MainButton
                as="a"
                href={certificate}
                /* download={certificate.replace("/static/media/", "")} */
              >
                <LanguageConsumer
                  className="DetailCourseBadge__certificate--text"
                  element="span"
                  basePath={baseLangPath}
                  path="certificateDownload"
                />
              </MainButton>
            </div>
          )}
        </LanguageConsumer>
      </div>
    </DetailExpandItem>
  );
  /* return (
    <div ref={ref} id={id} className="DetailCourseBadge">
      <div className="DetailCourseBadge__header">
        <LanguageConsumer noElement text={name}>
          {({ text, style }) => (
            <MainButton
              as="h4"
              style={style}
              onClick={() => setOpen((s) => !s)}
            >
              {text}
              <div className="DetailCourseBadge__header--openIcon">
                <ExpandIcon open={open} className="light" />
              </div>
            </MainButton>
          )}
        </LanguageConsumer>
      </div>
      <Collapse in={open}>
        {description ? (
          <div className="DetailCourseBadge__description">
            <LanguageConsumer
              className="DetailCourseBadge__description--title"
              element="h4"
              basePath={baseLangPath}
              path="description"
            />
            <LanguageConsumer
              className="DetailCourseBadge__description--body"
              element={ParagraphGenerator}
              text={description}
            />
          </div>
        ) : null}
        <div className="DetailCourseBadge__body">
          <LanguageConsumer
            element="h5"
            basePath={baseLangPath}
            path="certificateDate"
          >
            {({ text, style }) => (
              <div
                className="DetailCourseBadge__body--item DetailCourseBadge__date"
                style={style}
              >
                {text}
                <DateShow date={new Date(date)} showDay />
              </div>
            )}
          </LanguageConsumer>
          <LanguageConsumer basePath={baseLangPath} path="hours" noElement>
            {({ text, style }) => (
              <div
                className="DetailCourseBadge__body--item DetailCourseBadge__hours"
                style={style}
              >
                <h5>{text}</h5>
                <p>
                  {hours} {text}
                </p>
              </div>
            )}
          </LanguageConsumer>
          <LanguageConsumer
            element="h5"
            basePath={baseLangPath}
            path="certificate"
          >
            {({ text, style }) => (
              <div
                className="DetailCourseBadge__body--item DetailCourseBadge__certificate"
                style={style}
              >
                {text}
                <MainButton
                  as="a"
                  href={certificate}
                >
                  <LanguageConsumer
                    className="DetailCourseBadge__certificate--text"
                    element="span"
                    basePath={baseLangPath}
                    path="certificateDownload"
                  />
                </MainButton>
              </div>
            )}
          </LanguageConsumer>
        </div>
      </Collapse>
    </div>
  ); */
};

DetailCourseBadgeComp.displyName = "DetailCourseBadge";

const DetailCourseBadge = forwardRef(DetailCourseBadgeComp);

export default DetailCourseBadge;
