import 'highlight.js/styles/panda-syntax-dark.css';
import 'react-image-lightbox/style.css';
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
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/manifest.json"/>

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
