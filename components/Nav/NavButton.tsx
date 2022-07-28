import Image from 'next/image';
import React from 'react'
import styled from 'styled-components'
import hamburgerIcon from "../../public/images/shared/icon-hamburger.svg";
import closeIcon from "../../public/images/shared/icon-close.svg";

type Props = {
  open: boolean
  onClick: () => void
}

const NavButton = ({open, onClick}: Props) => {

  return (
    <StyledButton onClick={onClick}>
      <Image src={open ? closeIcon : hamburgerIcon} alt="menu button" />
    </StyledButton>
  );
}

export default NavButton


export const StyledButton = styled.button`
  position: relative;
  z-index: 100;
`;
