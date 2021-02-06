import React from "react";
import { Container } from "react-bootstrap";

import GalleryLower from "./GalleryLower";
import "./Gallery.scss";

const GallerySearch = ({ galleryItems, searchText }) => {
  return (
    <Container fluid={true} className="gallery-container search-gallery-container">
      <div className="page-header-stripe">
        <p className="search-results">תוצאות חיפוש</p>
        <h1 className="page-header-stripe-text">{searchText}</h1>
      </div>
      <GalleryLower galleryItems={galleryItems} />
    </Container>
  );
};

export default GallerySearch;
