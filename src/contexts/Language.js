import { createContext } from "react";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useQueryParams from "../hooks/useQueryParams";
import spa from "../languages/spa";

export const LanguageContext = createContext();
export const LanguageContextConsumer = LanguageContext.Consumer;

const Language = ({ children }) => {
  const [lang, _setLang] = useState("spa");
  const [text, setText] = useState(spa);
  const queryParams = useQueryParams();
  const navigate = useNavigate();

  const setLang = useCallback((l) => {
    _setLang(l);
    localStorage.setItem("lang", l);
  }, []);

  const changeLanguage = useCallback(
    async (lan) => {
      const l = lan;
      setLang(lan);
      const f = () =>
        new Promise((resolve, reject) => {
          switch (lan) {
            case "en": {
              import("../languages/en")
                .then((r) => {
                  resolve(r.default);
                })
                .catch((e) => reject(e));
              break;
            }
            case "spa":
            default: {
              resolve(spa);
            }
          }
        });
      f()
        .then((res) => {
          setText(res);
        })
        .catch((e) => {
          setLang(l);
          setText(spa);
          console.error("Error: ", e);
        });
    },
    [setLang]
  );

  useEffect(() => {
    const qL = queryParams.get("lang");
    const l = localStorage.getItem("lang");
    if (qL && (lang !== qL || (l && l !== lang))) {
      changeLanguage(qL);
    } else {
      if (!qL && l && lang !== l) {
        changeLanguage(l);
      }
    }
    if (qL) {
      navigate("/", { replace: true });
    }
  }, [changeLanguage, lang, queryParams, navigate]);

  useEffect(() => {
    const titleElm = document.getElementsByTagName("title")[0];
    const htmlElement = document.documentElement;

    if (titleElm) {
      titleElm.innerHTML = text.Head.Title;
    }
    if (htmlElement) {
      htmlElement.lang = text.isoCode;
    }
  }, [text]);

  const extractTextWithPath = useCallback(
    (path) =>
      path
        .split(".")
        .reduce((textObj, stringPath) => textObj[stringPath], text),
    [text]
  );

  return (
    <LanguageContext.Provider
      value={{ text, lang, changeLanguage, extractTextWithPath }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default Language;
