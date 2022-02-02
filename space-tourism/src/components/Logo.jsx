import React from "react";
import styled from "styled-components";
import src from "../assets/shared/logo.svg";

const Image = styled.img`
  max-width: 40px;
  height: 40px;

  @media (min-width: 768px) {
    max-width: 48px;
    height: 48px;
  }
`;

function Logo() {
  return <Image src={src} alt="SpaceX logo" />;
}

export default Logo;
