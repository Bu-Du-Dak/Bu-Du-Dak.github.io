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
  useAnalytics();
  return (
    <>
      <Head>
      <title>부두닭의 개발기록</title>
        <meta name="title" content="부두닭의 개발기록" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="부두닭의 개발기록" />
        <meta property="og:site_name" content="부두닭의 개발기록" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:description" content="부두닭이 만든 개발 기록용 사이트입니다." />
        <meta property="og:url" content="https://bu-du-dak.github.io/" />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:image:secure_url" content="/images/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="BuDuDak" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="부두닭이 만든 개발 기록용 사이트입니다." />
        <meta name="robots" content="ALL" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="${process.env.NEXT_PUBLIC_BUCKET_PATH}/logo.png" />
        <meta name="twitter:site" content="@TwitterHandle" />
        <meta name="twitter:domain" content="bu-du-dak.github.io" />
        <meta name="twitter:url" content="https://bu-du-dak.github.io/" />
        <meta name="twitter:title" content="부두닭의 개발기록" />
        <meta name="twitter:description" content="부두닭이 만든 개발 기록용 사이트입니다." />
        <meta name="keywords" content="부두닭,bududak,bu-du-dak,타입스크립트,typescript,자바스크립트,javascript,리액트,react,넥스트,next,파이썬,python,장고,django,백엔드,프론트엔드" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>

      </Head>
      <Global styles={GlobalCss} />
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
