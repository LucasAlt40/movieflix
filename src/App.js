import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./pages/Home";
import Details from "./pages/Details";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Details/:handle" element={<Details />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
