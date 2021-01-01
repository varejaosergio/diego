import React from "react";
import Logo from "../../assets/vilela.png";
import Instagram from "../../assets/icone-instagram.png";
import Facebook from "../../assets/icone-facebook.png";
import Whatsapp from "../../assets/icone-whatsapp.png";
import Youtube from "../../assets/icone-youtube.png";

import { FooterBase } from "./styles";

function Footer() {
  return (
    <FooterBase>
      <p className="Icones">
        <a href="https://www.instagram.com/diegorvilela/">
          <img
            className="Icone"
            src={Instagram}
            alt="Diego Vilela Instagram"
          />
        </a>

        <a href="https://www.facebook.com/diegorvilela">
          <img 
            className="Icone" 
            src={Facebook} 
            alt="Diego Vilela Facebook" 
          />
        </a>

        <a href="+1 (858) 231-5413">
          <img 
            className="Icone" 
            src={Whatsapp} 
            alt="Whatsapp Contact" 
          />
        </a>

        <a href="https://www.youtube.com/channel/UCVwpTlGrZAZrL0vHwsrsbAw">
          <img 
            className="Icone" 
            src={Youtube} 
            alt="Youtube Channel" 
          />
        </a>
      </p>
      <a href="https://www.instagram.com/diegorvilela/">
        <img className="logoFooter" src={Logo} alt="Diego Vilela Logo" />
      </a>
      <p className= "copy">
        <a href="https://www.linkedin.com/in/sergio-s-varejao-frontend/">
          Created by Sérgio Varejão
        </a>{"   "}
        <br />
        <br />
        Copyright Diego Vilela
      </p>      
    </FooterBase>
  );
}

export default Footer;
