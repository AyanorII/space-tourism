import { createGlobalStyle } from "styled-components";
import { DARK_COLOR, LIGHT_COLOR } from "./theme";

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    overflow-x: hidden;
  }

  body {
    font-family: 'Barlow Condensed', sans-serif;
    color: ${LIGHT_COLOR};
    background-color: ${DARK_COLOR};
    min-height: 100vh;
  }

  #__next {
    min-height: 100vh;

    @media (min-width: 1200px) {
      max-height: 100vh;
      overflow: hidden;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Bellefair', cursive;
    font-weight: 400;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    outline: none;
  }

  a {
    text-decoration: none;
    color: ${LIGHT_COLOR};
  }
`;

export default GlobalStyles;
