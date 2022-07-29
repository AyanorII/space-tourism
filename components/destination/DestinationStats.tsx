import React from 'react'
import styled from 'styled-components';
import Paragraph from '../Paragraph';

type Props = {
  distance: string;
  travelTime: string;
}

const DestinationStats = ({distance, travelTime}: Props) => {
  return (
    <Stats>
      <Info>
        <Paragraph textTransform='uppercase' letterSpacing='2.3px'>Distance</Paragraph>
        <StyledStat>{distance}</StyledStat>
      </Info>
      <Info>
        <Paragraph textTransform='uppercase' letterSpacing='2.3px'>Travel time</Paragraph>
        <StyledStat>{travelTime}</StyledStat>
      </Info>
    </Stats>
  )
}

export default DestinationStats

const Stats = styled.div`
  border-top: 1px solid ${(props) => props.theme.color.light}20;
  padding-block: 2rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  margin-top: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const StyledStat = styled.p`
  font-size: 1.75rem;
  line-height: 2rem;
  text-transform: uppercase;
  font-family: Bellefair, cursive;
`;
