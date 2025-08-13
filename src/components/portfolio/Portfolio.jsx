import React, { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode } from 'react-icons/fa'
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
          <span className="section-subtitle">My Recent Work</span>
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-description">
            A curated collection of projects showcasing modern web development, 
            innovative solutions, and attention to detail.
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
              <span className="filter-icon">{category.icon}</span>
              <span className="filter-label">{category.label}</span>
              <span className="project-count">
                {category.id === 'all' ? soloProjects.length : soloProjects.filter(p => p.category === category.id).length}
              </span>
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((pro) => (
            <article 
              className={`project-card ${pro.featured ? 'featured' : ''}`} 
              key={pro.id}
              onMouseEnter={() => setHoveredProject(pro.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-image">
                <img src={pro.img} alt={pro.title} loading="lazy" />
                <div className="project-overlay">
                  <div className="project-actions">
                    <a
                      href={pro.github}
                      className="action-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View GitHub Repository"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={pro.link}
                      className="action-btn primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                  {pro.featured && (
                    <div className="featured-badge">
                      <FaStar />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{pro.title}</h3>
                  <span className={`project-status ${pro.status}`}>
                    {pro.status === 'completed' ? 'Completed' : 'In Progress'}
                  </span>
                </div>
                
                <p className="project-description">{pro.description}</p>
                
                <div className="project-technologies">
                  {pro.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {pro.technologies.length > 4 && (
                    <span className="tech-tag more">
                      +{pro.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">
              <FaCode />
            </div>
            <h3 className="empty-title">No projects found</h3>
            <p className="empty-description">
              Try selecting a different category to explore more projects.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
