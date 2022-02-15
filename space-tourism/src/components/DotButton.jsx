import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #fff;
  opacity: 0.3;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  transition: all 0.35s ease;
  cursor: pointer;

  &.active {
    opacity: 1;
  }
`;

function DotButton({ index, changeCrew, className }) {
  const handleClick = () => {
    changeCrew(index);
  };

  return <Button className={className} onClick={handleClick} />;
}

export default DotButton;
