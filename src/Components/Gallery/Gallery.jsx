import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import BoxMask from "../Box/BoxMask";
import GalleryItem from "./GalleryItem";
import "./Gallery.scss";

const Gallery = (props) => {
  const divStyle = {
    backgroundImage: `url(${props.mainImage})`,
  };

  return (
    <Container fluid={true} className="gallery-container">
      <div className="headerContainer" style={divStyle}></div>
      <BoxMask header={props.mainHeader} text={props.mainText} />
      <div className="gallery-lower_container lower-section">
        <Container>
          <Row>
            {props.galleryItems.map((item, index) => {
              return (
                <Col md={4} key={Math.random(10)}>
                  <Link to={item.url}>
                    <GalleryItem image={item.imageSm} text={item.shortText} />
                  </Link>
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
