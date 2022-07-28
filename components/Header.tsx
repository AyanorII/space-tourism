import styled from "styled-components";
import Logo from "./Logo";
import Nav from "./Nav/Nav";

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  position: relative;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    padding-block: 0;
  }

  @media (min-width: 1200px) {
    padding: 2.5rem 3.4375rem;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 10rem;
      height: 1px;
      width: 32%;
      background-color: ${(props) => props.theme.color.light}20;
    }
  }
`;
