import React from "react";
import styled from "styled-components";
import Hamburger from "../assets/shared/icon-hamburger.svg";
import Cross from "../assets/shared/icon-close.svg";

const Button = styled.button`
  background-image: url(${(props) => (props.isMenuOpen ? Cross : Hamburger)});
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  outline: none;
  width: 24px;
  height: 21px;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    display: none;
  }
`;

function HamburgerButton(props) {
  return <Button isMenuOpen={props.isMenuOpen} onClick={props.onClick} />;
}

export default HamburgerButton;
