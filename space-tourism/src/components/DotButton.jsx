import React, { useState } from "react";
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

// FIXME: Change button color to right crew member.
function DotButton({ person, selectedCrew, index, changeCrew, active }) {
  const [className, setClassName] = useState(
    active ? "active" : ""
  );

  const handleClick = () => {
    changeCrew(index);
    setClassName(person === selectedCrew ? "active" : "");
  };

  return <Button className={className} onClick={handleClick} />;
}

export default DotButton;
