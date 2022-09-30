import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import Container from "../components/Container";
import CrewButton from "../components/crew/CrewButton";
import CrewImage from "../components/crew/CrewImage";
import CrewName from "../components/crew/CrewName";
import CrewRole from "../components/crew/CrewRole";
import PageTitle from "../components/PageTitle";
import Paragraph from "../components/Paragraph";
import data from "../data.json";
import { Crew } from "../lib/types";

const CREW_MEMBERS: Crew[] = data.crew;

const CrewPage: NextPage = () => {
  const [crewMember, setCrewMember] = useState(CREW_MEMBERS[0]);

  const handleTabClick = (crew: Crew) => {
    setCrewMember(crew);
  };

  const { name, images, bio, role } = crewMember;

  return (
    <>
      <Head>
        <title>{role} | Crew</title>
      </Head>
    <Container>
      <PageTitle number={2}>Meet your Crew</PageTitle>
      <Content>
        <ImageContainer>
          <CrewImage src={images.png} alt={name} />
        </ImageContainer>
        <Tabs>
          {CREW_MEMBERS.map((member) => (
            <CrewButton
              key={member.name}
              onClick={() => handleTabClick(member)}
              className={member === crewMember ? "active" : ""}
            />
          ))}
        </Tabs>
        <CrewInfo>
          <CrewRole>{role}</CrewRole>
          <CrewName>{name}</CrewName>
          <Paragraph>{bio}</Paragraph>
        </CrewInfo>
      </Content>
    </Container>
    </>
  );
};

export default CrewPage;

const Content = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 0.5fr;
    column-gap: 5rem;
  }
`;

const CrewInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    align-items: flex-start;
  }
`;

const Tabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;

  @media (min-width: 1200px) {
    order: 1;
    align-self: start;
    justify-content: flex-start;
  }
`;

const ImageContainer = styled.div`
  border-bottom: 1px solid #ffffff20;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  @media (min-width: 768px) {
    order: 1
  }

  @media (min-width: 1200px) {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    position: relative;
    bottom: 5rem;
  }
`;
