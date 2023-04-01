/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "./globals.css";
import { api } from "~/utils/api";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { dark } from "@clerk/themes";

var theme = createTheme({
  typography: {
    fontFamily: "'Rubik', sans-serif;",
  },
});

theme = responsiveFontSizes(theme);

function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps} appearance={{ baseTheme: dark }}>
      <Head>
        <title>Flashcards</title>
        <meta name="description" content="💭" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Toaster position="bottom-center" />
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </ClerkProvider>
  );
}

export default api.withTRPC(App);
