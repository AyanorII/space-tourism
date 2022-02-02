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
import Destination from "./pages/Destination/Destination";

// FIXME: Redirect to home without reloading the page.
function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
        </Routes>
      </Router>
    </Theme>
  );
}

export default App;
