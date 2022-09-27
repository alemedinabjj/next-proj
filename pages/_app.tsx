import type { AppProps } from "next/app";
import { ThemeProvider } from "@hooks/ThemeContext";
import { useTheme } from "@hooks/ThemeContext";
import '../src/styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
