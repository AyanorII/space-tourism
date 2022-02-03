import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 170px;

  @media (min-width: 768px) {
    width: 300px;
  }

  @media (min-width: 1440px) {
    width: 445px;
    grid-column: 1 / 2;
    grid-row: 2 / 5;
    justify-self: center;
  }
`;

// FIXME: Find a better way to handle the planet images.
// TODO: Add animation to the planet images.
function PlanetImage(props) {
  const name = props.name.toLowerCase();
  return (
    <Image src={require(`../../assets/destination/image-${name}.png`)} alt={props.name} />
  );
}

export default PlanetImage;
