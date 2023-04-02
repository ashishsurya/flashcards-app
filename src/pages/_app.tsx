/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";
import { api } from "~/utils/api";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps} appearance={{ baseTheme: dark }}>
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
    </ClerkProvider>
  );
}

export default api.withTRPC(App);
