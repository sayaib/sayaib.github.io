// CustomSnippets.js

import React from "react";
import customsnippets from "../../assets/snippets/doc_gif/customsnip.gif";
import "./style.css";
import NavHub from "../../components/index/NavHub";
import TitleDoc from "../../components/index/TitleDoc";
import Tag from "../../components/index/Tag";

const CustomSnippets = () => {
  return (
    <div className="main_container_doc">
      <div className="contain_docs">
        <TitleDoc title="Custom Snippets with DevSnip Pro" />
        <p className="description_doc">
          This document outlines how to create and use custom snippets with
          <strong> DevSnip Pro</strong> in a ReactJS Custom Snippets
          application.
        </p>
        <section>
          <h2 className="header_doc" id="install-devsnip-pro">
            Step 1: Install DevSnip Pro
          </h2>
          <ol>
            <li className="description_doc">
              Open <strong>Visual Studio Code</strong>.
            </li>
            <li className="description_doc">
              Go to the <strong>Extensions</strong> view by clicking on the
              Extensions icon in the Activity Bar on the side of the window.
            </li>
            <li className="description_doc">
              Search for <strong>DevSnip Pro</strong> and click{" "}
              <strong>Install</strong>.
            </li>
          </ol>
          <h2 className="header_doc" id="create-custom-snippets">
            Step 2: Create Custom Snippets
          </h2>
          <ol>
            <li className="description_doc">
              ● Select Your Code: Highlight the code snippet you want to save in
              the VS Code editor.
            </li>
            <br />
            <li className="description_doc">
              ● Right-Click on the Editor: Open the context menu by
              right-clicking on the selected code.
            </li>
            <br />
            <li className="description_doc">
              ● Choose "🚀 DevSnip Pro: Create Your Own Perfect Code Snippet":
              Select this option from the context menu.
            </li>
            <br />
            <li className="description_doc">
              ● Enter Snippet Details: Provide the following information:
              <div style={{ marginLeft: "1.5rem" }}>
                <br />
                Snippet Prefix: A unique identifier for your snippet.
                <br />
                Snippet Name: A descriptive name for the snippet.
                <br />
                Snippet Description (optional): Add a brief explanation of the
                snippet.
              </div>
            </li>
            <br />
            <li className="description_doc">
              ● Call Your Snippets: Use the given prefix name to quickly insert
              your saved snippet in the editor.
            </li>
          </ol>
          <h3 className="title_doc">Example Custom Snippet:</h3>
          <img src={customsnippets} alt="" srcset="" />
          <ul>
            <li className="description_doc">
              <strong>prefix</strong>: The shortcut you will type to trigger the
              snippet (e.g., <code>fetch_api</code>).
            </li>
            <li className="description_doc">
              <strong>body</strong>: The actual code that will be inserted when
              you use the snippet. You can use placeholders like.
            </li>
            <li className="description_doc">
              <strong>description</strong>: A brief description of what the
              snippet does.
            </li>
          </ul>
          <h2 className="header_doc" id="use-example">
            Step 3: Use Custom Snippets in Your Javascript or Typescript Page
          </h2>
          <ol>
            <li className="description_doc">
              Open a new or existing React component file (e.g.,{" "}
              <code>MyComponent.js</code>).
            </li>
            <li className="description_doc">
              Type the prefix of your custom snippet (e.g.,{" "}
              <code>fetch_api</code>) and press
              <strong> Tab</strong>.
            </li>
            <li className="description_doc">
              The snippet will expand, allowing you to fill in any placeholders.
            </li>
          </ol>
          <h3>Example Usage</h3>
          After typing `fetch_api` and pressing Tab, you will see: You can then
          replace `ComponentName` and add your code as needed.
          <h2 className="header_doc" id="conclusion">
            4. Conclusion
          </h2>
          <p className="description_doc" s>
            {" "}
            Using custom snippets with DevSnip Pro enhances your productivity by
            allowing quick insertion of frequently used code patterns in ReactJS
            development. By following these steps, you can easily create and
            utilize snippets tailored to your coding style and project
            requirements.
          </p>
        </section>
      </div>

      <div className="index_doc">
        <NavHub />
        <ul>
          <li>
            <Tag tag="install-devsnip-pro" name="Step 1: Install DevSnip Pro" />
          </li>
          <li>
            <Tag
              tag="create-custom-snippets"
              name="Step 2: Create Custom Snippets"
            />
          </li>
          <li>
            <Tag
              tag="use-example"
              name=" Step 3: Use Custom Snippets in Your Javascript or Typescript Page"
            />
          </li>
          <li>
            <Tag tag="conclusion" name="4. Conclusion" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CustomSnippets;
