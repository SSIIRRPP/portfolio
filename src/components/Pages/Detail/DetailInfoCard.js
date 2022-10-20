import LanguageConsumer from "../../Language/LanguageConsumer";
import FadeIn from "react-fade-in";
import TecIcon from "../../Icons/TecIcon";
import { github as gitHubTec } from "../../../data/technologies";
import DateShow from "../../Visual/DateShow";
import MainButton from "../../Buttons/MainButton";
import ExternalLink from "../../Visual/ExternalLink";

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
          <LanguageConsumer
            element="span"
            basePath={`${baseLangPath}.Github`}
            path="private"
          />
        ) : (
          <LanguageConsumer
            noElement
            basePath={`${baseLangPath}.Github`}
            path="visitRepo"
          >
            {({ text }) => (
              <MainButton as={ExternalLink} href={data.link} type="light">
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

const DetailInfoCard = ({ data, animationCompleted, animationRef }) => {
  const {
    github,
    time: { from, to },
    type,
    mobileFirst,
    totalHours,
  } = data;
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
          {github ? <Github data={github} /> : null}
          {from ? (
            <ListItem name="timeFrom" value={<DateShow date={from} />} />
          ) : null}
          <ListItem name="timeTo" value={<DateShow date={to} />} />
          {type ? <ListItem name="type" value={type} /> : null}
          {typeof mobileFirst === "boolean" ? (
            <ListItem
              name="mobileFirst"
              value={
                <LanguageConsumer
                  element="span"
                  basePath={baseLangPath}
                  path={mobileFirst ? "mobile" : "desktop"}
                />
              }
            />
          ) : null}
          {totalHours ? (
            <ListItem
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
          ) : null}
        </FadeIn>
      </table>
    </div>
  );
};

export default DetailInfoCard;
