// Dependencies:
import GlobalStyle from "./styles/globalStyles";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Components:
import Home from "./pages/Home/Home";
import Theme from "./styles/Theme";

function App() {
  return (
    <Theme>
      <GlobalStyle />
        <Home />
    </Theme>
  );
}

export default App;
