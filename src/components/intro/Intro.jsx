import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../assets/me.jpg";

// import ME from '../../assets/Sayaib Sarkar image.jpg';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Sayaib Sarkar" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            I am a passionate MERN Stack and Flutter Developer with 3 years of
            experience in building dynamic web and mobile applications.
            <br /> expertise lies in crafting scalable web solutions using
            MongoDB, Express.js, React.js, and Node.js, alongside creating
            cross-platform mobile apps with Flutter. I specialize in developing
            intuitive user interfaces, integrating APIs, and managing both SQL
            and NoSQL databases. With a strong focus on performance and user
            experience, I thrive on solving complex challenges through
            innovative solutions. My goal is to deliver high-quality
            applications that drive impact and exceed expectations
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
