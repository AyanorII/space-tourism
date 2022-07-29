import React from 'react'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode
}

const DestinationName = ({children}: Props) => {
  return (
    <StyledName>{children}</StyledName>
  )
}

export default DestinationName

const StyledName = styled.h3`
  font-size: 3.5rem;
  line-height: 64px;
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 5rem;
    line-height: 5.75rem;
  }

  @media (min-width: 1200px) {
    font-size: 6.25rem;
    line-height: 7.125rem;
    text-align: left;
  }
`;
