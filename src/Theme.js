import { useMemo, createContext } from "react";

export const ThemeContext = createContext();

const Theme = ({ children }) => {
  const theme = useMemo(
    () => ({
      color1: "#0d1b2a",
      color2: "#1b263b",
      color3: "#415a77",
      color4: "#778da9",
      color: "#e0e1dd",
      textBackgroundColor: "rgba(0, 0, 0, 0.507)",
    }),
    []
  );

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};

export default Theme;
