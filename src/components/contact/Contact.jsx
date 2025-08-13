import "./contact.css";

import React, { useRef, useState } from "react";

import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { HiLocationMarker, HiPhone } from "react-icons/hi";
import { BsSend } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm
      // "service_k2qawqh",
      // "template_c6rkpn6",
      // formRef.current,
      // "X7K7ebhIeOy3YwHki"
      ()
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact__container">
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-description">
            Ready to bring your ideas to life? Let's discuss your next project 
            and create something amazing together.
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <MdOutlineEmail />
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>ssayaib@gmail.com</p>
                <a href="mailto:ssayaib@gmail.com" className="contact-link">
                  Send Email
                </a>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <HiLocationMarker />
              </div>
              <div className="contact-details">
                <h4>Location</h4>
                <p>Available Worldwide</p>
                <span className="contact-link">Remote Work</span>
              </div>
            </div>
            
            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                <a href="#" className="social-link">
                  <FaLinkedin />
                </a>
                <a href="#" className="social-link">
                  <FaGithub />
                </a>
                <a href="#" className="social-link">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  name="user_name"
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  name="user_email"
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  className="form-input"
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  rows="6"
                  name="message"
                  className="form-textarea"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary form-submit">
                <BsSend className="btn-icon" />
                Send Message
              </button>
              
              {message && (
                <div className="success-message">
                  <p>Thanks for your message! I'll get back to you soon.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
