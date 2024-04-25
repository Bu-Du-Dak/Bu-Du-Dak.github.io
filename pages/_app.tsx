import 'highlight.js/styles/panda-syntax-dark.css';
// toast editor
import 'prismjs/themes/prism.css'; 
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css'
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
// code highlight
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
