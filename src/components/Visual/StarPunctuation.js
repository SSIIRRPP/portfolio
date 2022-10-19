import StarRatings from "react-star-ratings";
import useTheme from "../../hooks/useTheme";

const StarPunctuation = ({ punctuation }) => {
  const { color, color3 } = useTheme();
  return (
    <StarRatings
      rating={punctuation}
      starDimension="20px"
      starSpacing="2px"
      starEmptyColor={color}
      starRatedColor={color3}
    />
  );
};

export default StarPunctuation;
