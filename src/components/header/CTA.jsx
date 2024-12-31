import React from "react";
// import CV from "../../assets/Rasif-Taghizade-CV.pdf";
import { NavLink } from "react-router";
const CTA = () => {
  return (
    <div className="cta">
      {/* <a href={CV} download className="btn">
        Download CV
      </a> */}
      <a
        href="https://marketplace.visualstudio.com/items?itemName=sayaib.hue-console"
        className="btn"
      >
        Install DevSnip Pro
      </a>
      <NavLink
        // onClick={() => {
        //   alert("working on this....");
        // }}
        target="_blank"
        to="/dev-snip-pro/document/en"
        className="btn btn-primary devsnip"
      >
        Explore DevSnip Pro Docs
      </NavLink>
    </div>
  );
};

export default CTA;
