import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    main: "#D0D6F9",
    dark: "#0B0D17",
    light: "#FFF",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
