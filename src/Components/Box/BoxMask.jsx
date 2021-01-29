import React from "react";

import "./BoxMask.scss";

const BoxMask = (props) => {



  return (
    <div className="mask-container">
      <div className="textContainer">
        <h1 className="text-center mask-header">{props.header}</h1>
        <p className="text-center">{props.text}</p>
      </div>
    </div>
  );
};

export default BoxMask;
