import { useCallback, useEffect, useState } from "react";
import throttle from "lodash.throttle";
import { useRef } from "react";
import { useMemo } from "react";

const useIsScrolling = ({ elementId, initDelay } = {}) => {
  const tmRef = useRef(null);
  const [scrolling, setScrolling] = useState(false);

  const scrollScript = useMemo(
    () =>
      throttle(() => {
        clearTimeout(tmRef.current);
        setScrolling(true);
        tmRef.current = setTimeout(() => {
          setScrolling(false);
        }, 400);
      }, 300),
    []
  );

  const setListener = useCallback(() => {
    let _element = window;
    if (elementId) {
      _element = document.getElementById(elementId);
    }
    _element.addEventListener("scroll", scrollScript);
  }, [elementId, scrollScript]);

  const removeListener = useCallback(() => {
    let _element = window;
    if (elementId) {
      _element = document.getElementById(elementId);
    }
    _element.removeEventListener("scroll", scrollScript);
  }, [elementId, scrollScript]);

  useEffect(() => {
    if (initDelay) {
      setTimeout(setListener, initDelay);
    } else {
      setListener();
    }
    return removeListener;
  }, [initDelay, setListener, removeListener]);

  return { scrolling };
};

export default useIsScrolling;
