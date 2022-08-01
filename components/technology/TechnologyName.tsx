import React from 'react'
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
}

const TechnologyName = ({children}: Props) => {
  return (
    <StyledName>{children}</StyledName>
  )
}

export default TechnologyName

const StyledName = styled.h2`
  font-size: 1.5rem;
  line-height: 28px;
  text-transform: uppercase;
  text-align: center;
  margin-block: 0.25rem 0.5rem;

  @media (min-width: 768px) {
    margin-block: 0.5rem 1rem;
    font-size: 2.5rem;
    line-height: 45px;
  }

  @media (min-width: 1200px) {
    font-size: 3.5rem;
    line-height: 4rem;
    text-align: left;
  }
`;
