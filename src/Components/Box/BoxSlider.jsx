import React, { useState, useEffect } from "react";
import "./BoxSlider.scss";
import styles from "./BoxSlider.module.css";

import fireplace1 from "../../images/fireplace1lg.jpg";
import fireplace2 from "../../images/fireplace2lg.jpg";
import fireplace3 from "../../images/fireplace3lg.jpg";
const slideImages = [fireplace1, fireplace2];

const divStyle = {
  backgroundImage: `url(${fireplace1})`,
};

const BoxSlider = () => {
  return (
    <div className="slider">
      {[fireplace1, fireplace2, fireplace3].map((img, index) => {
        return (
          <div
            className="slide"
            style={{
              backgroundImage: `url(${img})`,
            }}
            key={index}
          ></div>
        );
      })}
    </div>
  );
};

export default BoxSlider;
