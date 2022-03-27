import "./../styles/style.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Fakesite</title>
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <Component {...pageProps} />
      <style jsx>{``}</style>
    </>
  );
}

export default MyApp;
