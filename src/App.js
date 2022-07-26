import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Details from "./pages/Details";
import Home from "./pages/Home";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:typeMedia" element={<Home />} />
        <Route exact path="/details/:movieName/:id/:typeMedia" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
