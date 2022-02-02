import React from 'react';
import styled from 'styled-components';

const Heading = styled.h2`
  text-transform: uppercase;
  font-size: 1rem;
  font-family: "Barlow Condensed", sans-serif;
  letter-spacing: 2.7px;
  position: relative;

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
