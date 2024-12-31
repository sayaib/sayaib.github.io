// import React, { useState, useRef } from "react";
// import Sidebar from "./SideBar";
// import "./Main.css";

// import html from "../../assets/snippets/html.png";
// import javascript from "../../assets/snippets/javascript.png";
// import react from "../../assets/snippets/react.png";
// import typescript from "../../assets/snippets/typescript.png";
// import nodejs from "../../assets/snippets/nodejs.png";
// import python from "../../assets/snippets/python.png";

// import Snippets from "./Snippets/Snippets";

// import html_snippets from "./Json/snippets_html.json";
// import nodejs_snippets from "./Json/snippets_nodejs.json";
// import js_snippets from "./Json/snippets_javascript.json";
// import ts_snippets from "./Json/snippets_typescript.json";
// import react_snippets from "./Json/snippets_react.json";
// import python_snippets from "./Json/snippets_python.json";

// function Main() {
//   const [activeNav, setActiveNav] = useState("#html");

//   // Refs to control scrolling
//   const sliderRef = useRef(null);

//   const images = [
//     { src: html, alt: "HTML", link: "#html" },
//     { src: javascript, alt: "JavaScript", link: "#javascript" },
//     { src: nodejs, alt: "NodeJS", link: "#nodejs" },
//     { src: typescript, alt: "TypeScript", link: "#typescript" },
//     { src: react, alt: "React", link: "#react" },
//     { src: python, alt: "python", link: "#python" },
//   ];

//   const handleScroll = (direction) => {
//     if (sliderRef.current) {
//       const scrollAmount = direction === "left" ? -200 : 200; // Change 200 to adjust scroll speed
//       sliderRef.current.scrollLeft += scrollAmount;
//     }
//   };

//   const ImageStyle = {
//     width: "1.5rem",
//   };

//   console.log(ts_snippets);
//   return (
//     <div className="container">
//       {/* Conditionally rendering components based on activeNav */}

//       <Snippets
//         name={
//           activeNav === "#html"
//             ? "HTML Snippets Index"
//             : activeNav === "#nodejs"
//             ? "NodeJS Snippets Index"
//             : activeNav === "#javascript"
//             ? "Javascript Snippets Index"
//             : activeNav === "#typescript"
//             ? "Typescript Snippets Index"
//             : activeNav === "#react"
//             ? "ReactJS Snippets Index"
//             : activeNav === "#python"
//             ? "Python Snippets Index"
//             : ""
//         }
//         jsonData={
//           activeNav === "#html"
//             ? html_snippets
//             : activeNav === "#nodejs"
//             ? nodejs_snippets
//             : activeNav === "#javascript"
//             ? js_snippets
//             : activeNav === "#typescript"
//             ? ts_snippets
//             : activeNav === "#react"
//             ? react_snippets
//             : activeNav === "#python"
//             ? python_snippets
//             : ""
//         }
//         languages={
//           activeNav === "#html"
//             ? "html"
//             : activeNav === "#nodejs"
//             ? "javascript"
//             : activeNav === "#javascript"
//             ? "javascript"
//             : activeNav === "#typescript"
//             ? "typescript"
//             : activeNav === "#react"
//             ? "javascript"
//             : activeNav === "#python"
//             ? "python"
//             : ""
//         }
//       />
//       <button
//         onClick={() => handleScroll("left")}
//         className="slider-arrow left"
//         style={{ display: images.length > 4 ? "block" : "none" }}
//       >
//         &#8249;
//       </button>
//       <nav>
//         {/* Left Arrow */}

//         {/* Scrollable container */}
//         <div
//           ref={sliderRef}
//           style={{
//             display: "flex",
//             overflowX: "auto", // Make it horizontally scrollable
//             padding: "5px",
//             alignItems: "center",
//             width: "22rem",
//             scrollBehavior: "smooth", // Smooth scrolling
//           }}
//         >
//           {images.map((image, index) => (
//             <a
//               key={index}
//               href={image.link}
//               onClick={() => setActiveNav(image.link)}
//               className={activeNav === image.link ? "active" : ""}
//               style={{ marginRight: "10px" }} // Add margin for spacing between items
//             >
//               <div>
//                 <img style={ImageStyle} src={image.src} alt={image.alt} />
//               </div>
//             </a>
//           ))}
//         </div>

//         {/* Right Arrow */}
//       </nav>
//       <button
//         onClick={() => handleScroll("right")}
//         className="slider-arrow right"
//         style={{ display: images.length > 4 ? "block" : "none" }}
//       >
//         &#8250;
//       </button>
//     </div>
//   );
// }

// export default Main;

