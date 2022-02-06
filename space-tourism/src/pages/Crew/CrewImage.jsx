import React from "react";
import styled from "styled-components";
import src from "../../assets/crew/image-douglas-hurley.png";

const Container = styled.div`
  display: grid;
  place-items: center;
  border-bottom: 1px solid #ffffff30;
  width: 85%;

  @media (min-width: 768px) {
    order: 3;
  }
`;

const StyleImage = styled.img`
  max-width: 190px;

  @media (min-width: 768px) {
    max-width: 100%;
    max-height: 532px;
  }
`;

// FIXME: Find a better way to handle the crew images.
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
