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
  
  &::before {
    content: "0${(props) => props.index}";
    position: absolute;
    left: -30px;
    font-weight: 700;
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
