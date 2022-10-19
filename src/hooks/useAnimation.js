import { useState, useEffect, useCallback, useMemo } from "react";
const useAnimation = ({
  condition = true,
  update,
  animations = [""] || "",
  time = 1000,
  repeat = 0,
  element,
  initTimeout = 0,
  callback = null,
  keepActive = false,
}) => {
  const [initialized, setInitialized] = useState(false);
  const [active, setActive] = useState(false); // controls the css animation status
  const [finished, setFinished] = useState(false);

  const conditionAchieved = useMemo(() => Boolean(condition), [condition]);

  const addClasses = useCallback(
    (elm) => {
      if (elm && elm.classList) {
        if (Array.isArray(animations)) {
          elm.classList.add(...animations);
        } else if (typeof animations === "string") {
          elm.classList.add(animations);
        }
      }
    },
    [animations]
  );

  const removeClasses = useCallback(
    (elm) => {
      if (elm && elm.classList) {
        if (Array.isArray(animations)) {
          elm.classList.remove(...animations);
        } else if (typeof animations === "string") {
          elm.classList.remove(animations);
        }
      }
    },
    [animations]
  );

  const addStyles = useCallback(
    (elm) => {
      if (elm && elm.style) {
        elm.style["animation-duration"] = `${time}ms`;
        if (repeat) {
          elm.style["animation-iteration-count"] = repeat;
        }
      }
    },
    [time, repeat]
  );

  const removeStyles = useCallback((elm) => {
    if (elm && elm.style) {
      elm.style["animation-duration"] = undefined;
      elm.style["animation-iteration-count"] = undefined;
    }
  }, []);

  const action = useMemo(() => {
    let cb = () => setFinished(true);
    if (callback) {
      cb = () => {
        setFinished(true);
        callback();
      };
    }
    return cb;
  }, [callback]);

  useEffect(() => {
    if (!!element && !!conditionAchieved) {
      setActive(true);
      if (repeat > 0) {
        let tm = setTimeout(() => {
          setActive(false);
          action && action();
        }, time * repeat);
        return () => clearTimeout(tm);
      }
    } else {
      setActive(false);
    }
  }, [element, conditionAchieved, time, repeat, update, action]);

  useEffect(() => {
    if (active && initialized) {
      setTimeout(() => setFinished(true), time * (repeat || 1));
    } else {
      setFinished(false);
    }
  }, [active, initialized, time, repeat]);

  useEffect(() => {
    if (initialized && active) {
      if (typeof element === "object") {
        addClasses(element.current);
        addStyles(element.current);
      } else {
        addClasses(element);
        addStyles(element);
      }
    } else {
      if (!keepActive) {
        if (typeof element === "object") {
          removeClasses(element.current);
          removeStyles(element.current);
        } else {
          removeClasses(element);
          removeStyles(element);
        }
      }
    }
  }, [
    element,
    active,
    addClasses,
    addStyles,
    removeClasses,
    removeStyles,
    keepActive,
    initialized,
  ]);

  useEffect(() => {
    if (conditionAchieved) {
      // waits for condition to be met for initialization
      let tm = setTimeout(() => setInitialized(true), initTimeout);
      return () => clearTimeout(tm);
    }
  }, [initTimeout, conditionAchieved]);

  return { element, isActive: active, finished };
};

export default useAnimation;
