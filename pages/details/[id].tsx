import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";

const Pixel = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Pixel | {id}</title>
      </Head>
      <Header />
      <section className="min-h-screen">
        <h1>Pixel</h1>
        <p>{id}</p>

        <button
          aria-label="Go back"
          className="bg-primary dark:bg-darkprimary text-white px-3 py-2 rounded"
          onClick={() => router.back()}
        >
          Voltar
        </button>
      </section>
      <Footer />
    </>
  );
};

export default Pixel;
