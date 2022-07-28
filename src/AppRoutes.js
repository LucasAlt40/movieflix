import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Details from "./pages/Details";
import Home from "./pages/Home";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:typeMedia" element={<Home />} />
        <Route path="/details/:movieName/:id/:typeMedia" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
