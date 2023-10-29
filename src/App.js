import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Ganti 'Switch' dengan 'Routes'
import Indonesia from "./component/Indonesia";
import Programming from "./component/Programming";
import SavedNews from "./component/SavedNews";
import Navbar from "./component/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Indonesia />} />
          <Route path="/programming" element={<Programming />} />
          <Route path="/saved" element={<SavedNews />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
