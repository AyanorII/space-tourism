import React from 'react'
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
`;

function TechnologyImage(props) {
  const slug = props.name.toLowerCase().replace(/ /g, '-');

  return (
    <Image src={require(`../../assets/technology/image-${slug}-landscape.jpg`)} />
  )
}

export default TechnologyImage
