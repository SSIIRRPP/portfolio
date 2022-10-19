import { useContext } from "react";
import { LanguageContext } from "../contexts/Language";

const useLanguage = () => {
  const { text } = useContext(LanguageContext);

  return text;
};

export default useLanguage;