import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./SideBar";
import "./Main.css";

import html from "../../assets/snippets/html.png";
import javascript from "../../assets/snippets/javascript.png";
import react from "../../assets/snippets/react.png";
import typescript from "../../assets/snippets/typescript.png";
import nodejs from "../../assets/snippets/nodejs.png";
import python from "../../assets/snippets/python.png";
import php from "../../assets/snippets/php.png";
import flutter from "../../assets/snippets/flutter.png";

import Snippets from "./Snippets/Snippets";

// import html_snippets from "./Json/snippets_html.json";
// import nodejs_snippets from "./Json/snippets_nodejs.json";
// import js_snippets from "./Json/snippets_javascript.json";
// import ts_snippets from "./Json/snippets_typescript.json";
// import react_snippets from "./Json/snippets_react.json";
// import python_snippets from "./Json/snippets_python.json";
// import php_snippets from "./Json/snippets_php.json";
// import flutter_snippets from "./Json/snippets_flutter.json";

function Main() {
  const [activeNav, setActiveNav] = useState("#html");
  const sliderRef = useRef(null);

  // Images and links for the different languages
  const images = [
    { src: html, alt: "HTML", link: "#html" },
    { src: javascript, alt: "JavaScript", link: "#javascript" },
    { src: nodejs, alt: "NodeJS", link: "#nodejs" },
    { src: typescript, alt: "TypeScript", link: "#typescript" },
    { src: react, alt: "React", link: "#react" },
    { src: python, alt: "Python", link: "#python" },
    { src: php, alt: "php", link: "#php" },
    { src: flutter, alt: "flutter", link: "#flutter" },
  ];

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      sliderRef.current.scrollLeft += scrollAmount;
    }
  };

  const ImageStyle = {
    width: "1.5rem",
  };

  // Object mapping activeNav values to their respective data
  const snippetsData = {
    // "#html": {
    //   name: "HTML Snippets Index",
    //   jsonData: html_snippets,
    //   language: "html",
    // },
    // "#javascript": {
    //   name: "JavaScript Snippets Index",
    //   jsonData: js_snippets,
    //   language: "javascript",
    // },
    // "#nodejs": {
    //   name: "NodeJS Snippets Index",
    //   jsonData: nodejs_snippets,
    //   language: "javascript",
    // },
    // "#typescript": {
    //   name: "TypeScript Snippets Index",
    //   jsonData: ts_snippets,
    //   language: "typescript",
    // },
    // "#react": {
    //   name: "ReactJS Snippets Index",
    //   jsonData: react_snippets,
    //   language: "javascript",
    // },
    // "#python": {
    //   name: "Python Snippets Index",
    //   jsonData: python_snippets,
    //   language: "python",
    // },
    // "#php": {
    //   name: "PHP Snippets Index",
    //   jsonData: php_snippets,
    //   language: "php",
    // },
    // "#flutter": {
    //   name: "Flutter Snippets Index",
    //   jsonData: flutter_snippets,
    //   language: "dart",
    // },
  };

  // Update the activeNav when the URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setActiveNav(window.location.hash || "#html");
    };

    // Initial check for the hash when the component mounts
    handleHashChange();

    // Listen for changes to the hash in the URL
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Scrollable container rendering the snippets
  return (
    <div className="container">
      {/* Conditionally rendering components based on activeNav */}
      <Snippets
        name={snippetsData[activeNav]?.name || ""}
        jsonData={snippetsData[activeNav]?.jsonData || []}
        languages={snippetsData[activeNav]?.language || ""}
      />
      <button
        onClick={() => handleScroll("left")}
        className="slider-arrow left"
        style={{ display: images.length > 4 ? "block" : "none" }}
      >
        &#8249;
      </button>
      <nav>
        {/* Scrollable container */}
        <div
          ref={sliderRef}
          style={{
            display: "flex",
            overflowX: "auto", // Make it horizontally scrollable
            padding: "5px",
            alignItems: "center",
            width: "21rem",
            scrollBehavior: "smooth", // Smooth scrolling
          }}
        >
          {images.map((image, index) => (
            <a
              key={index}
              href={image.link}
              onClick={() => setActiveNav(image.link)}
              className={activeNav === image.link ? "active" : ""}
              style={{ marginRight: "10px" }}
            >
              <div>
                <img style={ImageStyle} src={image.src} alt={image.alt} />
              </div>
            </a>
          ))}
        </div>
      </nav>
      <button
        onClick={() => handleScroll("right")}
        className="slider-arrow right"
        style={{ display: images.length > 4 ? "block" : "none" }}
      >
        &#8250;
      </button>
    </div>
  );
}

export default Main;
