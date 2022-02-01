// Dependencies:
import GlobalStyle from "./styles/globalStyles";
import {
  BrowserRouter as Router,
  Routes,
  Route,
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
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </Router>
    </Theme>
  );
}

export default App;
