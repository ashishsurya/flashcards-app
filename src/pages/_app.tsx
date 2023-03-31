import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RecoilRoot } from 'recoil';
import './globals.css';

var theme = createTheme({
  typography: {
    fontFamily: "'Rubik', sans-serif;",
  },
});

theme = responsiveFontSizes(theme);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  useEffect(() => {
    const { data: authListener } = supabaseClient.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_IN') {
          router.replace('/');
        } else if (event === 'SIGNED_OUT') {
          router.replace('/login');
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router, supabaseClient.auth]);

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.intialSession}
    >
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </SessionContextProvider>
  );
}
