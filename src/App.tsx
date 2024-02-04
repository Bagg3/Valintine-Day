import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import YesPage from "./Pages/YesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/yes" element={<YesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
