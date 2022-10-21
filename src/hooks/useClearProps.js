import { useMemo } from "react";

const useClearProps = (props = {}, clearProps = []) => {
  const newProps = useMemo(() => {
    const p = { ...props };
    clearProps.forEach((propName) => {
      delete p[propName];
    });
    return p;
  }, [props, clearProps]);
  return newProps;
};

export default useClearProps;
