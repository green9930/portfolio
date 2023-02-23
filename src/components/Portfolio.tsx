import React, { useState } from "react";
import styled, { css } from "styled-components";
import { SiGithub } from "react-icons/si";
import { calcRem } from "../styles/theme";
import ThumbnailChackCheck from "../assets/images/resize_thumbnail_chackcheck.png";
import ThumbnailCmw from "../assets/images/resize_thumbnail_cmw.jpg";
import ThumbnailPwa from "../assets/images/resize_thumbnail_pwa.jpg";
import ThumbnailSamstagram from "../assets/images/resize_thumbnail_samstagram.jpg";

type portfolioListType = {
  title: string;
  skills: string[];
  isPrivate: boolean;
  github: string;
  thumbnail: string;
};

const DISABLE_MESSAGE = "I'm sorry, this project is in private repository";

const PORTFOLIO_LIST: portfolioListType[] = [
  {
    title: "Community Wall",
    skills: ["React", "TypeScript", "redux-toolkit", "microsoft/signalr"],
    isPrivate: true,
    github: DISABLE_MESSAGE,
    thumbnail: ThumbnailCmw,
  },
  {
    title: "A2HS",
    skills: ["React", "TypeScript", "redux-toolkit", "microsoft/signalr"],
    isPrivate: true,
    github: DISABLE_MESSAGE,
    thumbnail: ThumbnailPwa,
  },
  {
    title: "CHACKCHECK",
    skills: ["React", "react-query", "recoil", "styled-components"],
    isPrivate: false,
    github: "https://github.com/green9930/hanghae_8D_FE",
    thumbnail: ThumbnailChackCheck,
  },
  {
    title: "Samstagram",
    skills: ["React", "redux-toolkit", "styled-components"],
    isPrivate: false,
    github: "https://github.com/samstagram/samstagram_fe",
    thumbnail: ThumbnailSamstagram,
  },
  {
    title: "Portfolio",
    skills: ["React", "TypeScript", "styled-components", "gh-pages"],
    isPrivate: false,
    github: "https://github.com/green9930/portfolio",
    thumbnail: ThumbnailPwa,
  },
];

const Portfolio = () => {
  const [selectedCard, setSelectedCard] = useState("");

  return (
    <StPortfolio>
      <h2>Portfolio</h2>
      <StCardList>
        {PORTFOLIO_LIST.map((val, idx) => {
          const { title, skills, isPrivate, github, thumbnail } = val;
          const isLeft = idx % 2 === 0;
          return (
            <StCard key={title}>
              <StCardContent isLeft={isLeft}>
                <StCardText isLeft={isLeft} isPrivate={isPrivate}>
                  <h3>{title}</h3>
                  <span
                    onClick={() => (isPrivate ? null : window.open(github))}
                  >
                    {isPrivate ? (
                      `${github}`
                    ) : (
                      <>
                        <SiGithub />
                        visit repository
                      </>
                    )}
                  </span>
                  <StDetailBtn
                    onClick={() =>
                      title === selectedCard
                        ? setSelectedCard("")
                        : setSelectedCard(title)
                    }
                  >
                    {title === selectedCard ? "Go Back" : "See Detail"}
                  </StDetailBtn>
                </StCardText>
              </StCardContent>
              <StCardBackground isLeft={isLeft}>
                <img src={thumbnail} alt={title} />
                {isLeft ? (
                  <StDivLeft>
                    <StDiv3></StDiv3>
                    <StDiv4></StDiv4>
                  </StDivLeft>
                ) : (
                  <StDivRight>
                    <StDiv1></StDiv1>
                    <StDiv2></StDiv2>
                  </StDivRight>
                )}
              </StCardBackground>
              <StDetail isSelected={title === selectedCard} isLeft={isLeft}>
                <StBackground
                  isSelected={title === selectedCard}
                ></StBackground>
                <StDetailContainer
                  isSelected={title === selectedCard}
                  isLeft={isLeft}
                >
                  <h4>Skills</h4>
                  <StSkillList
                    isSelected={title === selectedCard}
                    isLeft={isLeft}
                  >
                    {skills.map((val) => {
                      return <li key={val}>{val}</li>;
                    })}
                  </StSkillList>
                </StDetailContainer>
              </StDetail>
            </StCard>
          );
        })}
      </StCardList>
    </StPortfolio>
  );
};

export default Portfolio;

const StPortfolio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.gray2};
  padding-bottom: ${calcRem(100)};

  h2 {
    padding: ${calcRem(40)} 0;
    color: ${({ theme }) => theme.orange1};
    text-align: center;
    font-family: "Inter";
    font-size: ${calcRem(30)};
    font-weight: 300;
  }
`;

const StCardList = styled.ul``;

const StCard = styled.li`
  display: flex;
  width: ${calcRem(600)};
  height: auto;
  position: relative;
  margin-bottom: ${calcRem(12)};
  border: 1px solid transparent;
  cursor: default;
