import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Anime from "./pages/Anime";
import Games from "./pages/Games";
import JRPG from "./pages/JRPG";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/games" element={<Games />} />
          <Route path="/jrpg" element={<JRPG />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;