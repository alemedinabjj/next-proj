import { Header } from "@components/Header/Header";
import { useTheme } from "@hooks/ThemeContext";
import { Footer } from "@components/Footer";

import Initial from "./home";

export default function Home() {
  const { theme } = useTheme();
  return (
    <>
      <main
        className={`w-full min-h-screen bg-bgdark dark:bg-white`}
      >
        <Header />
        <Initial />
        <Footer />
      </main>
    </>
  );
}
