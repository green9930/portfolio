import React from "react";
import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import { RiCodeSSlashLine } from "react-icons/ri";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiStyledcomponents,
  SiRedux,
} from "react-icons/si";
import { calcRem } from "../styles/theme";

// React, TypeScript, JavaScript, HTML/CSS
// redux, react-query, recoil

const Skills = () => {
  return (
    <StSkills>
      <h2>Skills</h2>
      <StSkillList>
        <li>
          <StSkillWrapper>
            <FaReact />
            <span>React</span>
          </StSkillWrapper>
        </li>
        <li>
          <StSkillWrapper>
            <SiTypescript />
            <span>TypeScript</span>
          </StSkillWrapper>
        </li>
        <li>
          <StSkillWrapper>
            <SiJavascript />
            <span>JavaScript</span>
          </StSkillWrapper>
        </li>
        <li>
          <StSkillWrapper>
            <StIconWrapper>
              <SiHtml5 />
              <SiCss3 />
            </StIconWrapper>
            <span>HTML/CSS</span>
          </StSkillWrapper>
        </li>
        <StStyledComponentsLi>
          <StSkillWrapper>
            <SiStyledcomponents />
            <span>styled-components</span>
          </StSkillWrapper>
        </StStyledComponentsLi>
        <li>
          <StSkillWrapper>
            <SiRedux />
            <span>redux</span>
          </StSkillWrapper>
        </li>
        <li>
          <StSkillWrapper>
            <RiCodeSSlashLine />
            <span>react-query</span>
          </StSkillWrapper>
        </li>
        <li>
          <StSkillWrapper>
            <RiCodeSSlashLine />
            <span>recoil</span>
          </StSkillWrapper>
        </li>
      </StSkillList>
    </StSkills>
  );
};

export default Skills;

const StSkills = styled.div`
  height: 600px;
  background-color: ${({ theme }) => theme.gray2};

  h2 {
    padding: ${calcRem(40)} 0;
    color: ${({ theme }) => theme.orange1};
    text-align: center;
    font-family: "Inter";
    font-size: ${calcRem(30)};
    font-weight: 300;
  }
`;

const StSkillList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: ${calcRem(20)};
  padding: 0 ${calcRem(150)};

  li {
    background-color: ${({ theme }) => theme.gray3};
    box-shadow: ${calcRem(3)} ${calcRem(3)} ${calcRem(10)} rgba(0, 0, 0, 0.3);
    width: ${calcRem(170)};
    height: ${calcRem(170)};
    margin: 0 auto;
    padding: ${calcRem(10)};
    cursor: default;
  }
`;

const StSkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${calcRem(6)};
  width: 100%;
  height: 100%;
  background-color: inherit;
  border: 1px solid ${({ theme }) => theme.orange2};

  svg {
    width: ${calcRem(40)};
    height: auto;
  }

  span {
    display: inline-block;
    margin-top: ${calcRem(4)};
    font-size: ${calcRem(14)};
  }
`;

const StStyledComponentsLi = styled.li`
  span {
    font-size: ${calcRem(14)};
  }
`;

const StIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: ${calcRem(32)};
    height: auto;
  }
`;
