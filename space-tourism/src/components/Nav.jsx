import React from "react";
import styled from "styled-components";
import NavLink from "./Navlink";

// FIXME: Find a way to make backdrop-filter work on Firefox.
const StyledNav = styled.nav`
  position: fixed;
  width: 65%;
  height: 100vh;
  top: 0;
  right: 0;
  transform: translateX(${(props) => (props.isMenuOpen ? 0 : "500px")});
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(18.8px);
  -webkit-backdrop-filter: blur(18.8px);
  transition: all 0.5s;
  display: grid;
  grid-template-rows: repeat(4, minmax(50px, 75px));
  align-items: center;
  padding-top: 150px;

  @media (min-width: 768px) {
    transform: unset;
    height: 98px;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, auto);
    padding: 0;
    width: 70%;
  }
`;

const pages = ["home", "destination", "crew", "technology"];

function Nav(props) {
  return (
    <StyledNav isMenuOpen={props.isMenuOpen}>
      {pages.map((page, index) => (
        <NavLink key={index} page={page} index={index}>
          {page}
        </NavLink>
      ))}
    </StyledNav>
  );
}

export default Nav;
