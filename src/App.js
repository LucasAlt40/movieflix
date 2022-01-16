import React from "react";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/details/:movie-name/:id" />
            </Routes>
        </Router>
    );
}

export default App;
