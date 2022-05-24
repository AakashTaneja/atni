import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Capsule from "./Capsule";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";
import Margin from "./Margin";


function App() {


    return (
        <div className="master-div"> 
            <Router>
            
            <Navbar2 />
            
            <Routes>
            <Route path="/" element={Capsule()}></Route>
            <Route path="/about" element={About()}></Route>
            <Route path="/contact" element={Contact()}></Route>
            </Routes>
            <Footer />
        </Router>
        </div>
        
       
    );


}

export default App;