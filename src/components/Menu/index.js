import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Logo from "../../assets/vilela.png";
import "./Menu.css";
// SSV 12-16-20 import Button from "../Button";
//import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <BrowserRouter>        
        <Link to="/">          
          <img 
          className="Logo" 
          src={Logo} 
          alt="Diego Vilela Logo" 
          />          
        </Link>       
      </BrowserRouter>
    </nav>
  );
}

export default Menu;
