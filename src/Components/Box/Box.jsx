import React from "react";
import "./Box.scss";
import styles from "./Box.module.css";
import {Image} from 'react-bootstrap';
import fireplace1 from '../../images/fireplace1lg.jpg'
const Box = (props) => {

    const divStyle = {
        backgroundImage: `url(${fireplace1})`,
        backgroundSize: 'cover'
      };
  return (
    <div className={styles.box} style={divStyle}>
    </div>
  );
};

export default Box;
