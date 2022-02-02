import React from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

// FIXME: Make white bar be the exact same width as the text
const StyledNavLink = styled(Link)`
  color: ${(props) => props.theme.colors.white};
  letter-spacing: 2.7px;
  position: relative;
  left: 60px;
  text-transform: uppercase;
  line-height: 19px;

  &::before {
    content: "0${(props) => props.index}";
    position: absolute;
    left: -30px;
    font-weight: 700;
    transition: all 0.5s;

    @media (min-width: 768px) {
      display: none;
    }

    @media (min-width: 1440px) {
      display: initial;
      position: relative;
      left: -10px;
    }
  }

  @media (min-width: 768px) {
    left: 0;
    text-align: center;

    &.active::after {
      content: "";
      positioN: absolute;
      height: 4px;
      width: 100%;
      background-color: #fff;
      bottom: -39px;
      left: 0;
    }
  }
`;

function NavLink(props) {
  return (
    <StyledNavLink to={props.page} index={props.index} onClick={props.onClick}>
      {props.children}
    </StyledNavLink>
  );
}

export default NavLink;
