import { useMemo } from "react";
import { createContext, useRef } from "react";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import useQueryParams from "../hooks/useQueryParams";
import spa from "../languages/spa";

export const LanguageContext = createContext();
export const LanguageContextConsumer = LanguageContext.Consumer;

const animationDuration = 400; // ms

const Language = ({ children }) => {
  const tmRef = useRef();
  const [selectLanguage, setSelectLanguage] = useState("spa");
  const [controller, setController] = useState({
    visible: true,
    text: spa,
    lang: "spa",
  });
  const queryParams = useQueryParams();
  const navigate = useNavigate();
  const location = useLocation();

  const setLang = useCallback((text, lang) => {
    localStorage.setItem("lang", lang);
    // controlls visibility when text changes
    setSelectLanguage(lang);
    setController((c) => {
      if (c.visible) {
        if (tmRef.current) {
          clearTimeout(tmRef.current);
        }
        tmRef.current = setTimeout(() => {
          setController({ visible: true, text, lang });
          tmRef.current = null;
        }, animationDuration);
        return {
          ...c,
          visible: false,
        };
      } else {
        return { visible: true, text, lang };
      }
    });
    return () => clearTimeout(tmRef.current);
  }, []);

  const changeLanguage = useCallback(
    async (lang) => {
      const f = () =>
        new Promise((resolve, reject) => {
          if (lang === "spa") {
            resolve(spa);
          } else {
            // asyncronously loads languages different from the default one (spa)
            import("../languages/en")
              .then((r) => {
                resolve(r.default);
              })
              .catch((e) => reject(e));
          }
        });
      f()
        .then((res) => {
          setLang(res, lang);
        })
        .catch((e) => {
          setLang(spa, lang);
          console.error("Error: ", e);
        });
    },
    [setLang]
  );

  const queryLang = useMemo(() => queryParams.get("lang"), [queryParams]);

  useEffect(() => {
    const l = localStorage.getItem("lang");
    if (
      queryLang && // checks if queryLanguage exits in query string
      (controller.lang !== queryLang || // checks if its different from the current language
        (l && l !== controller.lang))
      // sets queryLanguage if localStorage lang is different from query
      // language, to prevent loading localStorage lang in next page load
    ) {
      changeLanguage(queryLang);
    } else {
      if (!queryLang && l && controller.lang !== l) {
        // sets language when there is no queryLanguage, and when lcoalStorage lang is different from the current one
        changeLanguage(l);
      }
    }
    if (queryLang) {
      navigate(location.pathname, { replace: true });
    }
  }, [changeLanguage, controller.lang, queryLang, location.pathname, navigate]);

  useEffect(() => {
    const titleElm = document.getElementsByTagName("title")[0];
    const htmlElement = document.documentElement;

    if (titleElm) {
      titleElm.innerHTML = controller.text.Head.Title;
    }
    if (htmlElement) {
      htmlElement.lang = controller.text.isoCode;
    }
  }, [controller.text]);

  const extractTextWithPath = useCallback(
    (path) =>
      path
        .split(".")
        .reduce((textObj, stringPath) => textObj[stringPath], controller.text),
    [controller.text]
  );

  const consumerStyle = useMemo(
    () => ({
      transition: `opacity ${animationDuration}ms ease-in-out`,
      opacity: controller.visible ? "1" : "0",
    }),
    [controller.visible]
  );

  return (
    <LanguageContext.Provider
      value={{
        controller,
        selectLanguage,
        changeLanguage,
        extractTextWithPath,
        consumerStyle,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default Language;
