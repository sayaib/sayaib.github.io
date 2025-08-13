import React from "react";
import "./intro.css";
import { FaAward, FaUsers, FaFolderOpen } from "react-icons/fa";
import { SiReact, SiMongodb, SiFlutter } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { MdWeb } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import ME from "../../assets/me.jpeg";
import CV from "../../assets/sayaib.pdf";

const Intro = () => {
  const achievements = [
    {
      icon: <FaAward />,
      number: "3+",
      label: "Years Experience",
    },
    {
      icon: <FaFolderOpen />,
      number: "15+",
      label: "Projects Completed",
    },
    {
      icon: <BiCodeAlt />,
      number: "10+",
      label: "Technologies",
    },
    {
      icon: <FaUsers />,
      number: "99%",
      label: "Client Satisfaction",
    },
  ];

  const skills = [
    {
      icon: <SiReact />,
      title: "Full-Stack",
      description: "React, Node.js, MongoDB",
    },
    {
      icon: <SiFlutter />,
      title: "Mobile App",
      description: "Flutter, React Native",
    },
    {
      icon: <MdWeb />,
      title: "API Integration",
      description: "RESTful, GraphQL APIs",
    },
    {
      icon: <SiMongodb />,
      title: "Database Management",
      description: "SQL, NoSQL, Cloud DB",
    },
  ];

  return (
    <section id='about' className='about-section'>
      <div className="container about__container">
        <div className="section-header">
          <span className="section-subtitle">Get To Know</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            Passionate full-stack developer crafting exceptional digital experiences 
            through innovative solutions and clean, efficient code.
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-visual">
            <div className="about-image">
              <img src={ME} alt="About me" />
              <div className="image-overlay"></div>
            </div>
            
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-icon">
                    {achievement.icon}
                  </div>
                  <div className="achievement-content">
                     <span className="achievement-number">{achievement.number}</span>
                     <span className="achievement-label">{achievement.label}</span>
                   </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-text">
            <div className="about-intro">
              <h3 className="intro-title">Full Stack Developer & Creative Problem Solver</h3>
              <p className="intro-description">
                I'm a passionate full-stack developer with a keen eye for design and a love for creating 
                seamless digital experiences. With expertise spanning both frontend and backend technologies, 
                I bring ideas to life through clean, efficient code and intuitive user interfaces.
              </p>
              <p className="intro-description">
                My approach combines technical excellence with creative thinking, ensuring every project 
                not only functions flawlessly but also delivers an exceptional user experience.
              </p>
            </div>
            
            <div className="skills-section">
              <h4 className="skills-title">Core Expertise</h4>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-card">
                    <div className="skill-icon">
                      {skill.icon}
                    </div>
                    <div className="skill-content">
                       <h5 className="skill-title">{skill.title}</h5>
                       <p className="skill-description">{skill.description}</p>
                     </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="about-cta">
               <a href="#contact" className="btn btn-primary">
                 <BsArrowRight className="btn-icon" />
                 Let's Work Together
               </a>
               <a href={CV} download className="btn btn-outline">
                 <HiDownload className="btn-icon" />
                 Download CV
               </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