`;

const StCardContent = styled.div<{ isLeft: boolean }>`
  width: 100%;
  position: absolute;
  top: 60%;
  left: ${({ isLeft }) => (isLeft ? "-75%" : "-25%")};
  transform: translate(50%, -50%);
  z-index: 11;
`;

const StCardText = styled.div<{ isLeft: boolean; isPrivate: boolean }>`
  text-align: ${({ isLeft }) => (isLeft ? "left" : "right")};

  h3 {
    margin-bottom: ${calcRem(10)};
    color: ${({ theme }) => theme.orange2};
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    font-family: "Archivo";
    font-size: ${calcRem(30)};
    font-weight: 300;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: ${({ isLeft }) => (isLeft ? "flex-start" : "flex-end")};
    gap: ${calcRem(8)};
    margin-bottom: ${calcRem(20)};
    padding: ${calcRem(4)};
    color: ${({ theme }) => theme.white};
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    font-size: ${calcRem(14)};
    font-weight: 300;
    cursor: ${({ isPrivate }) => (isPrivate ? "default" : "pointer")};

    svg {
      box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
    }

    ${({ isPrivate }) => {
      return (
        !isPrivate &&
        css`
          :focus,
          :hover {
            color: ${({ theme }) => theme.orange2};
            transition: ease-in 0.1s;
          }
        `
      );
    }}
  }
`;

const StDetailBtn = styled.button`
  margin: 0 ${calcRem(4)};
  padding: ${calcRem(10)} ${calcRem(12)};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.white};
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  font-family: "Inter";
  font-size: ${calcRem(12)};
  font-weight: 400;

  :hover {
    border: 1px solid ${({ theme }) => theme.orange2};
    color: ${({ theme }) => theme.orange2};
    transition: ease-in 0.1s;
  }
`;

const StCardBackground = styled.div<{ isLeft: boolean }>`
  position: relative;
  width: ${calcRem(720)};
  height: ${calcRem(400)};

  img {
    width: auto;
    height: 100%;
    filter: grayscale(0.2);
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const StDivRight = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: -${calcRem(300)};
`;

const StDiv1 = styled.div`
  border-top: ${calcRem(400)} solid transparent;
  border-right: ${calcRem(300)} solid ${({ theme }) => theme.gray5};
  border-bottom: 0 solid ${({ theme }) => theme.gray5};
  border-left: 0 solid transparent;
`;

const StDiv2 = styled.div`
  width: ${calcRem(200)};
  height: ${calcRem(400)};
  background-color: ${({ theme }) => theme.gray5};
`;

const StDivLeft = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: -${calcRem(200)};
`;

const StDiv3 = styled.div`
  width: ${calcRem(200)};
  height: ${calcRem(400)};
  background-color: ${({ theme }) => theme.gray5};
`;

const StDiv4 = styled.div`
  border-top: ${calcRem(400)} solid transparent;
  border-left: ${calcRem(300)} solid ${({ theme }) => theme.gray5};
  border-bottom: 0 solid ${({ theme }) => theme.gray5};
  border-right: 0 solid transparent;
`;

const StDetail = styled.div<{ isSelected: boolean; isLeft: boolean }>`
  ${({ isSelected }) => {
    return isSelected
      ? css`
          width: calc(100% + ${calcRem(200)} + 2px);
          border: 1px solid ${({ theme }) => theme.orange2};
        `
      : css`
          width: 0;
          border: 1px solid transparent;
        `;
  }}
  height: 100%;
  position: absolute;
  top: 0;
  ${({ isLeft }) => {
    return isLeft
      ? css`
          left: calc(-${calcRem(200)} + 1px);
        `
      : css`
          right: calc(-${calcRem(200)} - 2px);
        `;
  }};
  transition: all ease-in 0.3s;
`;

const StSkillList = styled.ul<{ isSelected: boolean; isLeft: boolean }>`
  text-align: center;

  li {
    margin-bottom: ${calcRem(4)};
  }
`;

const StBackground = styled.div<{ isSelected: boolean }>`
  width: 100%;
  height: 100%;
  opacity: ${({ isSelected }) => (isSelected ? 0.9 : 0)};
  background-color: ${({ theme }) => theme.gray4};
  transition: all ease-in 0.3s;
`;

const StDetailContainer = styled.div<{ isSelected: boolean; isLeft: boolean }>`
  position: absolute;
  top: 50%;
  ${({ isLeft }) => {
    return isLeft
      ? css`
          right: 15%;
        `
      : css`
          left: 15%;
        `;
  }}
  transform: translateY(-50%);
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0)};
  transition: all ease-in 0.3s;
  text-align: center;

  h4 {
    margin-bottom: ${calcRem(12)};
    color: ${({ theme }) => theme.orange2};
    font-family: "Inter";
    font-size: ${calcRem(18)};
    font-weight: 300;
  }
`;
