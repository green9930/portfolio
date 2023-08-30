import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SiGithub } from "react-icons/si";
import { SlArrowUpCircle } from "react-icons/sl";
import { MOBILE_W, TABLET_W, calcRem } from "../../styles/theme";
import { TargetType } from "../../pages/HomePage";
import { isDesktop } from "../../config";

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
        <StGithub
          onClick={() => window.open("https://github.com/green9930", "_blank")}
        >
          <SiGithub />
          <span>green9930</span>
        </StGithub>
      </StFooter>
      {isDesktop ? (
        <StScrollToTop onClick={scrollToTop} name="scroll to top">
          <SlArrowUpCircle />
        </StScrollToTop>
      ) : null}
    </StAppLayout>
  );
};

export default AppLayout;

const StAppLayout = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  background-color: ${({ theme }) => `${theme.bgColor}`};

  @media screen and (max-width: ${TABLET_W}px) {
    width: 100vw;
  }

  @media screen and (max-width: ${MOBILE_W}px) {
    width: 100%;
  }
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

  @media screen and (max-width: ${TABLET_W}px) {
    gap: ${calcRem(8)};
    padding: ${calcRem(20)} ${calcRem(40)};
    h1 {
      font-size: ${calcRem(24)};
    }
  }

  @media screen and (max-width: ${MOBILE_W}px) {
    flex-direction: column;
    padding: ${calcRem(20)} ${calcRem(24)};
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

    :hover {
      color: ${({ theme }) => theme.orange2};
      border-bottom: 1px solid ${({ theme }) => theme.orange2};
      transition: ease-in 0.1s;
    }
  }

  @media screen and (max-width: ${TABLET_W}px) {
    li {
      font-size: ${calcRem(14)};
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
  height: ${calcRem(140)};
  padding: ${calcRem(30)} 0 ${calcRem(12)} 0;
  cursor: default;

  @media screen and (max-width: ${TABLET_W}px) {
    height: ${calcRem(100)};
    padding: ${calcRem(12)} 0;

    p {
      font-size: ${calcRem(12)};
    }
  }
`;

const StGithub = styled.div`
  display: flex;
  align-items: center;
  gap: ${calcRem(4)};
  color: ${({ theme }) => theme.orange3};
  cursor: pointer;

  span {
    font-size: ${calcRem(14)};
  }
  svg {
    width: ${calcRem(14)};
    height: ${calcRem(14)};
  }

  @media screen and (max-width: ${TABLET_W}px) {
    span {
      font-size: ${calcRem(12)};
    }

    svg {
      width: ${calcRem(12)};
      height: ${calcRem(12)};
    }
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
