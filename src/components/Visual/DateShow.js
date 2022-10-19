import { useMemo } from "react";
import LanguageConsumer from "../Language/LanguageConsumer";

const generateStringDate = (d) =>
  `${d.getUTCDate()}/${d.getUTCMonth() + 1}/${d.getUTCFullYear()}`;

const datesAreEqual = (d1, d2) => {
  return generateStringDate(d1) === generateStringDate(d2);
};

const generateStringMonth = (d) =>
  `${d.getUTCMonth() + 1}/${d.getUTCFullYear()}`;

const DateShow = (props) => {
  const { date = new Date(), showDay = false } = props;

  const toShow = useMemo(() => {
    if (datesAreEqual(date, new Date())) {
      return (
        <LanguageConsumer
          path="Components.Visual.DateShow.today"
          element="span"
        />
      );
    }
    return (
      <span>
        {showDay ? generateStringDate(date) : generateStringMonth(date)}
      </span>
    );
  }, [date, showDay]);

  return <div className="DateShow">{toShow}</div>;
};

export default DateShow;
