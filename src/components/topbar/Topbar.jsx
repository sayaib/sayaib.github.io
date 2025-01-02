// import React, { useState } from "react";
// import { AiOutlineHome } from "react-icons/ai";
// import { AiOutlineUser } from "react-icons/ai";
// import { BiBook } from "react-icons/bi";
// import { RiServiceLine } from "react-icons/ri";
// import { BiMessageSquareDetail } from "react-icons/bi";

// import "./topbar.css";

// const Topbar = () => {
//   const [activeNav, setActiveNav] = useState("#home");
//   return (
//     <nav>
//       <a
//         href="#home"
//         onClick={() => setActiveNav("#home")}
//         className={activeNav === "#home" ? "active" : ""}
//       >
//         <AiOutlineHome />
//       </a>
//       <a
//         href="about"
//         onClick={() => setActiveNav("#about")}
//         className={activeNav === "#about" ? "active" : ""}
//       >
//         <AiOutlineUser />
//       </a>
//       <a
//         href="#experience"
//         onClick={() => setActiveNav("#experience")}
//         className={activeNav === "#experience" ? "active" : ""}
//       >
//         <BiBook />
//       </a>
//       <a
//         href="#portfolio"
//         onClick={() => setActiveNav("#portfolio")}
//         className={activeNav === "#portfolio" ? "active" : ""}
//       >
//         <RiServiceLine />
//       </a>
//       <a
//         href="#contact"
//         onClick={() => setActiveNav("#contact")}
//         className={activeNav === "#contact" ? "active" : ""}
//       >
//         <BiMessageSquareDetail />
//       </a>
//     </nav>
//   );
// };

// export default Topbar;

import React from "react";
import {
  AiFillCodepenCircle,
  AiFillCode,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";

import { VscVscode } from "react-icons/vsc";

import "./topbar.css";

const Topbar = () => {
  return (
    <nav>
      <a
        href="https://codepen.io/sayaib"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillCodepenCircle />
      </a>
      <a
        href="https://marketplace.visualstudio.com/items?itemName=sayaib.hue-console#:~:text=DevSnip%20Pro%20Full%20Documentation&text=Select%20Your%20Code%3A%20Highlight%20the,option%20from%20the%20context%20menu."
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillCode />
      </a>
      <a
        href="https://www.linkedin.com/in/sayaib/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillTwitterCircle />
      </a>
      <a
        href="https://github.com/sayaib"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub />
      </a>
    </nav>
  );
};

export default Topbar;
