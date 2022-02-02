import React, { useState } from "react";
import styled from "styled-components";
import bgMobile from "../../assets/destination/background-destination-mobile.jpg";
import bgTablet from "../../assets/destination/background-destination-tablet.jpg";
import bgDesktop from "../../assets/destination/background-destination-desktop.jpg";
import Page from "../../components/Page";
import PageHeading from "../../components/PageHeading";
import PlanetImage from "./PlanetImage";
import data from "../../data/data.json";
import PlanetButtons from "./PlanetButton";
import PlanetContent from "./PlanetContent";
import DestinationFooter from "./DestinationFooter";

const background = {
  mobile: bgMobile,
  tablet: bgTablet,
  desktop: bgDesktop,
};

const DestinationPage = styled(Page)`
  padding-top: 5.5rem;
  row-gap: 2rem;
  padding-bottom: 3.625rem;
  height: 100%;
`;

function Destination() {
  const [planet, setPlanet] = useState(data.destinations[0]);

  const changePlanet = (planet) => {
    let activePlanet = data.destinations.filter((p) => p.name === planet)[0];
    setPlanet(activePlanet);
  };

  return (
    <DestinationPage background={background}>
      <PageHeading index={1}>Pick your destination</PageHeading>
      <PlanetImage src={planet.images.png} name={planet.name} />
      <PlanetButtons planets={data.destinations} changePlanet={changePlanet} />
      <PlanetContent name={planet.name} info={planet.description} />
      <DestinationFooter distance={planet.distance} travel={planet.travel}/>
    </DestinationPage>
  );
}

export default Destination;
