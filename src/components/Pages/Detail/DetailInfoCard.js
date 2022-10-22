import LanguageConsumer from "../../Language/LanguageConsumer";
import FadeIn from "react-fade-in";
import TecIcon from "../../Icons/TecIcon";
import { github as gitHubTec } from "../../../data/technologies";
import DateShow from "../../Visual/DateShow";
import MainButton from "../../Buttons/MainButton";
import ExternalLink from "../../Visual/ExternalLink";
import { useMemo } from "react";

const baseLangPath = "Pages.Detail.DetailInfoCard";

const Github = ({ data }) => {
  return (
    <>
      <td className="DetailBasicInfo__info--item">
        <div>
          <LanguageConsumer
            element="h4"
            className="DetailBasicInfo__info--github"
            path={`${baseLangPath}.github`}
          />
        </div>
      </td>
      <td>
        {!!data.private ? (
          <div>
            <LanguageConsumer
              element="span"
              basePath={`${baseLangPath}.Github`}
              path="private"
            />
          </div>
        ) : (
          <LanguageConsumer
            noElement
            basePath={`${baseLangPath}.Github`}
            path="visitRepo"
          >
            {({ text, style }) => (
              <MainButton
                as={ExternalLink}
                href={data.link}
                type="light"
                style={style}
              >
                {text}
                <TecIcon
                  {...gitHubTec}
                  iconProps={{ width: 13, height: 13 }}
                  className="DetailBasicInfo__info--githubIcon"
                />
              </MainButton>
            )}
          </LanguageConsumer>
        )}
      </td>
    </>
  );
};

const ListItem = ({ name, value }) => {
  return (
    <>
      <td>
        <div>
          <LanguageConsumer element="h4" basePath={baseLangPath} path={name} />
        </div>
      </td>
      <td>
        <div>{value}</div>
      </td>
    </>
  );
};

const DetailInfoCard = ({
  data,
  animationCompleted,
  type: data_type,
  animationRef,
}) => {
  const {
    github,
    time: { from, to } = {},
    type,
    mobileFirst,
    totalHours,
  } = data;

  const children = useMemo(
    () =>
      [
        github ? <Github key="github" data={github} /> : null,
        data_type !== "code" && from ? (
          <ListItem
            key="timeFrom"
            name="timeFrom"
            value={<DateShow date={from} />}
          />
        ) : null,
        data_type !== "code" ? (
          <ListItem key="timeTo" name="timeTo" value={<DateShow date={to} />} />
        ) : null,
        type ? <ListItem key="type" name="type" value={type} /> : null,
        typeof mobileFirst === "boolean" ? (
          <ListItem
            key="mobileFirst"
            name="mobileFirst"
            value={
              <LanguageConsumer
                element="span"
                basePath={baseLangPath}
                path={mobileFirst ? "mobile" : "desktop"}
              />
            }
          />
        ) : null,
        totalHours ? (
          <ListItem
            key="totalTime"
            name="totalTime"
            value={
              <LanguageConsumer
                element="span"
                basePath={baseLangPath}
                path="hours"
              >
                {({ text }) => (
                  <span>
                    ~{totalHours} {text}
                  </span>
                )}
              </LanguageConsumer>
            }
          />
        ) : null,
      ].filter((item) => Boolean(item)),
    [data_type, from, to, github, mobileFirst, totalHours, type]
  );

  return (
    <div className="DetailBasicInfo__info" ref={animationRef}>
      <LanguageConsumer
        className="DetailBasicInfo__info--title"
        path={`${baseLangPath}.title`}
        element="h3"
      />
      <table>
        <FadeIn
          wrapperTag="tbody"
          childTag="tr"
          className="DetailBasicInfo__info--list"
          childClassName="DetailBasicInfo__info--item"
          visible={animationCompleted}
        >
          {children}
        </FadeIn>
      </table>
    </div>
  );
};

export default DetailInfoCard;
