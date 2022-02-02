// Dependencies:
import GlobalStyle from "./styles/globalStyles";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
// Components:
import Home from "./pages/Home/Home";
import Theme from "./styles/Theme";
import Header from "./components/Header";

// TODO: Redirect from /home to /
function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </Theme>
  );
}

export default App;
