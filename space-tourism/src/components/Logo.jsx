import React from "react";
import styled from "styled-components";
import src from "../assets/shared/logo.svg";

const Image = styled.img`
  max-width: 40px;
  height: 40px;
`;

function Logo() {
  return <Image src={src} alt="SpaceX logo" />;
}

export default Logo;
