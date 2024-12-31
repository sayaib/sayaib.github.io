import React from "react";
import nav from "../../assets/icon/nav.png";
import { TableOfContents } from "lucide-react";

const NavHub = () => {
  return (
    <>
      <div>
        <h2
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <img
            style={{ width: "30px", marginRight: "0.5rem" }}
            src={nav}
            alt=""
            srcset=""
          />{" "} */}
          <TableOfContents size={25} strokeWidth={3} />
          <span style={{ color: "#FD8B00", margin: "0 0.5rem" }}>
            Navigation
          </span>{" "}
          <span style={{ color: "#FD8B00" }}> Hub</span>
        </h2>
      </div>
    </>
  );
};

export default NavHub;
