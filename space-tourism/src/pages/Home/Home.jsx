import React from "react";
import styled from "styled-components";
import bgMobile from "../../assets/home/background-home-mobile.jpg";
import bgTablet from "../../assets/home/background-home-tablet.jpg";
import bgDesktop from "../../assets/home/background-home-desktop.jpg";
import HomeButton from "./HomeButton";
import Page from "../../components/Page";

const background = {
  mobile: bgMobile,
  tablet: bgTablet,
  desktop: bgDesktop,
}

const Homepage = styled(Page)`
  @media (min-width: 1440px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Content = styled.div`
  text-align: center;
  width: 85%;
  align-self: end;

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 1440px) {
    align-self: center;
    position: relative;
    top: 150px;
    text-align: left;
  }
`;

const MainHeading = styled.h1`
  font-size: 1rem;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 300;
  letter-spacing: 0.1688rem;
  color: ${(props) => props.theme.colors.main};
  text-transform: uppercase;
  opacity: 0.8;

  @media (min-width: 768px) {
    font-size: 1.25rem;
    letter-spacing: 3.38px;
    line-height: 24px;
  }

  @media (min-width: 1440px) {
    font-size: 1.75rem;
    letter-spacing: 4.72px;
    line-height: 33px;
  }
`;

const BigSpace = styled.span`
  font-size: 5rem;
  font-family: "Bellefair", sans-serif;
  display: block;
  line-height: 6.25rem;
  margin-top: 1rem;
  opacity: 1;

  @media (min-width: 768px) {
    font-size: 9.375rem;
    line-height: 9.375rem;
  }

  @media (min-width: 768px) {
    line-height: 10.75rem;
  }
`;

const Paragraph = styled.p`
  font-family: Barlow, sans-serif;
  font-size: 0.9375rem;
  font-weight: 300;
  line-height: 1.5625rem;
  letter-spacing: 0.0625rem;
  color: ${(props) => props.theme.colors.main};
  margin-top: 1rem;
  opacity: 0.8;

  @media (min-width: 1440px) {
    font-size: 1.125rem;
    line-height: 2rem;
  }
`;

function Home() {
  return (
    <Homepage background={background}>
      <Content>
        <MainHeading>
          So, you want to travel to <BigSpace>space</BigSpace>
        </MainHeading>
        <Paragraph>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Paragraph>
      </Content>
      <HomeButton />
    </Homepage>
  );
}


export default Home;
