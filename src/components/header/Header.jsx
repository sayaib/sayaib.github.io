import React from "react";
import CTA from "./CTA";
import arrow from "../../assets/icon/arrow.png";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-greeting">Hello, I'm</span>
            <h1 className="hero-name">Sayaib Sarkar</h1>
            <h2 className="hero-title">Full Stack Developer</h2>
            <p className="hero-tagline">
              Crafting digital experiences with modern technologies and clean, 
              scalable code. Passionate about creating solutions that make a difference.
            </p>
            <CTA />
          </div>
          <div className="hero-visual">
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
          </div>
        </div>
        <a href="#about" className="scroll__down">
          <img src={arrow} alt="Scroll down arrow" />
          <span>Scroll to explore</span>
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
