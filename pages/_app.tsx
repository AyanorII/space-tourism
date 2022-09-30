import type { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";
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
      <MainContainer>
        <Header />
        <Component {...pageProps} />
      </MainContainer>
    </ThemeProvider>
  );
}

export default MyApp;

const MainContainer = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  /* gap: 10%; */
`;
