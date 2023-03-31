/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from "recoil";
import "./globals.css";

var theme = createTheme({
  typography: {
    fontFamily: "'Rubik', sans-serif;",
  },
});

theme = responsiveFontSizes(theme);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}
