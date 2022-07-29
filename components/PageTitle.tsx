import React from 'react'
import styled from 'styled-components';
import Paragraph from './Paragraph';

type Props = {
  children: React.ReactNode
  number: number
}

const PageTitle = ({children, number}: Props) => {
  return (
    <StyledTitle as="h1" number={number}>{children}</StyledTitle>
  )
}

export default PageTitle

const StyledTitle = styled(Paragraph)<Props>`
  text-transform: uppercase;
  font-family: "Barlow Condensed", sans-serif;
  letter-spacing: 2.7px;
  font-size: 1rem;
  line-height: 19px;
  text-align: center;

  &::before {
    content: "${props => "0" + props.number}";
    opacity: 0.5;
    font-weight: 500;
    margin-right: 1rem;
  }

  @media (min-width: 768px) {
    text-align: left;
    font-size: 1.25rem;
    line-height: 24px;
    letter-spacing: 3.4px;
  }

  @media (min-width: 1200px) {
    font-size: 1.75rem;
    line-height: 2.25rem;
    letter-spacing: 4.7px;
  }
`;
