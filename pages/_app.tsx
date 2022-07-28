import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Header from "../components/Header";
import GlobalStyles from "../styles/GlobalStyles";
import "../styles/style.css";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
