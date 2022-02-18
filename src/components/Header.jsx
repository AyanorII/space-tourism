import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import HamburgerButton from "./HamburgerButton";
import Nav from "./Nav";

const StyledHeader = styled.header`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  @media (min-width: 768px) {
    padding: 1.8125rem 2.125rem;
  }

  @media (min-width: 1440px) {
    padding-inline: 5% 0;
    padding-bottom: 0;
    top: 10px;
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <StyledHeader>
      <Logo />
      <HamburgerButton isMenuOpen={isMenuOpen} onClick={handleMenuClick} />
      <Nav isMenuOpen={isMenuOpen} closeMenu={closeMenu}/>
    </StyledHeader>
  );
}

export default Header;
