import { createGlobalStyle } from "styled-components";
import { DARK_COLOR, LIGHT_COLOR } from "./theme";

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Barlow Condensed', sans-serif;
    color: ${LIGHT_COLOR};
    background-color: ${DARK_COLOR};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Bellefair', cursive;
  }
`;

export default GlobalStyles;
