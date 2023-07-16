import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import "./styles/globals.scss";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
