import timediff from "timediff";
import technologies from "../../../data/technologies";
import LanguageConsumer from "../../Language/LanguageConsumer";
import TechStack from "../../Visual/TechStack";
import "./styles/MainInfoCard.scss";

const baseLangPath = "Pages.Main.Body.MainInfoCard";

const calculateAge = (birthdate) => {
  const todaysDateMS = new Date();
  return timediff(birthdate, todaysDateMS).years;
};

const MainInfoCard = ({ info, animationRef }) => {
  return (
    <div className="MainInfoCard" ref={animationRef}>
      <div className="MainInfoCard__container">
        <div className="MainInfoCard__info">
          <LanguageConsumer element="h3" basePath={baseLangPath} path="title" />
          <table className="MainInfoCard__about">
            <tbody>
              <LanguageConsumer
                element="h4"
                basePath={baseLangPath}
                path="list.age"
              >
                {({ text }) => (
                  <tr>
                    <td>{text}</td>
                    <td>
                      <strong>{calculateAge(info.birthdate)}</strong>
                    </td>
                  </tr>
                )}
              </LanguageConsumer>
              <LanguageConsumer
                element="h4"
                basePath={baseLangPath}
                path="list.description"
              >
                {({ text }) => (
                  <tr>
                    <td>{text}</td>
                    <LanguageConsumer element="td" text={info.about} />
                  </tr>
                )}
              </LanguageConsumer>
              <LanguageConsumer
                element="h4"
                basePath={baseLangPath}
                path={"list.residence"}
              >
                {({ text }) => (
                  <tr>
                    <td>{text}</td>
                    <td>
                      <LanguageConsumer element="strong" text={info.country} />,
                      <span>{info.state}</span>,<span>{info.city}</span>
                    </td>
                  </tr>
                )}
              </LanguageConsumer>
            </tbody>
          </table>
        </div>
        <TechStack
          stack={technologies}
          titlePath={`${baseLangPath}.stack.title`}
          showLevel
        />
      </div>
    </div>
  );
};

export default MainInfoCard;
