import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  width: 90%;
  align-self: start;
  order: 1;

  @media (min-width: 1440px) {
    text-align: left;
    align-self: center;
    align-self: end;
  }
`;

const Role = styled.h4`
  color: #ffffff50;
  font-size: 1rem;
  line-height: 18px;
  text-transform: uppercase;
  font-family: "Bellefair", sans-serif;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    line-height: 26px;
  }

  @media (min-width: 1440px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const Name = styled.h3`
  font-size: 1.5rem;
  line-height: 27px;
  text-transform: uppercase;
  font-family: "Bellefair", sans-serif;
  font-weight: 400;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 46px;
  }

  @media (min-width: 1440px) {
    font-size: 3.5rem;
    line-height: 4rem;
  }
`;

const Bio = styled.p`
  font-size: 0.9375rem;
  line-height: 25px;
  color: ${(props) => props.theme.colors.main};
  letter-spacing: 1px;
  font-family: Barlow, sans-serif;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 28px;
  }

  @media (min-width: 1440px) {
    line-height: 2rem;
  }
`;

function CrewInfo({ role, name, bio }) {
  return (
    <Container>
      <Role>{role}</Role>
      <Name>{name}</Name>
      <Bio>{bio}</Bio>
    </Container>
  );
}

export default CrewInfo;
