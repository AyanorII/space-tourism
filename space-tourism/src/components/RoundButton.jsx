import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border: 2px solid #ffffff20;
  color: #fff;
  text-align: center;
  border-radius: 50%;
  font-size: 1rem;
  font-family: "Bellefair", sans-serif;
  outline: none;
  background-color: transparent;
  padding: 0.6875rem 1.125rem;
  transition: all 0.25s;
  cursor: pointer;

  &:hover {
    border-color: #ffffff;
  }

  &.active {
    background-color: #ffffff;
    color: #000;
  }
`;

function RoundButton(props) {
  return (
    <Button className={props.className} onClick={props.onClick}>
      {props.children}
    </Button>
  );
}

export default RoundButton;
