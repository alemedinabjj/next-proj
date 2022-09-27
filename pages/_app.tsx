import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/GlobalStyle";
import { lightTheme, darkTheme } from "@styles/Themes";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const initialTheme = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedPrefs = window.localStorage.getItem("color-theme");
      if (typeof storedPrefs === "string") {
        return storedPrefs;
      }

      const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
      if (userMedia.matches) {
        return "dark";
      }
    }

    return "light";
  };
  const [theme, setTheme] = useState(initialTheme);

  const themeToggle = () => {
    const currentTheme = theme === "light" ? "dark" : "light";
    setTheme(currentTheme);
    window.localStorage.setItem("color-theme", currentTheme);
  };


  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Component {...pageProps} themeToggle={themeToggle} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;