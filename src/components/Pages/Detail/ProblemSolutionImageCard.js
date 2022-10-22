import { useCallback, useState } from "react";
import MainButton from "../../Buttons/MainButton";
import LanguageConsumer from "../../Language/LanguageConsumer";
import ImageCard from "../../Visual/ImageCard";
import "./styles/ProblemSolutionImageCard.scss";

const baseLangPath = "Pages.Detail.ProblemSolutionImageCard";

const imagesStyle = {
  minWidth: "300px",
  minHeight: "300px",
};

const imageContainerStyle = {
  minWidth: "300px",
  minHeight: "300px",
  display: "inline-block",
};

const imageCardStyles = {
  image: imagesStyle,
  container: imageContainerStyle,
};

const ProblemSolutionImageCard = ({
  problem,
  solution,
  titleElement = "h3",
}) => {
  const [showSolution, setShowSolution] = useState(false);

  const makeCard = useCallback((item) => {
    const itemStyle = item.style || {};
    const imageProps = item.imageProps || {};
    return (
      <ImageCard
        {...imageProps}
        styles={{ ...itemStyle, ...imageCardStyles }}
        className={item.className ? item.className : undefined}
        src={item.src}
        alt={item.alt}
        text={item.text}
        withModal={item.withModal}
      />
    );
  }, []);

  return (
    <div className="ProblemSolutionImageCard">
      <div className="ProblemSolutionImageCard__header">
        <LanguageConsumer
          className="ProblemSolutionImageCard__header--title"
          element={titleElement}
          basePath={baseLangPath}
          path="header.title"
        />
      </div>
      <div className="ProblemSolutionImageCard__body--container">
        <div className="ProblemSolutionImageCard__body">
          <div
            className={`ProblemSolutionImageCard__body--item ProblemSolutionImageCard__problem ${
              showSolution ? "hide" : "show"
            }`}
          >
            {makeCard(problem)}
          </div>
          <div
            className={`ProblemSolutionImageCard__body--item ProblemSolutionImageCard__solution ${
              showSolution ? "show" : "hide"
            }`}
          >
            {makeCard(solution)}
          </div>
        </div>
      </div>
      <div className="ProblemSolutionImageCard__footer">
        <LanguageConsumer
          noElement
          basePath={baseLangPath}
          path={`footer.button.${showSolution ? "problem" : "solution"}`}
        >
          {({ text, style }) => (
            <MainButton
              onClick={() => setShowSolution(!showSolution)}
              type="dark"
              style={style}
            >
              {text}
            </MainButton>
          )}
        </LanguageConsumer>
      </div>
    </div>
  );
};

export default ProblemSolutionImageCard;
