import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (min-width: 768px) {
    margin-top: 1rem;
  }

  @media (min-width: 1440px) {
    align-self: end;
  }
`;

const Button = styled.button`
  outline: none;
  border: none;
  padding: 8px 4px;
  color: #fff;
  background: transparent;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: bold;
  letter-spacing: 2.36px;
  position: relative;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 3px;
    background: #fff;
    left: 50%;
    width: 0;
    transition: all 0.25s;
  }

  &.active::after {
    left: 0;
    width: 100%;
  }
`;

function PlanetButtons({ planets, changePlanet }) {
  const [activePlanet, setActivePlanet] = useState(planets[0].name);

  const handleClick = (e) => {
    changePlanet(e.target.innerHTML);
    setActivePlanet(e.target.innerHTML);
  };

  return (
    <Container>
      {planets.map((planet, index) => (
        <Button
          key={index}
          className={activePlanet === planet.name ? "active" : ""}
          onClick={handleClick}
        >
          {planet.name}
        </Button>
      ))}
    </Container>
  );
}

export default PlanetButtons;
