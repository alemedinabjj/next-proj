import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import Head from "next/head";

const Pixel = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>Pixel {id}</title>
      </Head>
      <h1>Pixel</h1>
      <p>{id}</p>
    </div>
  );
};

export default Pixel;


