import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
};

const DestinationTab = ({ children, onClick, className }: Props) => {
  return (
    <StyledTab onClick={onClick} className={className || ""}>
      {children}
    </StyledTab>
  );
};

export default DestinationTab;

const StyledTab = styled.button`
  position: relative;
  text-transform: uppercase;
  color: ${(props) =>
    props.className === "active"
      ? props.theme.color.light
      : props.theme.color.primary};
  font-family: "Barlow Condensed", sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 2.7px;
  padding-bottom: 0.5rem;

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    bottom: 0;
    left: 50%;
    transition: all 0.25s;
  }

  &.active::after {
    background-color: ${(props) => props.theme.color.light};
    left: 0;
    width: 100%;
  }

  &:not(.active):hover::after {
    left: 0;
    width: 100%;
    background-color: ${(props) => props.theme.color.light}75;
  }
`;
