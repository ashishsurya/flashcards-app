/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SessionProvider } from "next-auth/react";
import { Space_Grotesk } from "next/font/google";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";
import { api } from "~/utils/api";
import "./globals.css";
import type { AppType } from "next/app";
import type { Session } from "next-auth";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
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
};

export default api.withTRPC(MyApp);
