import React from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


function Navbar(){
    return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light nav-margin m-2">


        
           <Link to="/" className="heading-main">
           <img class="navbar-brand" src="atni_nb.png" alt="and the news is..." height="100" width="200"></img>
           </Link>
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavMenu" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
           <div class="collapse navbar-collapse" id="navbarNavMenu">

              <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                       <a class="nav-link" href="/about">About</a>
                  </li>
                  <li class="nav-item">
                       <a class="nav-link" href="/contact">Contact</a>
                  </li>
              </ul>
          </div> 
       
    </nav>
    );
}

export default Navbar;