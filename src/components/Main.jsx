import React, { useEffect, useState, useCallback, useRef } from "react";
import Contact from "../components/contact/Contact";
import Experience from "../components/experience/Experience";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Intro from "../components/intro/Intro";
import Portfolio from "../components/portfolio/Portfolio";
import Testimonials from "../components/testimonials/Testimonials";
import Topbar from "../components/topbar/Topbar";
import "./Main.css";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolling, setIsScrolling] = useState(false);
  const [fps, setFps] = useState(60);
  const cursorRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const fpsRef = useRef({ frames: 0, lastTime: performance.now() });

  // Handle scroll progress for professional scroll indicator
  const handleScroll = useCallback(() => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / totalHeight) * 100;
    setScrollProgress(Math.min(progress, 100));
    
    // Set scrolling state
    setIsScrolling(true);
    clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 150);
  }, []);

  // Handle mouse movement for cursor effects
  const handleMouseMove = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    
    if (cursorRef.current) {
      requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        }
      });
    }
  }, []);

  // Handle cursor hover effects
  const handleMouseEnter = useCallback(() => {
    if (cursorRef.current) {
      cursorRef.current.classList.add('hover');
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (cursorRef.current) {
      cursorRef.current.classList.remove('hover');
    }
  }, []);

  const handleMouseDown = useCallback(() => {
    if (cursorRef.current) {
      cursorRef.current.classList.add('click');
    }
  }, []);

  const handleMouseUp = useCallback(() => {
    if (cursorRef.current) {
      cursorRef.current.classList.remove('click');
    }
  }, []);

  // FPS monitoring
  useEffect(() => {
    const updateFPS = () => {
      fpsRef.current.frames++;
      const currentTime = performance.now();
      
      if (currentTime >= fpsRef.current.lastTime + 1000) {
        setFps(Math.round((fpsRef.current.frames * 1000) / (currentTime - fpsRef.current.lastTime)));
        fpsRef.current.frames = 0;
        fpsRef.current.lastTime = currentTime;
      }
      
      requestAnimationFrame(updateFPS);
    };
    
    if (process.env.NODE_ENV === 'development') {
      requestAnimationFrame(updateFPS);
    }
  }, []);

  // Enhanced mouse event listeners
  useEffect(() => {
    const interactiveElements = document.querySelectorAll('button, a, .nav-dot, .back-to-top');
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave, handleMouseDown, handleMouseUp]);

  // Intersection Observer for section animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.id]));
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all main sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Handle scroll events with throttling
  useEffect(() => {
    let ticking = false;
    
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.add('loaded');
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll to section
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-particles">
          {Array.from({ length: 50 }, (_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        <div className="loading-content">
          <div className="loading-logo">
            <div className="logo-ring">
              <div className="logo-inner">
                <span className="logo-text">SB</span>
              </div>
            </div>
          </div>
          <div className="loading-spinner">
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
          </div>
          <h2 className="loading-text">Crafting Digital Excellence</h2>
          <p className="loading-subtitle">Preparing your portfolio experience</p>
          <div className="loading-progress">
            <div className="progress-bar"></div>
            <div className="progress-glow"></div>
          </div>
        </div>
        <div className="loading-background">
          <div className="bg-grid"></div>
          <div className="bg-gradient-orb orb-1"></div>
          <div className="bg-gradient-orb orb-2"></div>
          <div className="bg-gradient-orb orb-3"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Custom Cursor */}
      <div ref={cursorRef} className="custom-cursor">
        <div className="cursor-dot"></div>
        <div className="cursor-ring"></div>
      </div>

      {/* Advanced Scroll Progress */}
      <div className="scroll-progress-container">
        <div className="progress-track">
          <div 
            className="scroll-progress-bar"
            style={{ width: `${scrollProgress}%` }}
          >
            <div className="progress-glow"></div>
          </div>
        </div>
        <div className={`scroll-percentage ${isScrolling ? 'scrolling' : ''}`}>{Math.round(scrollProgress)}%</div>
      </div>

      {/* Left Side Floating Navigation */}
      <nav className={`left-floating-nav ${isScrolling ? 'scrolling' : ''}`}>
        <div className="nav-container">
          {/* <div className="nav-header">
            <div className="nav-logo">
              <span className="logo-icon">SB</span>
            </div>
            <div className="nav-title">Portfolio</div>
          </div>
           */}
          <div className="nav-menu">
            {[
              { id: 'home', label: 'Home', icon: '🏠', color: 'primary' },
              { id: 'about', label: 'About', icon: '👨‍💻', color: 'secondary' },
              { id: 'experience', label: 'Skills', icon: '⚡', color: 'accent' },
              { id: 'portfolio', label: 'Projects', icon: '🚀', color: 'tertiary' },
              { id: 'testimonials', label: 'Reviews', icon: '💬', color: 'quaternary' },
              { id: 'contact', label: 'Contact', icon: '📧', color: 'info' }
            ].map(({ id, label, icon, color }) => (
              <button
                key={id}
                className={`nav-item ${visibleSections.has(id) ? 'active' : ''} nav-${color}`}
                onClick={() => scrollToSection(id)}
                aria-label={`Navigate to ${label}`}
                title={label}
              >
                <div className="nav-item-content">
                  <span className="nav-icon">{icon}</span>
                
                </div>
                <div className="nav-ripple"></div>
              </button>
            ))}
          </div>
          
          {/* <div className="nav-footer">
            <div className="nav-social">
              <a href="#" className="social-link" aria-label="GitHub">
                <span>⚡</span>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span>💼</span>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <span>🐦</span>
              </a>
            </div>
          </div> */}
        </div>
        <div className="nav-background"></div>
      </nav>
      


      {/* Enhanced Background Elements */}
      <div className="bg-elements">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
          <div className="shape shape-6"></div>
        </div>
        <div className="bg-grid-pattern"></div>
        <div className="bg-noise"></div>
        <div 
          className="mouse-follower"
          style={{
            left: mousePosition.x,
            top: mousePosition.y
          }}
        ></div>
      </div>

      {/* Enhanced Main Content */}
      <main className="main-content">
        <div className="content-wrapper">
          <Header />
          <Topbar />
          <div className="section-divider"></div>
          <Intro />
          <div className="section-divider"></div>
          <Experience />
          <div className="section-divider"></div>
          <Portfolio />
          <div className="section-divider"></div>
          <Testimonials />
          <div className="section-divider"></div>
          <Contact />
          <Footer />
        </div>
      </main>

      {/* Enhanced Back to Top Button */}
      <div className={`back-to-top-container ${scrollProgress > 20 ? 'visible' : ''}`}>
        <button 
          className="back-to-top"
          onClick={() => scrollToSection('home')}
          aria-label="Back to top"
        >
          <div className="btn-background"></div>
          <div className="btn-content">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path 
                d="M12 19V5M5 12L12 5L19 12" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <span className="btn-text">Top</span>
          </div>
          <div className="btn-ripple"></div>
        </button>
        <div className="scroll-indicator">
          <div 
            className="indicator-fill"
            style={{ height: `${scrollProgress}%` }}
          ></div>
        </div>
      </div>

      {/* Page Transition Overlay */}
      <div className="page-transition-overlay"></div>

      {/* Performance Monitor (Development) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="performance-monitor">
          <div className="fps-counter">FPS: {fps}</div>
          <div className="scroll-position">Scroll: {Math.round(scrollProgress)}%</div>
        </div>
      )}
    </>
  );
};

export default Main;
