import { useCallback } from "react";
import { MainProvider } from "../contexts/MainContext";
import useIsScrolling from "../hooks/useIsScrolling";

const Layout = ({ mainRef, children }) => {
  const { scrolling } = useIsScrolling({
    elementId: "content",
    initDelay: 1000,
  });

  const scrollToTop = useCallback(() => {
    document
      .getElementById("content")
      .scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <MainProvider value={{ mainRef, scrollToTop, isScrolling: scrolling }}>
      {children}
    </MainProvider>
  );
};

export default Layout;
