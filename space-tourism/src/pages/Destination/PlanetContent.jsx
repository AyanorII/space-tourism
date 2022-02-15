import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  border-bottom: 1px solid #FFFFFF20;
  padding-bottom: 2rem;

  @media (min-width: 768px) {
    width: 100%;
    padding-bottom: 3rem;
  }

  @media (min-width: 1440px) {
    text-align: left;
    height: 100%;
  }
`;

const Planet = styled.h2`
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 5rem;
    line-height: 92px;
  }
`;

const Info = styled.p`
  font-family: Barlow, sans-serif;
  font-size: 0.9375rem;
  line-height: 2rem;
  color: ${props => props.theme.colors.main};
  letter-spacing: 1.2px;
  margin-top: 1rem;

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.75rem;
  }
`;

function PlanetContent(props) {
  return (
    <Container>
      <Planet>{props.name}</Planet>
      <Info>{props.info}</Info>
    </Container>
  );
}

export default PlanetContent;
