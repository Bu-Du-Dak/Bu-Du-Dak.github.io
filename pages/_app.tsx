import { Global } from "@emotion/react";
import { GlobalCss } from "../src/commons/globalStyles";
import Layout from "../src/components/commons/layout/Layout.index";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={GlobalCss} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
