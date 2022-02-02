import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 170px;
  height: 170px;
`;

// FIXME: Find a better way to handle the planet images.
function PlanetImage(props) {
  const name = props.name.toLowerCase();
  return (
    <Image src={require(`../../assets/destination/image-${name}.png`)} alt={props.name} />
  );
}

export default PlanetImage;
