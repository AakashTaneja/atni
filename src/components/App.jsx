import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Capsule from "./Capsule";


function App() {


    return (
        <Router>
            
            <Navbar />
            <Routes>
            <Route path="/" element={Capsule()}></Route>
            <Route path="/about" element={<h1>about</h1>}></Route>
               
            
            </Routes>
            
                
           
               

           
        </Router>
    );


}

export default App;