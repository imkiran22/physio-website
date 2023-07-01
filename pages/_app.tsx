import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import "./styles/globals.scss";
import { Quicksand } from "next/font/google";

const quickSand = Quicksand({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <style jsx global>{`
        html {
          font-family: ${quickSand.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
