import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import Box from "../../Components/Box/Box";
import InfoStripe from '../../Components/InfoStripe/InfoStripe'

import productsList from "../../JsonLists/itemsList";

const ProductPage = () => {
  const location = useLocation();
  const [itemNumber, setItemNumber] = useState(location.pathname.split("/")[location.pathname.split("/").length - 1]);
  const [currentProduct, setCurrentProduct] = useState();
  useEffect(() => {
    setCurrentProduct(productsList.find((item) => `${item.id}` === itemNumber));
  }, []);
  return (
    <>
      {!!currentProduct ? (
        <Container fluid={true}>
          <Box withMask={false} image={currentProduct.imageLg} />
          <InfoStripe header={currentProduct.header}/>
          <div className="lower-section"></div>
        </Container>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default ProductPage;
