import styled from "styled-components";
import { calcRem } from "../../styles/theme";

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {}

interface IButton {
  onClick: () => void;
}

const Button: React.FC<IButton> = ({ children, onClick }) => {
  return <StButton onClick={onClick}>{children}</StButton>;
};

export default Button;

const StButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${calcRem(12)};
  border: none;
  border-radius: ${calcRem(6)};
  padding: ${calcRem(14)};
  background-color: ${({ theme }) => `${theme.gray3}`};
  box-shadow: ${calcRem(3)} ${calcRem(3)} ${calcRem(10)} rgba(0, 0, 0, 0.3);
  color: ${({ theme }) => theme.white};
  font-family: "Poppins";
  font-size: ${calcRem(12)};
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => `${theme.gray4}`};
    color: ${({ theme }) => `${theme.orange1}`};
    transition: ease-in 0.2s;
  }
`;
