import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { calcRem } from "../../styles/theme";

interface IAppLayout extends React.HTMLAttributes<HTMLDivElement> {}

const AppLayout: React.FC<IAppLayout> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <StAppLayout>
      <StNav>
        <h1 onClick={() => navigate("/")}>
          <i>Portfolio</i>
        </h1>
        <StUl>
          <li>
            <i>About Me</i>
          </li>
          <li>
            <i>Skills</i>
          </li>
          <li>
            <i>Experience & Education</i>
          </li>
          <li>
            <i>Projects</i>
          </li>
        </StUl>
      </StNav>
      {children}
    </StAppLayout>
  );
};

export default AppLayout;

const StAppLayout = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  background-color: ${({ theme }) => `${theme.bgColor}`};
`;

const StNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${calcRem(20)} ${calcRem(80)};

  h1 {
    color: ${({ theme }) => `${theme.orange1}`};
    font-size: ${calcRem(32)};
    font-weight: 700;
    cursor: pointer;
  }
`;

const StUl = styled.ul`
  display: flex;
  gap: ${calcRem(16)};

  li {
    border-bottom: 1px solid transparent;
    i {
      font-family: "Ubuntu";
      font-size: ${calcRem(18)};
      font-weight: 300;
    }

    :hover,
    :focus {
      color: ${({ theme }) => theme.orange2};
      border-bottom: 1px solid ${({ theme }) => theme.orange2};
      transition: ease-in 0.1s;
    }
  }
`;
