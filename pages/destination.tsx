import { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import Container from "../components/Container";
import DestinationImage from "../components/destination/DestinationImage";
import DestinationName from "../components/destination/DestinationName";
import DestinationStats from "../components/destination/DestinationStats";
import DestinationTab from "../components/destination/DestinationTab";
import PageTitle from "../components/PageTitle";
import Paragraph from "../components/Paragraph";
import data from "../data.json";
import { Destination as DestinationInterface } from "../lib/types";

const DESTINATIONS = ["Moon", "Mars", "Europa", "Titan"];

const DESTINATIONS_DATA: DestinationInterface[] = data.destinations.filter(
  (dest) => DESTINATIONS.includes(dest.name)
);

const Destination: NextPage = () => {
  const [destination, setDestination] = useState(DESTINATIONS_DATA[0]);

  const handleTabClick = (destination: DestinationInterface) => {
    setDestination(destination);
  };

  const { name, images, description, travel, distance } = destination;

  return (
    <Container>
      <PageTitle number={1}>Destination</PageTitle>
      <Content>
        <DestinationImage src={images.png} alt={name} />
        <div>
          <Tabs>
            {DESTINATIONS_DATA.map((dest, index) => {
              return (
                <DestinationTab
                  key={index}
                  className={destination === dest ? "active" : ""}
                  onClick={() => handleTabClick(dest)}
                >
                  {dest.name}
                </DestinationTab>
              );
            })}
          </Tabs>
          <DestinationName>{name}</DestinationName>
          <Paragraph>{description}</Paragraph>
          <DestinationStats travelTime={travel} distance={distance} />
        </div>
      </Content>
    </Container>
  );
};

export default Destination;

const Content = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  @media (min-width: 768px) {
    margin-top: 3.75rem;
    gap: 2.875rem;
  }

  @media (min-width: 1200px) {
    margin-top: 4rem;
    flex-direction: row;
  }
`;

const Tabs = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1.25rem;

  @media (min-width: 1200px) {
    justify-content: flex-start;
  }
`;
