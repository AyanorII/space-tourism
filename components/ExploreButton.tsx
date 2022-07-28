import Link from "next/link";
import styled from "styled-components";

const ExploreButton = () => {
  return (
    <Link href="/destination" passHref>
      <StyledLinkButton>Explore</StyledLinkButton>
    </Link>
  );
};

export default ExploreButton

const StyledLinkButton = styled.a`
  background-color: ${(props) => props.theme.color.light};
  border-radius: 50%;
  width: 150px;
  height: 150px;
  display: grid;
  place-items: center;
  color: ${(props) => props.theme.color.dark};
  text-transform: uppercase;
  font-size: 1.25rem;
  letter-spacing: 1.25px;
  font-family: "Bellefair", cursive;
  position: relative;

  &::before, &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: ${props => props.theme.color.light}40;
    border-radius: 50%;
    z-index: -1;
    opacity: 0;
    transition: all 0.3s;
  }

  &::before {
    box-shadow: 0 0 5px 2rem ${props => props.theme.color.light}30;
  }

  &::after {
    box-shadow: 0 0 20px 4rem ${props => props.theme.color.light}30;
    transition-delay: 0.05s;
  }

  &:hover {
    &::before, &::after {
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    width: 242px;
    height: 242px;
    font-size: 2rem;
    letter-spacing: 2px;
  }

  @media (min-width: 1200px) {
    width: 274px;
    height: 274px;
  }
`;
