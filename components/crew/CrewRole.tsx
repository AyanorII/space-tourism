import React from 'react'
import styled from 'styled-components';

type Props = {
  children: React.ReactNode
}

const CrewRole = ({children}: Props) => {
  return (
    <StyledRole>{children}</StyledRole>
  )
}

export default CrewRole

const StyledRole = styled.p`
  color: #FFFFFF50;
  font-family: Bellefair, serif;
  text-transform: uppercase;
  margin-top: 2rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    line-height: 27px;
  }

  @media (min-width: 1200px) {
    font-size: 2rem;
    line-height: 36px;
  }
`;
