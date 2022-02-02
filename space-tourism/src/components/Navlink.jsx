import React from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(Link)`
  color: ${(props) => props.theme.colors.white};
  letter-spacing: 2.7px;
  position: relative;
  left: 60px;
  text-transform: uppercase;
  line-height: 19px;

  @media (min-width: 768px) {
    left: 0;
    text-align: center;

    &.active::before {
      content: "";
      height: 3px;
      width: 100%;
      background-color: #FFF;
      bottom: -39px;
      left: 0;
    }
  }

  &::before {
    content: "0${(props) => props.index}";
    position: absolute;
    left: -30px;
    font-weight: 700;

    @media (min-width: 768px) {
      content: "";
      width: 0;
      left: 50%;
      transition: all 0.5s
    }
  }
`;

function NavLink(props) {
  return (
    <StyledNavLink to={props.page} index={props.index}>
      {props.children}
    </StyledNavLink>
  );
}

export default NavLink;
