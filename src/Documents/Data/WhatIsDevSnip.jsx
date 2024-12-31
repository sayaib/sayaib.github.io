import React from "react";
import "./style.css";
import NavHub from "../../components/index/NavHub";
import logo from "../../assets/snippets/logo.png";
import TitleDoc from "../../components/index/TitleDoc";

const WhatIsDevSnip = () => {
  return (
    <>
      <div className="main_container_doc">
        <div className="contain_docs">
          <TitleDoc title="What is DevSnip Pro ?" />

          <div className="container_vs_code">
            <div className="flex-row">
              {/* Logo */}
              <div>
                <img src={logo} alt="DevSnip Logo" className="logo" />
              </div>

              {/* Content */}
              <div className="content">
                {/* Title and stats */}
                <div className="title-stats">
                  <h1 className="title">
                    <span className="dev_snip">DevSnip</span> Pro
                  </h1>
                  <div className="stats">
                    <span>Sayaib Sarkar</span>
                    <span className="stat-item">
                      <svg
                        className="download-icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                      <img
                        src="https://img.shields.io/visual-studio-marketplace/i/sayaib.hue-console?style=for-the-badge&logo=visual-studio-code"
                        alt=""
                      />
                    </span>
                    <span className="stat-item">
                      <img
                        src="https://img.shields.io/visual-studio-marketplace/r/sayaib.hue-console?style=for-the-badge&logo=visual-studio-code"
                        alt=""
                      />
                    </span>
                    <span>Free</span>
                    <span className="stat-item">
                      <svg className="heart-icon" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                      Sponsor
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="description">
                  <span>🚀</span> Generate Custom Snippets and Preloaded
                  Multi-Language Snippet Support.
                </p>

                {/* Actions */}
                <div className="actions">
                  <button
                    className="install-button"
                    onClick={() =>
                      window.open(
                        "https://marketplace.visualstudio.com/items?itemName=sayaib.hue-console#:~:text=DevSnip%20Pro%20Full%20Documentation&text=Select%20Your%20Code%3A%20Highlight%20the,option%20from%20the%20context%20menu.",
                        "_blank"
                      )
                    }
                  >
                    Install
                  </button>
                  <a
                    href="https://code.visualstudio.com/docs/editor/extension-marketplace"
                    target="_blank"
                    className="link"
                    rel="noreferrer"
                  >
                    Trouble Installing?
                  </a>
                </div>
              </div>
            </div>
          </div>

          <p className="description_doc">
            In the context of a tool like DevSnip Pro, snippets refer to short
            pieces of reusable code that can be quickly inserted into your
            project to save time and improve productivity. These snippets can be
            custom (user-defined) or preloaded (provided by the tool or the
            community). Let's break down the two concepts you've mentioned:
            Custom Snippets and Preloaded Multi-Language Snippet Support.
          </p>
          <p className="description_doc">
            DevSnip Pro is a code snippet extension designed for Visual Studio
            Code, aimed at enhancing the coding experience for developers. Here
            are the key features and details about DevSnip Pro:
          </p>
          <section>
            <h2 className="header_doc" id="features">
              1. Features
            </h2>
            <p>
              <strong>How it Helps:</strong>
              <ul>
                <li className="description_doc">
                  <strong> All-in-One Code Snippets:</strong>
                  DevSnip Pro provides a comprehensive collection of code
                  snippets that can help streamline coding tasks and improve
                  efficiency.
                </li>
                <li className="description_doc">
                  <strong>Debugger Tool:</strong> It includes a vibrant debugger
                  tool that assists developers in identifying and fixing issues
                  in their code more effectively.
                </li>
                <li className="description_doc">
                  <strong>User-Friendly Interface:</strong> sssThe extension is
                  designed to be intuitive, making it accessible for both new
                  and experienced developers.
                </li>
              </ul>
            </p>

            <h2 className="header_doc" id="target_audience">
              2. Target Audience
            </h2>
            <p>
              <ul>
                <li className="description_doc">
                  This tool is particularly beneficial for software developers
                  looking to enhance their productivity with quick access to
                  commonly used code snippets and debugging capabilities.
                </li>
                <li className="description_doc">
                  Overall, DevSnip Pro is a valuable resource for developers
                  seeking to optimize their coding workflow within Visual Studio
                  Code.
                </li>
              </ul>
            </p>
          </section>
        </div>

        <div className="index_doc">
          <NavHub />
          <ul>
            <li>
              <a href="#features">1. Features</a>
            </li>
            <li>
              <a href="#target_audience">2. Target Audience</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default WhatIsDevSnip;
