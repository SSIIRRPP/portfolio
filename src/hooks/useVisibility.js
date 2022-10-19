import { useRef } from "react";
import { useState, useEffect, useCallback } from "react";
const { throttle } = require("lodash");
const useVisibility = ({
  active = true,
  retrieveEntry = false,
  fatherRef,
  childRef,
  options: opts = {},
  stopOnDetection = false,
} = {}) => {
  const _childRef = useRef(null);
  const observerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [child, setChild] = useState(null);
  const [parent, setParent] = useState(null);
  const [entry, setEntry] = useState({});
  const [isInTopHalf, setIsInTopHalf] = useState(false);

  const handleVisibility = useCallback(
    (entries) => {
      if (entries[0].intersectionRatio > (opts.ratio ? opts.ratio : 0.05)) {
        if (!isVisible) {
          if (retrieveEntry) {
            setEntry(entries[0]);
          }
          setIsVisible(true);
        }
      } else {
        if (isVisible && !stopOnDetection) {
          setIsVisible(false);
          setEntry(null);
        }
      }
    },
    [opts.ratio, retrieveEntry, isVisible, stopOnDetection]
  );

  const handleScroll = useCallback(() => {
    if (child && parent && isVisible) {
      const a = child.getBoundingClientRect();
      const { top } = a;
      const b = parent?.getBoundingClientRect();
      const { bottom: fB, top: fT } = b;
      if (top - fT > (fB - fT) / 2) {
        setIsInTopHalf(false);
      } else {
        setIsInTopHalf(true);
      }
    } else if (isVisible) {
      /* console.log("No childRef"); */
    }
  }, [child, parent, isVisible]);

  useEffect(() => {
    if (childRef?.current) {
      setChild(childRef.current);
    } else if (_childRef?.current) {
      setChild(_childRef.current);
    } else {
      setChild(null);
    }
  }, [childRef]);

  useEffect(() => {
    if (fatherRef?.current) {
      setParent(fatherRef.current);
    } else {
      setParent(null);
    }
  }, [fatherRef]);

  useEffect(() => {
    handleScroll();
    if (parent && active) {
      const e = parent;
      const f = throttle(handleScroll, 300);
      e?.addEventListener("scroll", f);
      return () => e?.removeEventListener("scroll", f);
    }
  }, [parent, active, handleScroll]);

  useEffect(() => {
    if (active && child) {
      const options = {
        root: parent ? parent : null,
        rootMargin: opts.rootMargin ? opts.rootMargin : "0px 0px 0px",
        threshold: opts.threshold ? opts.threshold : [0.95, 0.05],
      };
      const observer = new IntersectionObserver(handleVisibility, options);

      observerRef.current = observer;

      observer.observe(child);

      return () => observer.disconnect();
    }
  }, [parent, child, opts, active, handleVisibility]);

  useEffect(() => {
    if (isVisible && stopOnDetection) {
      observerRef.current?.disconnect();
      observerRef.current = null;
    }
  }, [isVisible, stopOnDetection]);

  return {
    isVisible,
    entry,
    isInTopHalf,
    ref: childRef?.current ? undefined : _childRef,
  };
};

export default useVisibility;
