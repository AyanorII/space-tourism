import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  border-bottom: 1px solid #FFFFFF20;
  padding-bottom: 2rem;
`;

const Planet = styled.h2`
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 400;
`;

const Info = styled.p`
  font-size: 0.9375rem;
  line-height: 2rem;
  color: ${props => props.theme.colors.main};
  letter-spacing: 1.2px;
  margin-top: 1rem;
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
