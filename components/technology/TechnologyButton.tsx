import styled from "styled-components";

type Props = {
  number: number;
  onClick: () => void;
  className: string;
};

const TechnologyButton = ({ number, onClick, className }: Props) => {
  return (
    <StyledButton onClick={onClick} className={className}>
      {number}
    </StyledButton>
  );
};

export default TechnologyButton;

const StyledButton = styled.button`
  border-radius: 50%;
  border: 1px solid #FFFFFF30;
  width: 40px;
  height: 40px;
  background-color: ${(props) =>
    props.className === "active" ? "#FFF" : "transparent"};
  color: ${(props) =>
    props.className === "active" ? props.theme.color.dark : "#FFF"};
  display: grid;
  place-items: center;
  font-family: Bellefair, serif;
  font-size: 1rem;
  transition: all 0.25s;

  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }

  @media (min-width: 1200px) {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }
`;
