import 'highlight.js/styles/panda-syntax-dark.css';
import 'react-image-lightbox/style.css';
// toast editor
// import 'prismjs/themes/prism.css'; 
// import '@toast-ui/editor/dist/toastui-editor.css';
// import '@toast-ui/editor/dist/theme/toastui-editor-dark.css'
// import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
// code highlight
import { Global } from '@emotion/react';
import { GlobalCss } from '../src/commons/globalStyles';
import Layout from '../src/components/commons/layout/Layout.index';
import { ThemeProvider } from 'next-themes';
import useAnalytics from '../src/hooks/useAnlaytics';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  useAnalytics()
  return (
    <>
    <Head>
      <link rel="preload" href="/path_to_important_resource" as="script" />
      <link rel="prefetch" href="/path_to_future_resource" />
      <title>부두닭의 개발기록</title>
      <meta name="title" content="부두닭의 개발기록" />
      <meta
          property="og:title"
          content="부두닭의 개발기록"
      />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://https://bu-du-dak.github.io/" />
      <meta
        name="description"
        content="부두닭이 만든 개발 기록용 사이트입니다."
      />
      <meta
        property="og:description"
        content="부두닭이 만든 개발 기록용 사이트입니다."
      />
      <meta name="robots" content="ALL" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@TwitterHandle" />
      <meta name="twitter:title" content="부두닭의 개발기록" />
      <meta name="twitter:description" content="부두닭이 만든 개발 기록용 사이트입니다." />
      <meta
          name="keywords"
          content="부두닭,bududak,타입스크립트,typescript,자바스크립트,javascript,리액트,react,넥스트,next,파이썬,python,장고,django,백엔드,프론트엔드"
        />
    </Head>
      <Global styles={GlobalCss} />
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
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
