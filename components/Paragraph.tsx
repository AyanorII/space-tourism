import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  textTransform?: "uppercase" | "lowercase" | "capitalize" | "none";
  letterSpacing?: string;
  className?: string;
  as?: React.ElementType;
};

const Paragraph = ({ children, textTransform, letterSpacing, className, as }: Props) => {
  return (
    <StyledParagraph
      textTransform={textTransform || "none"}
      letterSpacing={letterSpacing || "1.4px"}
      className={className || ""}
      as={as || "p"}
    >
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;

const StyledParagraph = styled.p<Props>`
  font-size: 0.9375rem;
  line-height: 25px;
  color: ${(props) => props.theme.color.primary};
  text-align: center;
  text-transform: ${(props) => props.textTransform};
  letter-spacing: ${props => props.letterSpacing};
  max-width: 65ch;

  @media (min-width: 768px) {
    font-size: 1rem;
    line-height: 28px;
  }

  @media (min-width: 1200px) {
    font-size: 1.125rem;
    line-height: 32px;
    text-align: left;
  }
`;
