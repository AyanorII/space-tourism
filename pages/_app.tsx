import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Background from "../components/Background";
import Header from "../components/Header";
import GlobalStyles from "../styles/GlobalStyles";
import "../styles/style.css";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Background />
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
