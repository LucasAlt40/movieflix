import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Details from "./pages/Details";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details/:movieName/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
