import React, { useState } from "react";
import styled from "styled-components";
import Page from "../../components/Page";
import bgMobile from "../../assets/crew/background-crew-mobile.jpg";
import bgTablet from "../../assets/crew/background-crew-tablet.jpg";
import bgDesktop from "../../assets/crew/background-crew-desktop.jpg";
import PageHeading from "../../components/PageHeading";
import CrewImage from "./CrewImage";
import data from "../../data/data.json";
import DotButton from "../../components/DotButton";
import CrewButtons from "./CrewButtons";
import CrewInfo from "./CrewInfo";

const background = {
  mobile: bgMobile,
  tablet: bgTablet,
  desktop: bgDesktop,
};

const StyledCrewPage = styled(Page)`
  padding-top: 5.5rem;
  grid-template-rows: auto 0.5fr auto 0.5fr;
  row-gap: 2rem;

  @media (min-width: 768px) {
    padding: 9rem 10% 0;
    height: 100%;
    grid-template-rows: auto 208px auto 532px;
  }

  @media (min-width: 1440px) {
    grid-template-rows: 50px 50% auto;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    padding-inline: 15%;
    padding-top: 7.5rem;
    justify-items: start;
    /* padding-bottom: 100px; */

    h2 {
      grid-column: 1 / 2;
    }
  }
`

function CrewPage() {
  const [crew, setCrew] = useState(data.crew[0]);

  const changeCrew = (index) => {
    setCrew(data.crew[index]);
  }

  return (
    <StyledCrewPage background={background}>
      <PageHeading index="2">Meet your crew</PageHeading>
      <CrewImage name={crew.name} />
      <CrewButtons>
        {data.crew.map((person, index) => (
          <DotButton
            key={index}
            person={person}
            selectedCrew={crew}
            changeCrew={changeCrew}
            index={index}
            active={person === crew}
          />
        ))}
      </CrewButtons>
      <CrewInfo role={crew.role} name={crew.name} bio={crew.bio}/>
    </StyledCrewPage>
  );
}

export default CrewPage;
