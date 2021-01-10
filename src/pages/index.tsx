import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Giphy Explorer</title>
      </Head>
      <div className="text-center pt-10">
        <h1 className="mb-14 text-6xl font-extrabold text-gray-900">
          Giphy Explorer
        </h1>
      </div>
    </>
  );
}
