import 'highlight.js/styles/panda-syntax-dark.css';
import { Global } from '@emotion/react';
import { GlobalCss } from '../src/commons/globalStyles';
import Layout from '../src/components/commons/layout/Layout.index';
import { ThemeProvider } from 'next-themes';
import useAnalytics from '../src/hooks/useAnlaytics';


function MyApp({ Component, pageProps }) {
  useAnalytics()
  return (
    <>
      <Global styles={GlobalCss} />
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
