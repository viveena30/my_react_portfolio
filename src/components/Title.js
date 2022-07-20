import React from "react";
import "./Title.css";

const Title = ({ title, span }) => {
  return (
    <>
      <h2 className="section-title">
        {title}
        <span > {span} </span>
      </h2>
    </>
  );
};

export default Title;
