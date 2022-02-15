import React from "react";
import styled from "styled-components";
import RoundButton from "../../components/RoundButton";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  /* margin-top: 2.125rem; */
`;

function TechnologyButtons(props) {
  return (
    <Container>
      {props.data.map((item, index) => (
        <RoundButton
          key={index}
          onClick={props.onClick}
          className={item.name === props.active ? "active" : ""}
        >
          {index + 1}
        </RoundButton>
      ))}
    </Container>
  );
}

export default TechnologyButtons;
