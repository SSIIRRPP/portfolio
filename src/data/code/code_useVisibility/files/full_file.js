import { useRef } from "react";
import { useState, useEffect, useCallback } from "react";
const { throttle } = require("lodash");
const useVisibility = ({
  active = true, // prop to control when IntersectionObserver should be activated
  retrieveEntry = false, // whether IntersectionObserver event's entry should be returned
  fatherRef,
  childRef,
  options: opts = {}, // IntersectionObserver's options object
  stopOnDetection = false, // disables IntersectionObserver at first visibility
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
      if (retrieveEntry) {
        setEntry(entries[0]);
      }
      if (entries[0].intersectionRatio > (opts.ratio ? opts.ratio : 0.05)) {
        if (!isVisible) {
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
    // checks if element is in the top half of its container,
    // or if its in the bottom half
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
    }
  }, [child, parent, isVisible]);

  useEffect(() => {
    // sets which child's ref is going to be used,
    // the internal one or the one provided through params
    if (childRef?.current) {
      setChild(childRef.current);
    } else if (_childRef?.current) {
      setChild(_childRef.current);
    } else {
      setChild(null);
    }
  }, [childRef]);

  useEffect(() => {
    // sets which father's ref is going to be used,
    // the internal one or browser's viewport
    if (fatherRef?.current) {
      setParent(fatherRef.current);
    } else {
      setParent(null);
    }
  }, [fatherRef]);

  useEffect(() => {
    // makes the first top or bottom visibility check,
    // and sets the event listener on scroll event
    handleScroll();
    if (parent && active) {
      const f = throttle(handleScroll, 300);
      parent?.addEventListener("scroll", f);
      return () => parent?.removeEventListener("scroll", f);
    }
  }, [parent, active, handleScroll]);

  useEffect(() => {
    // sets the IntersectionObserver to check child's visibility
    if (active && child) {
      const options = {
        // uses father's ref if its provided, or browsers viewport if not provided
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
    // disables IntersectionObserver at first visibility
    // detection if "stopOnDetection" prop is true
    if (isVisible && stopOnDetection) {
      observerRef.current?.disconnect();
      observerRef.current = null;
    }
  }, [isVisible, stopOnDetection]);

  return {
    isVisible,
    entry,
    isInTopHalf,
    // returns internal child ref to set in the component to observe if none is provided in params
    ref: childRef?.current ? undefined : _childRef,
  };
};

export default useVisibility;
