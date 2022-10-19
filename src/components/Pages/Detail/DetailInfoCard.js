import LanguageConsumer from "../../Language/LanguageConsumer";
import FadeIn from "react-fade-in";
import TecIcon from "../../Icons/TecIcon";
import { github as gitHubTec } from "../../../data/technologies";
import DateShow from "../../Visual/DateShow";

const baseLangPath = "Pages.Detail.DetailInfoCard";

const Github = ({ data }) => {
  return (
    <>
      <div className="DetailBasicInfo__info--item DetailBasicInfo__info--github">
        <LanguageConsumer element="h4" path={`${baseLangPath}.github`}>
          {({ text, style }) => (
            <>
              {text}
              {"  "}
              <TecIcon
                {...gitHubTec}
                iconProps={{ width: 13, height: 13 }}
                /* contStyle={style} */
                className="DetailBasicInfo__info--githubIcon"
              />
            </>
          )}
        </LanguageConsumer>
      </div>
      {!!data.private ? (
        <LanguageConsumer
          element="span"
          basePath={`${baseLangPath}.Github`}
          path="private"
        />
      ) : (
        <LanguageConsumer
          element="a"
          href={data.link}
          target="_blank"
          basePath={`${baseLangPath}.Github`}
          path="visitRepo"
        />
      )}
    </>
  );
};

const ListItem = ({ name, value }) => {
  return (
    <>
      <LanguageConsumer element="h4" basePath={baseLangPath} path={name} />
      {value}
    </>
  );
};

const DetailInfoCard = ({ data, animationCompleted, animationRef }) => {
  const {
    github,
    time: { from, to },
    type,
    mobileFirst,
  } = data;
  return (
    <div className="DetailBasicInfo__info" ref={animationRef}>
      <LanguageConsumer
        className="DetailBasicInfo__info--title"
        path={`${baseLangPath}.title`}
        element="h3"
      />
      <FadeIn
        wrapperTag="ul"
        childTag="li"
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
      </FadeIn>
    </div>
  );
};

export default DetailInfoCard;
