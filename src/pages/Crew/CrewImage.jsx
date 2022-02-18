import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  place-items: center;
  border-bottom: 1px solid #ffffff30;
  /* width: 85%; */

  @media (min-width: 768px) {
    order: 3;
  }

  @media (min-width: 1440px) {
    grid-column: 2 / 3;
    grid-row: 1 / 4;
    align-self: end;
    justify-self: end;
    border: none;
  }
`;

const StyleImage = styled.img`
  /* max-width: 190px; */
  max-width: 75%;

  @media (min-width: 768px) {
    max-width: 100%;
    /* max-height: 532px; */
    max-height: 100%;
  }

  @media (min-width: 1440px) {
    max-height: unset;
  }
`;

function CrewImage(props) {
  const formattedName = props.name.replace(/\s+/g, "-").toLowerCase();
  return (
    <Container>
      <StyleImage
        src={require(`../../assets/crew/image-${formattedName}.png`)}
        alt={`${formattedName}`}
      />
    </Container>
  );
}

export default CrewImage;
