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
import CrewPage from "./pages/Crew/CrewPage";
import TechnologyPage from "./pages/Technology/TechnologyPage";

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/space-tourism" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<CrewPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
        </Routes>
      </Router>
    </Theme>
  );
}

export default App;
