import React from "react";
import points from "../../assets/icon/points.png";

const TitleDoc = ({ title }) => {
  return (
    <>
      <div>
        <h1 className="title_doc">
          {" "}
          <img style={{ width: "30px" }} src={points} alt="" srcset="" />
          {title}
        </h1>
      </div>
    </>
  );
};

export default TitleDoc;
