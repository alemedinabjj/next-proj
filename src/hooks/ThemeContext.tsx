import React, { createContext, useState, useEffect , useContext} from "react";

const ThemeContext = createContext({} as any);


export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(typeof window !== "undefined" && localStorage.getItem("theme") !== 'dark' ? 'ligth' : 'dark')
  useEffect(() => {
    const root = window.document.documentElement

    const removeOldTheme = theme === "dark" ? "light" : "dark"
    root.classList.remove(removeOldTheme)
    root.classList.add(theme)

    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  const { theme, toggleTheme } = context;
  return { theme, toggleTheme };
};