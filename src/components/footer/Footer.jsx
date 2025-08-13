import React, { useState, useEffect } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const footerElement = document.querySelector('footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  const navigationLinks = [
    { href: "#home", label: "Home", icon: "🏠" },
    { href: "#about", label: "About", icon: "👨‍💻" },
    { href: "#experience", label: "Skills", icon: "⚡" },
    { href: "#portfolio", label: "Portfolio", icon: "💼" },
    { href: "#testimonials", label: "Reviews", icon: "💬" },
    { href: "#contact", label: "Contact", icon: "📧" }
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/sayaib/",
      icon: <BsLinkedin />,
      label: "LinkedIn",
      color: "#0077b5"
    },
    {
      href: "https://github.com/sayaib",
      icon: <FaGithub />,
      label: "GitHub",
      color: "#333"
    }
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className={`footer ${isVisible ? 'footer--visible' : ''}`}>
      {/* Enhanced Logo with Animation */}
      <a 
        href="#home" 
        className="footer__logo"
        onClick={(e) => handleSmoothScroll(e, '#home')}
        aria-label="Scroll to top"
      >
        <span className="logo-text">Sayaib Sarkar</span>
        <span className="logo-subtitle">Full Stack Developer</span>
      </a>

      {/* Enhanced Navigation Links */}
      <ul className="permalinks">
        {navigationLinks.map(({ href, label, icon }) => (
          <li key={href}>
            <a 
              href={href}
              onClick={(e) => handleSmoothScroll(e, href)}
              aria-label={`Navigate to ${label}`}
              title={label}
            >
              <span className="link-icon">{icon}</span>
              <span className="link-text">{label}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* Enhanced Social Links */}
      <div className="footer__socials">
        {socialLinks.map(({ href, icon, label, color }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${label} profile`}
            title={label}
            style={{ '--social-color': color }}
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Enhanced Copyright Section */}
      <div className="footer__copyright">
        <small>
          <span className="copyright-symbol">&copy;</span>
          <span className="copyright-year">{currentYear}</span>
          <span className="copyright-name">Sayaib Sarkar</span>
          <span className="copyright-text">All rights reserved.</span>
        </small>
        <div className="footer__tagline">
          <span>Crafted with</span>
          <span className="heart-icon">💙</span>
          <span>and lots of coffee</span>
          <span className="coffee-icon">☕</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
