import { Banner } from "@components/Banner";
import { Card } from "@components/Card";
import Head from 'next/head'

const Initial = () => {
  return (
    <main className="w-full min-h-screen px-20">
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex gap-6 mt-10 flex-wrap items-center justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};

export default Initial;
