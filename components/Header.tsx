import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Nav from './Nav/Nav'

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  position: relative;
`;
