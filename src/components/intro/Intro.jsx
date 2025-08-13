import "./intro.css";

import { FaAward, FaCode, FaMobile, FaRocket } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import { BiCodeAlt } from "react-icons/bi";
import { MdWeb } from "react-icons/md";
import img from "../../assets/me.jpg";

const Intro = () => {
  const achievements = [
    {
      icon: <FaAward className="about__icon" />,
      title: "Experience",
      subtitle: "3+ Years",
      description: "Professional Development"
    },
    {
      icon: <VscFolderLibrary className="about__icon" />,
      title: "Projects",
      subtitle: "10+ Completed",
      description: "Successful Deliveries"
    },
    {
      icon: <FaCode className="about__icon" />,
      title: "Technologies",
      subtitle: "15+ Mastered",
      description: "Modern Tech Stack"
    },
    {
      icon: <FaRocket className="about__icon" />,
      title: "Performance",
      subtitle: "99% Uptime",
      description: "Reliable Solutions"
    }
  ];

  const skills = [
    { name: "Full-Stack Development", icon: <MdWeb /> },
    { name: "Mobile App Development", icon: <FaMobile /> },
    { name: "API Integration", icon: <BiCodeAlt /> },
    { name: "Database Management", icon: <FaCode /> }
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h5 className="section-subtitle">Get to know</h5>
        <h2 className="section-title">About Me</h2>
        <div className="title-underline"></div>
      </div>
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Sayaib Sarkar" />
            <div className="image-overlay">
              <div className="overlay-content">
                <h4>Sayaib Sarkar</h4>
                <p>Full-Stack Developer</p>
              </div>
            </div>
          </div>
          <div className="about__skills-preview">
            {skills.map((skill, index) => (
              <div key={index} className="skill-badge">
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            {achievements.map((achievement, index) => (
              <article key={index} className="about__card">
                <div className="card-icon">
                  {achievement.icon}
                </div>
                <div className="card-content">
                  <h5>{achievement.title}</h5>
                  <span className="card-number">{achievement.subtitle}</span>
                  <small>{achievement.description}</small>
                </div>
              </article>
            ))}
          </div>
          
          <div className="about__description">
            <p className="intro-text">
              I am a <span className="highlight">passionate MERN Stack and Flutter Developer</span> with 3+ years of
              experience in building dynamic web and mobile applications.
            </p>
            <p>
              My expertise lies in crafting <span className="highlight">scalable web solutions</span> using
              MongoDB, Express.js, React.js, and Node.js, alongside creating
              cross-platform mobile apps with Flutter. I specialize in developing
              intuitive user interfaces, integrating APIs, and managing both SQL
              and NoSQL databases.
            </p>
            <p>
              With a strong focus on <span className="highlight">performance and user experience</span>, I thrive on solving complex challenges through
              innovative solutions. My goal is to deliver high-quality
              applications that drive impact and exceed expectations.
            </p>
          </div>
          
          <div className="about__cta">
            <a href="#contact" className="btn btn-primary">
              <span>Let's Collaborate</span>
              <FaRocket className="btn-icon" />
            </a>
            <a href="#portfolio" className="btn btn-outline">
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
