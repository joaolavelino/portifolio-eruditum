import { useState } from "react";

//CREATE A NEW THEME HOOK
export const useDarkmode = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return [theme, toggleTheme];
};
