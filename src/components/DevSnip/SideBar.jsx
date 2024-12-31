import React, { useState } from "react";
import { FaBars, FaHome, FaUserAlt, FaCog, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./SideBar.css";
import html from "../.././assets/icon/html.png";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
      <div className="top_section">
        <h1 className="logo">{isOpen ? "Logo" : ""}</h1>
        <FaBars className="menu_icon" onClick={toggleSidebar} />
      </div>
      <div className="menu_items">
        <NavLink to="" className="menu_link">
          <img src={html} alt="" srcset="" />{" "}
          {isOpen && <span>HTML Snippets</span>}
        </NavLink>
        <NavLink to="" className="menu_link">
          <img src={html} alt="" srcset="" /> {isOpen && <span>Profile</span>}
        </NavLink>
        <NavLink to="" className="menu_link">
          <img src={html} alt="" srcset="" /> {isOpen && <span>Settings</span>}
        </NavLink>
        <NavLink to="" className="menu_link">
          <img src={html} alt="" srcset="" /> {isOpen && <span>Logout</span>}
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
