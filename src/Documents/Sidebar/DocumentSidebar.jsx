import React from "react";
import { NavLink } from "react-router-dom";
import "./DocumentSidebar.css";
import { snippetsLinkName } from "../../function/function";

import {
  Info,
  CirclePower,
  FerrisWheel,
  LayoutGrid,
  FileJson,
  Handshake,
  Ellipsis,
} from "lucide-react";

const DocumentSidebar = ({ closeSidebar }) => {
  const navlink_element = [
    "html",
    "javascript",
    "typescript",
    "react",
    "react-router",
    "react-redux",
    "react-query",
    "python",
    "php",
    "flutter",
    "nodejs",
    "ES6",
    "mongodb",
    "mongo-aggregation",
  ];
  return (
    <div className="sidebar-section_doc">
      <div className="sidebar-section">
        <h6 className="sidebar_section_heading">
          {" "}
          <Info style={{ marginRight: "0.5rem" }} size={20} />
          About
        </h6>
        <ul>
          <li>
            <NavLink
              className="nav-link"
              activeClassName="active-link"
              to="/dev-snip-pro/document/en"
              onClick={closeSidebar}
            >
              What is DevSnip Pro?
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link"
              activeClassName="active-link"
              to="/dev-snip-pro/document/en/why-dev-snip"
              onClick={closeSidebar}
            >
              Why DevSnip Pro?
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="sidebar-section">
        <h6 className="sidebar_section_heading">
          {" "}
          <FerrisWheel style={{ marginRight: "0.5rem" }} size={20} />
          Usages
        </h6>
        <ul>
          <li>
            <NavLink
              className="nav-link"
              activeClassName="active-link"
              to="/dev-snip-pro/document/en/installations"
              onClick={closeSidebar}
            >
              Install
            </NavLink>
          </li>

          <li>
            {" "}
            <NavLink
              className="nav-link"
              activeClassName="active-link"
              to="/dev-snip-pro/document/en/cli-installations"
              onClick={closeSidebar}
            >
              CLI
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="sidebar-section">
        <h6 className="sidebar_section_heading">
          <LayoutGrid style={{ marginRight: "0.5rem" }} size={20} />
          Features
        </h6>
        <ul>
          <li>
            {" "}
            <NavLink
              className="nav-link"
              activeClassName="active-link"
              to="/dev-snip-pro/document/en/custom-snippets"
              onClick={closeSidebar}
            >
              Custom Snippets
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              className="nav-link"
              activeClassName="active-link"
              to="/dev-snip-pro/document/en/view-custom-snippets"
              onClick={closeSidebar}
            >
              View Custom Snippets
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="sidebar-section">
        <h6 className="sidebar_section_heading">
          <FileJson style={{ marginRight: "0.5rem" }} size={20} /> Code Snippets
        </h6>
        <ul>
          {navlink_element.map((item) => {
            return (
              <li key={item} style={{ marginLeft: "1rem" }}>
                <NavLink
                  className="nav-link"
                  activeClassName="active-link"
                  to={`/dev-snip-pro/document/en/code-snippets/${item}`} // Dynamic path
                  onClick={closeSidebar}
                >
                  {snippetsLinkName(item)}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="sidebar-section">
        <h6 className="sidebar_section_heading">
          {" "}
          <CirclePower style={{ marginRight: "0.5rem" }} size={20} />
          Troubleshooting
        </h6>
        <ul>
          <li>
            {" "}
            {/* <NavLink
              className="nav-link"
              activeClassName="active-link"
              to="/dev-snip-pro/document/en/under-development"
              onClick={closeSidebar}
            >
              Common Issues
            </NavLink> */}
          </li>
          <li>
            {" "}
            <NavLink
              className="nav-link"
              activeClassName="active-link"
              to="/dev-snip-pro/document/en/faq"
              onClick={closeSidebar}
            >
              FAQ
            </NavLink>
          </li>
          {/* <li>
            {" "}
            <NavLink
              className="nav-link"
              activeClassName="active-link"
              to="/dev-snip-pro/document/en/under-development"
              onClick={closeSidebar}
            >
              Support
            </NavLink>
          </li> */}
        </ul>
      </div>

      <div className="sidebar-section">
        <h6 className="sidebar_section_heading">
          <Handshake style={{ marginRight: "0.5rem" }} size={20} />
          Contributing
        </h6>
        <ul>
          <li>
            {" "}
            <NavLink
              className="nav-link"
              activeClassName="active-link"
              to="/dev-snip-pro/document/en/how-to-contribute"
              onClick={closeSidebar}
            >
              {" "}
              How to Contribute
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              className="nav-link"
              activeClassName="active-link"
              to="/dev-snip-pro/document/en/code-of-conduct"
              onClick={closeSidebar}
            >
              {" "}
              Code of Conduct
            </NavLink>
          </li>
        </ul>
      </div>

      {/* <div className="sidebar-section">
        <h6 className="sidebar_section_heading">
          {" "}
          <Ellipsis style={{ marginRight: "0.5rem" }} size={20} />
          Mics
        </h6>
        <ul>
          <li>
            {" "}
            <NavLink
              className="nav-link"
              activeClassName="active-link"
              to="/dev-snip-pro/document/en/under-development"
              onClick={closeSidebar}
            >
              Technical Details
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              className="nav-link"
              activeClassName="active-link"
              to="/dev-snip-pro/document/en/under-development"
              onClick={closeSidebar}
            >
              {" "}
              For Enterprise
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              className="nav-link"
              activeClassName="active-link"
              to="/dev-snip-pro/document/en/under-development"
              onClick={closeSidebar}
            >
              Promotions
            </NavLink>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default DocumentSidebar;
