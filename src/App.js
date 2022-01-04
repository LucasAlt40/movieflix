import React from "react";

import {ChakraProvider} from "@chakra-ui/react";
import "swiper/swiper-bundle.css";
import "swiper/react"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
    return (
        <ChakraProvider>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/:filtro" element={<Home/>}/>
                    <Route path="/Details/:nome/:id" element={<Details/>}/>
                </Routes>
            </Router>
        </ChakraProvider>
    );
}

export default App;
