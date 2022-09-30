import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import Container from "../components/Container";
import PageTitle from "../components/PageTitle";
import Paragraph from "../components/Paragraph";
import TechnologyButton from "../components/technology/TechnologyButton";
import TechnologyImage from "../components/technology/TechnologyImage";
import TechnologyName from "../components/technology/TechnologyName";
import data from "../data.json";
import { Technology as TechnologyInterface } from "../lib/types";

const TECHNOLOGIES: TechnologyInterface[] = data.technology;

const Technology: NextPage = () => {
  const [technology, setTechnology] = useState(TECHNOLOGIES[0]);

  const handleTabClick = (tech: TechnologyInterface) => {
    setTechnology(tech);
  };

  const { name, images, description } = technology;

  return (
    <>
      <Head>
        <title>{name} | Technology</title>
      </Head>
      <div>
        <TitleContainer>
          <PageTitle number={3}>Space Launch 101</PageTitle>
        </TitleContainer>
        <Content>
          <ImageContainer>
            <TechnologyImage
              portraitSrc={images.portrait}
              landscapeSrc={images.landscape}
              alt={name}
            />
          </ImageContainer>
          {/*--------------------------- Tabs -------------------------------- */}
          <StyledContainer>
            <TabButtons>
              {TECHNOLOGIES.map((tech, index) => (
                <TechnologyButton
                  key={tech.name}
                  className={tech === technology ? "active" : ""}
                  number={index + 1}
                  onClick={() => handleTabClick(tech)}
                />
              ))}
            </TabButtons>
          </StyledContainer>
          {/*--------------------------- Tabs -------------------------------- */}
          {/*--------------------------- Info -------------------------------- */}
          <StyledContainer>
            <TechnologyInfo>
              <Paragraph textTransform="uppercase">
                The terminology...
              </Paragraph>
              <TechnologyName>{name}</TechnologyName>
              <Paragraph>{description}</Paragraph>
            </TechnologyInfo>
          </StyledContainer>
          {/*--------------------------- Info -------------------------------- */}
        </Content>
      </div>
    </>
  );
};

export default Technology;

const ImageContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  position: relative;

  @media (min-width: 768px) {
    margin-top: 3.75rem;
  }

  @media (min-width: 1200px) {
    width: 100%;
    margin-block: 0;
    order: 1;
    justify-self: end;
  }

  @media (min-width: 1440px) {
    height: 80%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;

  @media (min-width: 1200px) {
    height: 100%;
    text-align: left;
    display: grid;
    grid-template-columns: auto 1fr 1fr;
    width: 90%;
    margin-left: auto;
  }
`;

const TabButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (min-width: 1200px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const TechnologyInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    align-items: flex-start;
  }
`;

const StyledContainer = styled(Container)`
  display: grid;
  place-items: center;

  @media (min-width: 1200px) {
    margin-bottom: 5rem;
  }
`;

const TitleContainer = styled(Container)`
  height: auto;
`;
