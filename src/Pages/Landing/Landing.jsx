import React from "react";
import {Container} from 'react-bootstrap';
import Box from '../../Components/Box/Box'
import BoxSlider from '../../Components/Box/BoxSlider'
import './Landing.scss'

const Landing = () => {
  return (
    <Container fluid={true}>
      <BoxSlider />
      <Box />
      <Box />
    </Container>
  );
};

export default Landing;
