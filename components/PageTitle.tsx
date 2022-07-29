import React from 'react'
import styled from 'styled-components';
import Paragraph from './Paragraph';

type Props = {
  children: React.ReactNode
  number: number
}

const PageTitle = ({children, number}: Props) => {
  return (
    <StyledTitle as="h2" number={number}>{children}</StyledTitle>
  )
}

export default PageTitle

const StyledTitle = styled(Paragraph)<Props>`
  text-transform: uppercase;
  font-family: "Barlow Condensed", sans-serif;
  letter-spacing: 2.7px;
  text-align: center;

  &::before {
    content: "${props => "0" + props.number}";
    opacity: 0.5;
    font-weight: 500;
    margin-right: 1rem;
  }

  @media (min-width: 768px) {
    text-align: left;
  }
`;
