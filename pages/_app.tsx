
import { Global } from '@emotion/react';
import { GlobalCss } from '../src/commons/globalStyles';
import Layout from '../src/components/commons/layout/Layout.index';
import { ThemeProvider } from 'next-themes';
function MyApp({ Component, pageProps }) {
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
