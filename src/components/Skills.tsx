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
import { MOBILE_W, TABLET_W, calcRem } from "../styles/theme";

// React, React Native, TypeScript, JavaScript, HTML/CSS
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
            <FaReact />
            <span>React Native</span>
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
  height: 100%;
  background-color: ${({ theme }) => theme.gray2};
  padding: ${calcRem(40)} 0;
  cursor: default;

  h2 {
    padding-bottom: ${calcRem(40)};
    color: ${({ theme }) => theme.orange1};
    text-align: center;
    font-family: "Inter";
    font-size: ${calcRem(30)};
    font-weight: 300;
  }

  @media screen and (max-width: ${TABLET_W}px) {
    height: 100%;
    padding: ${calcRem(28)} 0;

    h2 {
      padding-bottom: ${calcRem(28)};
      font-size: ${calcRem(28)};
    }
  }

  @media screen and (max-width: ${MOBILE_W}px) {
    padding: ${calcRem(24)} 0;

    h2 {
      padding-bottom: ${calcRem(24)};
      font-size: ${calcRem(28)};
    }
  }
`;

const StSkillList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${calcRem(20)};
  padding: 0 ${calcRem(150)};

  li {
    background-color: ${({ theme }) => theme.gray3};
    box-shadow: ${calcRem(3)} ${calcRem(3)} ${calcRem(10)} rgba(0, 0, 0, 0.3);
    width: ${calcRem(240)};
    height: ${calcRem(150)};
    margin: 0 auto;
    padding: ${calcRem(10)};
    /* width: ${calcRem(170)};
    height: ${calcRem(170)};
    margin: 0 auto;
    padding: ${calcRem(10)}; */
  }

  @media screen and (max-width: ${TABLET_W}px) {
    /* gap: ${calcRem(10)}; */
    padding: 0 ${calcRem(50)};

    li {
      width: ${calcRem(192)};
      height: ${calcRem(120)};
      padding: ${calcRem(8)};
    }
  }

  @media screen and (max-width: ${MOBILE_W}px) {
    grid-template-columns: 1fr;
    gap: ${calcRem(10)};
    padding: 0 ${calcRem(24)};

    li {
      width: 100%;
      height: ${calcRem(100)};
      padding: ${calcRem(8)};
    }
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

  @media screen and (max-width: ${TABLET_W}px) {
    svg {
      width: ${calcRem(28)};
    }
    span {
      font-size: ${calcRem(12)};
    }
  }

  @media screen and (max-width: ${MOBILE_W}px) {
    flex-direction: row;
    gap: ${calcRem(12)};

    svg {
      width: ${calcRem(28)};
    }

    span {
      font-size: ${calcRem(14)};
    }
  }
`;

const StStyledComponentsLi = styled.li`
  span {
    font-size: ${calcRem(14)};

    @media screen and (max-width: ${TABLET_W}px) {
      font-size: ${calcRem(14)};
    }
  }
`;

const StIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: ${calcRem(32)};
    height: auto;
    @media screen and (max-width: ${TABLET_W}px) {
      width: ${calcRem(28)};
    }
  }
`;
