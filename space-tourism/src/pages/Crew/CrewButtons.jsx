import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    order: 2;
  }
`

function CrewButtons(props) {
  return <Container>{props.children}</Container>;
}

export default CrewButtons;
