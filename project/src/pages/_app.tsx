import type { AppProps } from "next/app";
import { Header, Hero, Footer } from "../components";
import "../../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Hero />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
