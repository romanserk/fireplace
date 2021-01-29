import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import BoxMask from "../Box/BoxMask";
import GalleryItem from "./GalleryItem";
import "./Gallery.scss";

const Gallery = (props) => {
  const divStyle = {
    backgroundImage: `url(${props.mainImage})`,
  };
  const divStyle1 = {
    height: "100vh",
    width: "100vw",
    background: "white",
    position: "relative",
  };

  return (
    <Container fluid={true} className="gallery-container">
      <div className="headerContainer" style={divStyle}>
      </div>
      <BoxMask header={props.mainHeader} text={props.mainText}/>
      <div style={divStyle1} className="gallery-lower_container">
        <Container>
          <Row>
            {props.galleryItems.map((item, index) => {
              return (
                <Col md={4} key={Math.random(10)}>
                  <GalleryItem image={item.image} text={item.text} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </Container>
  );
};

export default Gallery;
