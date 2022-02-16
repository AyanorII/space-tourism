import React, { useState } from "react";
import styled from "styled-components";
import Page from "../../components/Page";
import bgMobile from "../../assets/technology/background-technology-mobile.jpg";
import bgTablet from "../../assets/technology/background-technology-tablet.jpg";
import bgDesktop from "../../assets/technology/background-technology-desktop.jpg";
import PageHeading from "../../components/PageHeading";
import TechnologyImage from "./TechnologyImage";
import data from "../../data/data.json";
import TechnologyButtons from "./TechnologyButtons";
import TechnologyContent from "./TechnologyContent";

const background = {
  mobile: bgMobile,
  tablet: bgTablet,
  desktop: bgDesktop,
};

const StyledPage = styled(Page)`
  align-items: start;
  grid-template-rows: auto auto auto 1fr;
  row-gap: 2rem;

  @media (min-width: 768px) {
    padding-inline: 0;
    row-gap: 3.75rem;
    padding-bottom: 6.0625rem;
  }
`;

const StyledPageHeading = styled(PageHeading)`

  @media (min-width: 768px) {
    margin-left: 10%;
  }
`;

function TechnologyPage() {
  const [technology, setTechnology] = useState(data.technology[0]);

  const handleTechnology = (e) => {
    const index = parseInt(e.target.innerHTML, 10) - 1;
    setTechnology(data.technology[index]);
  };

  return (
    <StyledPage background={background}>
      {console.log(StyledPageHeading)}
      <StyledPageHeading index="3">Space Launch 101</StyledPageHeading>
      <TechnologyImage name={technology.name} />
      <TechnologyButtons
        data={data.technology}
        onClick={handleTechnology}
        active={technology.name}
      />
      <TechnologyContent
        name={technology.name}
        description={technology.description}
      />
    </StyledPage>
  );
}

export default TechnologyPage;
