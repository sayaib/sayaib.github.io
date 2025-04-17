import React from "react";
import "./style.css";
import NavHub from "../../components/index/NavHub";
import TitleDoc from "../../components/index/TitleDoc";
import imageOne from "../../assets/code_example/cli_install/3_dark.png";
import imageOneLight from "../../assets/code_example/cli_install/3_light.png";
import imageTwo from "../../assets/code_example/cli_install/3_1_dark.png";
import imageTwoLight from "../../assets/code_example/cli_install/3_1_light.png";
import { useTheme } from "../../context/ThemeContext";
import Tag from "../../components/index/Tag";

const PrismSnippetsLoggerInstallation = () => {
  const { theme, toggleTheme } = useTheme();
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    });
  };

  return (
    <div className="main_container_doc">
      <div className="contain_docs">
        <TitleDoc title="DevSnip Pro CLI Installation Guide" />

        <p className="description_doc">
          To create a command-line interface (CLI) installation page for the
          "Prism Snippets & Logger" extension from the Visual Studio Code
          Marketplace, you can follow the structure below. This page will
          provide users with clear instructions on how to install the extension
          via CLI.
        </p>
        <section>
          <h2 className="header_doc" id="Overview">
            1. Overview
          </h2>

          <p className="description_doc">
            <strong>DevSnip Pro</strong> is a powerful tool designed for
            software developers, offering all-in-one code snippets and a vibrant
            debugger. It enhances productivity in Visual Studio Code.
          </p>
          <br />
          <h2 className="header_doc" id="Prerequisites">
            2. Prerequisites
          </h2>
          <ul>
            <li className="description_doc">
              Ensure you have <strong>Visual Studio Code</strong> installed on
              your machine.
            </li>
            <li className="description_doc">
              Make sure you have access to a terminal or command prompt.
            </li>
          </ul>
          <br />
          <h2 className="header_doc" id="Installation-Steps">
            3. Installation Steps
          </h2>
          <ol>
            <li className="description_doc">
              <strong>Open your terminal</strong>: You can do this by searching
              for "Terminal" in your operating system.
            </li>
            <li className="description_doc">
              <strong>
                Use the following command to install the extension:
              </strong>
              {/* <pre style={styles.code}>
                <code>code --install-extension sayaib.hue-console</code>
              </pre> */}
              {theme === "dark" ? (
                <img
                  className="polacode_image"
                  src={imageOne}
                  alt=""
                  srcset=""
                />
              ) : (
                <img
                  className="polacode_image"
                  src={imageOneLight}
                  alt=""
                  srcset=""
                />
              )}
              <button
                className="copy-button"
                onClick={() =>
                  copyToClipboard("code --install-extension sayaib.hue-console")
                }
              >
                Copy
              </button>
            </li>
            <li className="description_doc">
              <strong>Verify Installation:</strong> After installation, you can
              verify that the extension has been installed successfully by
              running:
              {/* <pre style={styles.code}>
                <code>code --list-extensions | grep sayaib.hue-console</code>
              </pre> */}
              {theme === "dark" ? (
                <img
                  className="polacode_image"
                  src={imageTwo}
                  alt=""
                  srcset=""
                />
              ) : (
                <img
                  className="polacode_image"
                  src={imageTwoLight}
                  alt=""
                  srcset=""
                />
              )}
              <button
                className="copy-button"
                onClick={() =>
                  copyToClipboard(
                    "code --list-extensions | grep sayaib.hue-console"
                  )
                }
              >
                Copy
              </button>
            </li>
          </ol>
          <br />
          <h2 className="header_doc" id="Troubleshooting">
            4. Troubleshooting
          </h2>
          <p>If you encounter issues during installation:</p>
          <ul>
            <li className="description_doc">
              Ensure that Visual Studio Code is added to your system's PATH.
            </li>
            <li className="description_doc">
              Check for any error messages in the terminal and refer to the
              <a
                href="https://marketplace.visualstudio.com/items?itemName=sayaib.hue-console&ssr=false#qna"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Q & A section
              </a>{" "}
              on the Visual Studio Marketplace for common issues.
            </li>
          </ul>
          <br />
          <h2 className="header_doc" id="Additional-Information">
            5. Additional Information
          </h2>
          <ul>
            <li className="description_doc">
              <strong>Version History:</strong> Keep track of updates and
              improvements.
            </li>
            <li className="description_doc">
              <strong>Rating & Review:</strong> Share your experience and read
              what other users have said about the extension.
            </li>
          </ul>

          <p className="description_doc">
            For further assistance, please visit the
            <a
              href="https://marketplace.visualstudio.com/items?itemName=sayaib.hue-console"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Visual Studio Marketplace page
            </a>{" "}
            for DevSnip Pro.
          </p>
        </section>
      </div>
      <div className="index_doc">
        <NavHub />
        <ul>
          <li>
            <Tag tag="Overview" name="1. Overview" />
          </li>
          <li>
            <Tag tag="Prerequisites" name="2. Prerequisites" />
          </li>
          <li>
            <Tag tag="Installation-Steps" name="3. Installation Steps" />
          </li>
          <li>
            <Tag tag="Troubleshooting" name="4. Troubleshooting" />
          </li>
          <li>
            <Tag
              tag="Additional-Information"
              name="5. Additional Information"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

// Styles for the component
const styles = {
  code: {
    backgroundColor: "#9b9797",
    color: "#0f0e0e",
    fontFamily: "monospace",
    borderRadius: "5px",
    padding: "10px",
    overflowX: "auto",
    position: "relative",
  },
};

export default PrismSnippetsLoggerInstallation;
