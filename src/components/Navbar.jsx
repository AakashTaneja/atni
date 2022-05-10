import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light nav-margin m-2">
        
           <Link to="/" className="heading-main">
           <h1>and the news is</h1>
           </Link> 
       
    </nav>
    );
}

export default Navbar;