import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SiGithub } from "react-icons/si";
import { SlArrowUpCircle } from "react-icons/sl";
import { calcRem } from "../../styles/theme";
import { TargetType } from "../../pages/HomePage";

interface IAppLayout extends React.HTMLAttributes<HTMLDivElement> {}
interface IAppLayout {
  getTarget: (name: TargetType) => void;
}

const AppLayout: React.FC<IAppLayout> = ({ getTarget, children }) => {
  const navigate = useNavigate();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <StAppLayout>
      <StNav>
        <h1 onClick={() => navigate("/")}>Bae Geuna</h1>
        <StUl>
          <li onClick={() => getTarget("aboutme")}>About Me</li>
          <li onClick={() => getTarget("skills")}>Skills</li>
          <li onClick={() => getTarget("experience")}>
            Experience & Education
          </li>
          <li onClick={() => getTarget("portfolio")}>Portfolio</li>
        </StUl>
      </StNav>
      {children}
      <StFooter>
        <p>Copyright © 2023 All rights reserved.</p>
        <div
          onClick={() => window.open("https://github.com/green9930", "_blank")}
        >
          <SiGithub />
          <span>green9930</span>
        </div>
      </StFooter>
      <StScrollToTop onClick={scrollToTop} name="scroll to top">
        <SlArrowUpCircle />
      </StScrollToTop>
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
  padding: ${calcRem(20)} ${calcRem(60)};

  h1 {
    color: ${({ theme }) => `${theme.orange1}`};
    font-family: "Inter";
    font-size: ${calcRem(32)};
    font-weight: 700;
    cursor: pointer;
  }
`;

const StUl = styled.ul`
  display: flex;
  gap: ${calcRem(20)};

  li {
    border-bottom: 1px solid transparent;
    cursor: pointer;
    font-family: "Ubuntu";
    font-size: ${calcRem(18)};
    font-weight: 300;

    :hover,
    :focus {
      color: ${({ theme }) => theme.orange2};
      border-bottom: 1px solid ${({ theme }) => theme.orange2};
      transition: ease-in 0.1s;
    }
  }
`;

const StFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${calcRem(10)};
  background-color: ${({ theme }) => `${theme.bgColor}`};
  height: ${calcRem(180)};
  padding: ${calcRem(80)} 0 ${calcRem(12)} 0;
  cursor: default;

  div {
    display: flex;
    align-items: center;
    gap: ${calcRem(4)};
    color: ${({ theme }) => theme.orange3};
    cursor: pointer;
  }
`;

const StScrollToTop = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${calcRem(80)};
  height: ${calcRem(80)};
  position: fixed;
  bottom: ${calcRem(40)};
  right: ${calcRem(40)};
  background-color: ${({ theme }) => theme.gray3};
  border: none;
  border-radius: 50%;

  svg {
    width: 100%;
    height: auto;
    color: ${({ theme }) => theme.orange1};
    transition: all ease-in 0.2s;
    :hover {
      color: ${({ theme }) => theme.orange2};
    }
  }
`;
