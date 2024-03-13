import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";
import GlobalHeader from "../components/GlobalHeader"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PEEPS</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <GlobalHeader />
      <div className="pt-header bg-background">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
