import React from "react";
import styled from "styled-components";

const StyledPage = styled.div`
  background-image: url(${(props) => props.background.mobile});
  background-size: cover;
  background-repeat: no-repeat;
  display: grid;
  place-items: center;
  padding-top: 5.5rem;
  row-gap: 2rem;
  min-height: 100vh;

  @media (min-width: 768px) {
    background-image: url(${(props) => props.background.tablet});
    padding-inline: 10%;
    padding-top: 9rem;
  }

  @media (min-width: 1440px) {
    background-image: url(${(props) => props.background.desktop});
    padding-inline: 15%;
    padding-top: 9rem;
  }
`;

function Page({ children, background, className }) {
  return (
    <StyledPage background={background} className={className}>
      {children}
    </StyledPage>
  );
}

export default Page;
