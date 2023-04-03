/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Space_Grotesk } from "next/font/google";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";
import { api } from "~/utils/api";
import "./globals.css";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
        <Head>
          <title>Flashcards</title>
          <meta name="description" content="💭" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <RecoilRoot>
          <div className={space_grotesk.className}>
            <Toaster position="bottom-center" />
            <Component {...pageProps} />
          </div>
        </RecoilRoot>
    </SessionProvider>
  );
}

export default api.withTRPC(App);
