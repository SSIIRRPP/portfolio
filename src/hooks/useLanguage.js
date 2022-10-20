import { useContext } from "react";
import { LanguageContext } from "../contexts/Language";

const useLanguage = () => {
  const {
    controller: { text },
  } = useContext(LanguageContext);

  return text;
};

export default useLanguage;
