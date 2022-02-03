import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled(NavLink)`
  background: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.dark};
  text-transform: uppercase;
  border-radius: 50%;
  font-size: 1.25rem;
  font-family: "Bellefair", sans-serif;
  letter-spacing: 1.25px;
  line-height: 23px;
  padding: 4.25rem 1.75rem;
  border: none;
  outline: none;

  @media (min-width: 768px) {
    font-size: 2rem;
    letter-spacing: 2px;
    line-height: 36px;
    padding: 6.25rem 2.5rem;
  }

  @media (min-width: 1200px) {
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: 0px 0 0 50px rgba(217, 217, 217, 0.10);
    }
  }

  @media (min-width: 1440px) {
    align-self: end;
    position: relative;
    padding: 17% 12%;
    bottom: 120px;
  }
`;

function HomeButton(props) {
  return <Button to="/destination">Explore</Button>;
}

export default HomeButton;
