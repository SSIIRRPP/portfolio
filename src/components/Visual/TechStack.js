import TecIcon from "../Icons/TecIcon";
import FadeIn from "react-fade-in";
import LanguageConsumer from "../Language/LanguageConsumer";
import "./styles/TechStack.scss";

const StackList = ({ stack, title, showLevel }) => {
  return (
    <>
      {title ? (
        <div className="TechStack__stackList--title">
          <h5>{title}:</h5>
        </div>
      ) : null}
      <div className="TechStack__stackList--list">
        {stack.map((icon) => (
          <TecIcon
            {...icon}
            key={`tec-icon-${icon.id}`}
            className="TechStack__stackList--icon"
            showLevel={showLevel}
          />
        ))}
      </div>
    </>
  );
};

const TechStack = ({
  stack,
  animationRef,
  className,
  animationCompleted: _animCompleted,
  titlePath = "Components.Visual.TechStack.title",
  showLevel,
}) => {
  return (
    <div
      className={`TechStack${className ? ` ${className}` : ""}`}
      ref={animationRef}
    >
      <div className="TechStack__wrapper">
        <div className="TechStack__title">
          <LanguageConsumer element="h4" path={titlePath} />
        </div>
        <FadeIn
          visible={_animCompleted}
          className="TechStack__body"
          childClassName="TechStack__stackList"
        >
          {Array.isArray(stack) ? (
            <StackList stack={stack} title={null} showLevel={showLevel} />
          ) : (
            [
              <StackList
                key="front-stack-list"
                stack={stack.front}
                title="Frontend"
                showLevel={showLevel}
              />,
              <StackList
                key="back-stack-list"
                stack={stack.back}
                title="Backend"
                showLevel={showLevel}
              />,
            ]
          )}
        </FadeIn>
      </div>
    </div>
  );
};

export default TechStack;
