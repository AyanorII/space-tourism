import React from 'react'
import styled from 'styled-components';

type Props = {
  children: React.ReactNode
}

const CrewName = ({children}: Props) => {
  return (
    <StyledName>{children}</StyledName>
  )
}

export default CrewName

const StyledName = styled.h2`
  font-size: 1.5rem;
  line-height: 27px;
  text-transform: uppercase;
  margin-block: 0.5rem 1rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    line-height: 46px;
  }

  @media (min-width: 1200px) {
    font-size: 3.5rem;
    line-height: 64px;
  }
`;
