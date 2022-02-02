import React from "react";
import styled from "styled-components";

const StyledPage = styled.div`
  background-image: url(${(props) => props.background.mobile});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: grid;
  place-items: center;

  @media (min-width: 768px) {
    background-image: url(${(props) => props.background.tablet});
  }

  @media (min-width: 1440px) {
    background-image: url(${(props) => props.background.desktop});
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
