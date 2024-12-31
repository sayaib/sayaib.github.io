import React from "react";
import "./style.css";
import installation from "../../assets/snippets/doc_gif/installation.gif";
import NavHub from "../../components/index/NavHub";
import TitleDoc from "../../components/index/TitleDoc";

const Installation = () => {
  return (
    <>
      <div className="main_container_doc">
        <div className="contain_docs">
          <TitleDoc title="Installation Guide for DevSnip Pro" />

          <div className="installation_image">
            <img
              className="downloads_image"
              src="https://img.shields.io/visual-studio-marketplace/v/sayaib.hue-console?style=for-the-badge&label=VS%20Marketplace&logo=visual-studio-code"
              alt=""
              srcset=""
            />
            <img
              className="downloads_image"
              src="https://img.shields.io/visual-studio-marketplace/i/sayaib.hue-console?style=for-the-badge&logo=visual-studio-code"
              alt=""
              srcset=""
            />
            <img
              className="downloads_image"
              src="https://img.shields.io/visual-studio-marketplace/d/sayaib.hue-console?style=for-the-badge&logo=visual-studio-code"
              alt=""
              srcset=""
            />
            <img
              className="rating_image"
              src="https://img.shields.io/visual-studio-marketplace/r/sayaib.hue-console?style=for-the-badge&logo=visual-studio-code"
              alt=""
              srcset=""
            />
          </div>

          <img src={installation} alt="" srcset="" />
          <br />

          <br />
          <p className="description_doc">
            To install the DevSnip Pro extension for Visual Studio Code, follow
            the steps outlined below:
          </p>

          <section>
            <h2 className="header_doc" id="prerequisites">
              1. Prerequisites
            </h2>
            <p>
              <ul>
                <li className="description_doc">
                  Ensure that you have Visual Studio Code installed on your
                  machine. If you don't have it, download and install it from
                  the official Visual Studio Code website.
                </li>
              </ul>
            </p>

            <h2 className="header_doc" id="step_install">
              2. Steps to Install
            </h2>

            <p>
              <ul>
                <li className="description_doc">
                  a. To install the DevSnip Pro extension, first ensure that you
                  have Visual Studio Code installed on your machine.
                </li>
                <li className="description_doc">
                  b. Open Visual Studio Code and navigate to the Extensions
                  Marketplace by clicking on the Extensions icon or using the
                  shortcut <code>Ctrl+Shift+X</code> (Windows/Linux) or{" "}
                  <code>Cmd+Shift+X</code> (macOS).
                </li>
                <li className="description_doc">
                  c. In the search bar, type <strong>DevSnip Pro</strong> or use
                  the identifier <strong>sayaib.hue-console</strong>.
                </li>
                <li className="description_doc">
                  d. Click on the <strong>Install</strong> button next to the
                  extension in the list to download and install it.
                </li>
                <li className="description_doc">
                  e. After installation, reload Visual Studio Code to activate
                  the extension.
                </li>
                <li className="description_doc">
                  f. If you encounter any issues, check your internet
                  connection, update Visual Studio Code, or consult the
                  extension's page on the Visual Studio Marketplace for support.
                </li>
              </ul>
            </p>

            <h2 className="header_doc" id="troubleshooting">
              3. Troubleshooting Installation Issues
            </h2>
            <p>
              <ul>
                <li className="description_doc">
                  a. Ensure your internet connection is stable.
                </li>
                <li className="description_doc">
                  b. Check if there are any updates available for Visual Studio
                  Code and install them.
                </li>
                <li className="description_doc">
                  c. Restart Visual Studio Code and try installing again.
                </li>
                <li className="description_doc">
                  d. Visit the extension's page on the Visual Studio Marketplace
                  for additional support or FAQs.
                </li>
              </ul>
            </p>

            <h2 className="header_doc" id="conclusion">
              4. Conclusion
            </h2>
            <p>
              <ul>
                <li className="description_doc">
                  Once installed, you can start using DevSnip Pro for enhanced
                  coding productivity with snippets and debugging tools tailored
                  for software development.
                </li>
                <li className="description_doc">
                  For more information about features and usage, refer to any
                  documentation provided within the extension or on its
                  marketplace page.
                </li>
              </ul>
            </p>
          </section>
        </div>

        <div className="index_doc">
          <NavHub />
          <ul>
            <li>
              <a href="#prerequisites">1. Prerequisites</a>
            </li>
            <li>
              <a href="#step_install">2. Steps to Install</a>
            </li>
            <li>
              <a href="#troubleshooting">
                3. Troubleshooting Installation Issues
              </a>
            </li>
            <li>
              <a href="#conclusion">4. Conclusion</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Installation;
