import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Container from "../components/Container";
import ExploreButton from "../components/ExploreButton";
import Paragraph from "../components/Paragraph";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Space Tourism</title>
        <meta name="description"></meta>
      </Head>
      <Container>
        <Hero>
          <Content>
            <StyledParagraph textTransform="uppercase" letterSpacing="2.7px">
              So, you want to go to
            </StyledParagraph>
            <MainHeading>Space</MainHeading>
            <Paragraph>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </Paragraph>
          </Content>
          <ExploreButton />
        </Hero>
      </Container>
    </>
  );
};

export default Home;

const MainHeading = styled.h1`
  font-size: 5rem;
  line-height: 100px;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 9.375rem;
    line-height: 180px;
  }

  @media (min-width: 1200px) {
    line-height: 200px;
    text-align: left;
  }
`;

const StyledParagraph = styled(Paragraph)`
  line-height: 20px;

  @media (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.25rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.75rem;
    line-height: 2.0625rem;
  }
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const Content = styled.div`
  margin-bottom: 10vh;
`;
