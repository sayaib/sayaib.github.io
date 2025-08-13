import React, { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaEye, FaStar, FaCode } from 'react-icons/fa'
import { BiCodeAlt } from 'react-icons/bi'
import { MdWeb, Md10K } from 'react-icons/md'
import IMG1 from "../../assets/Educational Website.jpg";
import IMG2 from "../../assets/reservation-form.png";
import IMG3 from "../../assets/Startup Agency Project.jpg";
import IMG4 from "../../assets/fh-huquq.png";
import IMG5 from "../../assets/Jokes Project.jpg";
import IMG6 from "../../assets/Project4.jpg";
import "./portfolio.css";

//Portfolio function
const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const soloProjects = [
    {
      id: 1,
      title: "Educational Website with React.js",
      img: IMG1,
      description:
        "A comprehensive educational platform featuring interactive learning modules, progress tracking, and responsive design for optimal user experience across all devices.",
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Design'],
      category: 'web',
      featured: true,
      status: 'completed',
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
      category: 'fullstack',
      featured: true,
      status: 'completed',
      link: "https://fh-huquq-com.vercel.app/",
      github: "https://github.com/sayaib/fh-huquq.com",
    },
    {
      id: 3,
      title: "Hospital Reservation System",
      img: IMG2,
      description:
        "A comprehensive healthcare booking platform with real-time appointment scheduling, patient management, form validation, and secure data handling.",
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Form Validation', 'Responsive Design'],
      category: 'web',
      featured: false,
      status: 'completed',
      link: "https://fs-code-task-two.vercel.app/",
      github: "https://github.com/sayaib/FS-Code-Task",
    },
    {
      id: 4,
      title: "Startup Agency Landing Page",
      img: IMG3,
      description:
        "A modern, conversion-focused landing page for startup agencies with smooth animations, testimonials, and integrated contact forms.",
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Responsive Design'],
      category: 'web',
      featured: false,
      status: 'completed',
      link: "#",
      github: "#",
    },
    {
      id: 5,
      title: "Random Jokes Generator",
      img: IMG5,
      description:
        "An entertaining web application that fetches and displays random jokes with categories, favorites system, and social sharing capabilities.",
      technologies: ['JavaScript', 'API Integration', 'Local Storage', 'CSS3', 'HTML5'],
      category: 'web',
      featured: false,
      status: 'completed',
      link: "#",
      github: "#",
    },
    {
      id: 6,
      title: "Portfolio Dashboard",
      img: IMG6,
      description:
        "A comprehensive dashboard for managing portfolio projects with analytics, project tracking, and performance metrics visualization.",
      technologies: ['React.js', 'Chart.js', 'Node.js', 'MongoDB', 'Express.js'],
      category: 'fullstack',
      featured: false,
      status: 'in-progress',
      link: "#",
      github: "#",
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: <FaCode /> },
    { id: 'web', label: 'Web Apps', icon: <MdWeb /> },
    { id: 'fullstack', label: 'Full Stack', icon: <BiCodeAlt /> },
    { id: 'mobile', label: 'Mobile', icon: <Md10K /> },
  ];

  const filteredProjects = filter === 'all' 
    ? soloProjects 
    : soloProjects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="section-header">
          <h5 className="section-subtitle">My Recent Work</h5>
          <h2 className="section-title">Portfolio</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Explore my collection of projects showcasing modern web development, 
            full-stack applications, and innovative solutions.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="portfolio-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.icon}
              <span>{category.label}</span>
              <span className="project-count">
                ({category.id === 'all' ? soloProjects.length : soloProjects.filter(p => p.category === category.id).length})
              </span>
            </button>
          ))}
        </div>

        {/* Portfolio Stats */}
        <div className="portfolio-stats">
          <div className="stat-item">
            <FaCode className="stat-icon" />
            <span className="stat-number">{soloProjects.length}</span>
            <span className="stat-label">Total Projects</span>
          </div>
          <div className="stat-item">
            <FaStar className="stat-icon" />
            <span className="stat-number">{soloProjects.filter(p => p.featured).length}</span>
            <span className="stat-label">Featured</span>
          </div>
          <div className="stat-item">
            <FaEye className="stat-icon" />
            <span className="stat-number">{soloProjects.filter(p => p.status === 'completed').length}</span>
            <span className="stat-label">Completed</span>
          </div>
        </div>

        <div className="portfolio__container">
          {filteredProjects.map((pro) => (
            <article 
              className={`portfolio__item ${pro.featured ? 'featured' : ''} ${pro.status}`} 
              key={pro.id}
              onMouseEnter={() => setHoveredProject(pro.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {pro.featured && (
                <div className="featured-badge">
                  <FaStar /> Featured
                </div>
              )}
              
              <div className="portfolio__item-image">
                <img src={pro.img} alt={pro.title} />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <span className="project-category">{pro.category}</span>
                    <span className={`project-status ${pro.status}`}>
                      {pro.status === 'completed' ? '✓ Completed' : '🚧 In Progress'}
                    </span>
                  </div>
                </div>
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

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <FaCode className="no-projects-icon" />
            <h3>No projects found</h3>
            <p>Try selecting a different category to see more projects.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
