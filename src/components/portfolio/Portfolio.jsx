import "./portfolio.css";

import IMG1 from "../../assets/Educational Website.jpg";
import IMG2 from "../../assets/reservation-form.png";
import IMG3 from "../../assets/Startup Agency Project.jpg";
import IMG4 from "../../assets/fh-huquq.png";
import IMG5 from "../../assets/Jokes Project.jpg";
import IMG6 from "../../assets/Project4.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Educational Website with React.js",
      img: IMG1,
      description:
        "An educational website is a huge interactive platform to present various information for people.",
      technologies: "Html | CSS | Javascript | React Js",
      // link: "https://educational-website-reactjs.netlify.app/",
      // github: "https://github.com/sayaib/Educational-Website-ReactJs",
    },
    {
      id: 2,
      title: "fh-huquq.az",
      img: IMG4,
      description:
        "A personal website assembled for a lawyer. Firebase is the basis of the website assembled as a full stack",
      technologies: "ReactJS | Node & Express Js | Firebase",
      // link: "https://fh-huquq-com.vercel.app/",
      // github: "https://github.com/sayaib/fh-huquq.com",
    },
    {
      id: 3,
      title: "Hospital reservation form",
      img: IMG2,
      description:
        "A booking website for doctor's appointments at the hospital. The website is mainly functionally developed with JavaScript",
      technologies: "HTML | CSS | JavaScript",
      // link: "https://fs-code-task-two.vercel.app/",
      // github: "https://github.com/sayaib/FS-Code-Task",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
