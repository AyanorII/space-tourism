import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  max-height: 570px;

  &.landscape {
    @media (min-width: 1440px) {
      display: none;
    }
  }

  &.portrait {
    display: none;

    @media (min-width: 1440px) {
      display: block;
    }
  }

  @media (min-width: 1440px) {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
  }
`;

function TechnologyImage(props) {
  const slug = props.name.toLowerCase().replace(/ /g, "-");

  return (
    <>
      <Image
        className="landscape"
        src={require(`../../assets/technology/image-${slug}-landscape.jpg`)}
      />
      <Image
        className="portrait"
        src={require(`../../assets/technology/image-${slug}-portrait.jpg`)}
      />
    </>
  );
}

export default TechnologyImage;
