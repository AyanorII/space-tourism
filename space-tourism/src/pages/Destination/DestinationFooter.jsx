import React from "react";
import styled from "styled-components";

const Footer = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;
  }

  @media (min-width: 1440px) {
    align-self: start;
  }
`;

const Container = styled.div`
  place-items: center;
  text-transform: uppercase;
  text-align: center;
  display: grid;
  gap: 0.5rem;
`;

const Info = styled.p`
  font-size: 0.9375rem;
  letter-spacing: 2.36px;
  line-height: 2rem;
  color: ${props => props.theme.colors.main};
`;

const Data = styled.p`
  font-family: "Bellefair", sans-serif;
  font-size: 1.75rem;
  line-height: 2rem;
`;

function DestinationFooter(props) {
  return (
    <Footer>
      <Container>
        <Info>Avr. Distance</Info>
        <Data>{props.distance}</Data>
      </Container>
      <Container>
        <Info>Est. Travel Time</Info>
        <Data>{props.travel}</Data>
      </Container>
    </Footer>
  );
}

export default DestinationFooter;
