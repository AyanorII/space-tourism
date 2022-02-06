import React from 'react';
import styled from 'styled-components';

const Heading = styled.h2`
  text-transform: uppercase;
  font-size: 1rem;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 400;
  letter-spacing: 2.7px;
  position: relative;
  left: 10px;
  order: 0;

  @media (min-width: 768px) {
    font-size: 1.25rem;
    justify-self: start;
  }

  @media (min-width: 1440px) {
    grid-column: 1 / 3;
    align-self: end;
  }

  &::before {
    content: "0${props => props.index}";
    position: absolute;
    left: -28px;
    top: 0;
    opacity: 0.25;
    color: white;
  }
`;

function PageHeading({index, children}) {
  return <Heading index={index}>{children}</Heading>;
}

export default PageHeading;
