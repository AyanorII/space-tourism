import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.main};
  width: 85%;

  @media (min-width: 768px) {
    padding-inline: 10%;
  }

  @media (min-width: 1440px) {
    text-align: left;
    padding: 0;
  }
`;

const Terminology = styled.span`
  font-family: "Barlow Condensed", sans-serif;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 2.4px;
  line-height: 1rem;

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.25rem;
    letter-spacing: 2.7px;
  }
  `;

const Title = styled.h1`
  font-family: "Bellefair", sans-serif;
  font-size: 1.5rem;
  line-height: 27.5px;
  text-transform: uppercase;
  color: #FFF;
  font-weight: 400;
  margin-block: 0.5625rem 1rem;

  @media (min-width: 768px) {
    margin-top: 1.25rem;
    font-size: 2.5rem;
    line-height: 2.875rem;
  }

  @media (min-width: 1440px) {
    font-size: 3.5rem;
    line-height: 4rem;
  }
`;

const Description = styled.p`
  font-family: "Barlow", sans-serif;
  font-size: 0.9375rem;
  line-height: 1.5rem;
  color: ${props => props.theme.colors.main};
  letter-spacing: 1px;

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 1.75rem;
  }

  @media (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 2rem;
  }
`;

function TechnologyContent(props) {
  return (
    <Container>
      <Terminology>The Terminology...</Terminology>
      <Title>{props.name}</Title>
      <Description>{props.description}</Description>
    </Container>
  );
}

export default TechnologyContent
