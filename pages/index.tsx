import { Header } from "@components/Header/Header";
import Initial from "./home";
import { useTheme } from "@hooks/ThemeContext";
import { Footer } from "@components/Footer";

export default function Home() {
  const { theme } = useTheme();
  return (
    <>
      <main
        className={`w-full min-h-screen dark:bg-bgdark bg-white`}
      >
        <Header />
        <Initial />
        <Footer />
      </main>
    </>
  );
}
