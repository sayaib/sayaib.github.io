import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import IMG1 from "../../assets/Educational Website.jpg";
import IMG2 from "../../assets/reservation-form.png";
import IMG3 from "../../assets/Startup Agency Project.jpg";
import IMG4 from "../../assets/fh-huquq.png";
import IMG5 from "../../assets/Jokes Project.jpg";
import IMG6 from "../../assets/Project4.jpg";
import "./portfolio.css";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Educational Website with React.js",
      img: IMG1,
      description:
        "A comprehensive educational platform featuring interactive learning modules, progress tracking, and responsive design for optimal user experience across all devices.",
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Design'],
      link: "https://educational-website-reactjs.netlify.app/",
      github: "https://github.com/sayaib/Educational-Website-ReactJs",
    },
    {
      id: 2,
      title: "fh-huquq.az",
      img: IMG4,
      description:
        "A sophisticated legal services website with modern design, case study showcases, client testimonials, and integrated contact forms for professional consultation.",
      technologies: ['ReactJS', 'Node.js', 'Express.js', 'Firebase', 'Full Stack'],
      link: "https://fh-huquq-com.vercel.app/",
      github: "https://github.com/sayaib/fh-huquq.com",
    },
    {
      id: 3,
      title: "Hospital reservation form",
      img: IMG2,
      description:
        "A comprehensive healthcare booking platform with real-time appointment scheduling, patient management, form validation, and secure data handling.",
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Form Validation', 'Responsive Design'],
      link: "https://fs-code-task-two.vercel.app/",
      github: "https://github.com/sayaib/FS-Code-Task",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <h5 className="section-subtitle">My Recent Work</h5>
          <h2 className="section-title">Portfolio</h2>
          <div className="title-underline"></div>
        </div>

        <div className="portfolio__container">
          {soloProjects.map((pro) => (
            <article className="portfolio__item" key={pro.id}>
              <div className="portfolio__item-image">
                <img src={pro.img} alt={pro.title} />
              </div>
              <div className="portfolio__item-content">
                <h3>{pro.title}</h3>
                <p>{pro.description}</p>
                
                <div className="portfolio__technologies">
                  {pro.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="portfolio__item-cta">
                  <a
                    href={pro.github}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="btn-icon" />
                    GitHub
                  </a>
                  <a
                    href={pro.link}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="btn-icon" />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
