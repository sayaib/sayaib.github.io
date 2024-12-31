import React from "react";
import "./Header.css";
import { useTheme } from "../../context/ThemeContext";
import light from "../../assets/snippets/light.png";
import dark from "../../assets/snippets/dark.png";
import logo from "../../assets/snippets/logo.png";
import { SunDim, Moon } from "lucide-react";

import toast, { Toaster } from "react-hot-toast";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  console.log(theme);
  return (
    <>
      <div className="main_header">
        <Toaster />
        <div className="branding_img">
          <img src={logo} alt="" srcset="" />
          <h5 style={{ color: "#fff" }}>DevSnip Pro Developer Doc</h5>
        </div>
        <button
          className="toggle"
          onClick={() => {
            toggleTheme();

            theme === "light"
              ? toast("Hello Darkness!", {
                  icon: (
                    <Moon
                      size={20}
                      style={{ marginTop: "0.15rem", color: "#ffffff" }}
                    />
                  ),
                  duration: 1000,
                  style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                  },
                })
              : toast("Hello Brightness!", {
                  icon: (
                    <SunDim
                      size={20}
                      style={{ marginTop: "0.15rem", color: "#FD8B00" }}
                    />
                  ),
                  duration: 1000,
                  style: {
                    borderRadius: "10px",
                    background: "#fff",
                    color: "#333",
                  },
                });
          }}
          style={{
            background: `${theme === "dark" ? "#4f4f4f" : "#c4c0c0"}`,
          }}
        >
          <div
            className="btn_toggle"
            style={{
              marginLeft: `${theme === "light" ? "31px" : "3px"}`,
              background: `${theme === "dark" ? "black" : "#ffffff"}`,
            }}
          >
            {theme === "light" ? (
              <SunDim
                size={15}
                style={{ marginTop: "0.15rem", color: "#FD8B00" }}
              />
            ) : (
              <Moon
                size={15}
                style={{ marginTop: "0.15rem", color: "#ffffff" }}
              />
            )}
          </div>
        </button>
        {/* <button className="theme_button" onClick={toggleTheme}>
          {theme === "light" ? (
            <img src={dark} alt="" srcset="" />
          ) : (
            <img src={light} alt="" srcset="" />
          )}{" "}
        </button> */}
      </div>
    </>
  );
};

export default Header;
