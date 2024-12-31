import React from "react";
import "./style.css";
import under from "../../assets/snippets/under-developemrnt.png";

const UnderDevelopment = () => {
  // Inline styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#353535",
    fontFamily: "'Arial', sans-serif",
    color: "#d8d8d8",
    textAlign: "center",
    padding: "20px",
  };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    marginBottom: "2rem",
  };

  const imageStyle = {
    width: "150px",
    height: "150px",
    marginBottom: "1rem",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
  };

  return (
    <div style={containerStyle}>
      <img src={under} alt="Under Development" style={imageStyle} />
      <h1 style={headingStyle}>Page Under Development</h1>
      <p style={paragraphStyle}>
        We are working hard to bring you this page. Please check back soon!
      </p>
      <a href="/" style={buttonStyle}>
        Go Back to Home
      </a>
    </div>
  );
};

export default UnderDevelopment;
