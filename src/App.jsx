import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SikkimMonasteriesHome from "./SikkimMonasteriesHome";
import DonatePage from "./DonatePage";
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SikkimMonasteriesHome />} />
        <Route path="/donate" element={<DonatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
