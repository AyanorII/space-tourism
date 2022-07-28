import React from 'react'
import styled from 'styled-components';

type Props = {
  children: React.ReactNode
}

const Container = ({children}: Props) => {
  return (
    <StyledContainer>{children}</StyledContainer>
  )
}

export default Container

const StyledContainer = styled.div`
  height: 100%;
  width: 87%;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    width: 77%;
  }
`;
