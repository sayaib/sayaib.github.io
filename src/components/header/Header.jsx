import React from "react";
import CTA from "./CTA";
import arrow from "../../assets/icon/arrow.png";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sayaib Sarkar</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          <img src={arrow} alt="" srcset="" />
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
