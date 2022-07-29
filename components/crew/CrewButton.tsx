import styled from "styled-components";

type Props = {
  onClick: () => void;
  className: string;
};

const CrewButton = ({ onClick, className }: Props) => {
  return <StyledButton onClick={onClick} className={className} />;
};

export default CrewButton;

const StyledButton = styled.button`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: ${(props) =>
    props.className === "active" ? "#FFF" : "#FFFFFF40"};
  transition: all 0.25s;
`;
