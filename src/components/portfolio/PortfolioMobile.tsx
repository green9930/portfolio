import React, { useState } from "react";
import styled, { css } from "styled-components";
import { SiGithub } from "react-icons/si";
import { RiExternalLinkLine } from "react-icons/ri";
import { logClickEvent } from "../../utils/googleAnalytics";
import { WINDOW_W, calcRem } from "../../styles/theme";

import ThumbnailMDD from "../../assets/images/resize_thumbnail_mdd.png";
import ThumbnailDasseum from "../../assets/images/resize_thumbnail_dasseum.png";
import ThumbnailChackCheck from "../../assets/images/resize_thumbnail_chackcheck.png";
import ThumbnailSamstagram from "../../assets/images/resize_thumbnail_samstagram.jpg";
import ThumbnailPortfolio from "../../assets/images/resize_thumbnail_portfolio.png";

type portfolioListType = {
  title: string;
  skills: string[];
  isPrivate: boolean;
  github: string;
  link: string;
  thumbnail: string;
};

const PORTFOLIO_LIST: portfolioListType[] = [
  {
    title: "My Digging Disk",
    skills: [
      "React",
      "TypeScript",
      "react-query",
      "recoil",
      "styled-components",
    ],
    isPrivate: false,
    github: "https://github.com/green9930/mdd_FE",
    link: "https://www.mydiggingdisk.com/",
    thumbnail: ThumbnailMDD,
  },
  {
    title: "DaSseum",
    skills: ["React", "TypeScript", "redux-toolkit", "firebase"],
    isPrivate: false,
    github: "https://github.com/green9930/mdiary",
    link: "https://green9930.github.io/mdiary/",
    thumbnail: ThumbnailDasseum,
  },
  {
    title: "CHACKCHECK",
    skills: ["React", "react-query", "recoil", "styled-components"],
    isPrivate: false,
    github: "https://github.com/green9930/hanghae_8D_FE",
    link: "",
    thumbnail: ThumbnailChackCheck,
  },
  {
    title: "Samstagram",
    skills: ["React", "redux-toolkit", "styled-components"],
    isPrivate: false,
    github: "https://github.com/samstagram/samstagram_fe",
    link: "",
    thumbnail: ThumbnailSamstagram,
  },
  {
    title: "Portfolio",
    skills: ["React", "TypeScript", "styled-components", "gh-pages"],
    isPrivate: false,
    github: "https://github.com/green9930/portfolio",
    link: "",
    thumbnail: ThumbnailPortfolio,
  },
];

const PortfolioMobile = () => {
  const [selectedCard, setSelectedCard] = useState("");

  const handleClick = (target: string) => {
    logClickEvent({
      action: "BTN_CLICK",
      category: "PORTFOLIO",
      label: target,
    });
    window.open(target);
  };

  return (
    <StPortfolio>
      <h2>Portfolio</h2>
      <StList>
        {PORTFOLIO_LIST.map((val, idx) => {
          const { title, skills, isPrivate, github, link, thumbnail } = val;
          const isLeft = idx % 2 === 0;
          return (
            <StCard key={title}>
              <StContent>
                <h3>{title}</h3>
              </StContent>
              <StBackground isLeft={isLeft}>
                <img src={thumbnail} alt={`porfolio-${title}`} />
                <StDiv1 isLeft={isLeft} />
                <StDiv2 isLeft={isLeft} w={((WINDOW_W - 48) * 0.8 * 2) / 3} />
                <StVisitContainer isLeft={isLeft} isPrivate={isPrivate}>
                  <span onClick={() => handleClick(github)}>
                    <SiGithub />
                    visit repository
                  </span>
                  {link ? (
                    <span onClick={() => handleClick(link)}>
                      <RiExternalLinkLine />
                      visit website
                    </span>
                  ) : (
                    <></>
                  )}
                </StVisitContainer>
                <StDetail isSelected={title === selectedCard} isLeft={isLeft}>
                  <StDetailBackground
                    isSelected={title === selectedCard}
                  ></StDetailBackground>
                  <StDetailContainer
                    isSelected={title === selectedCard}
                    isLeft={isLeft}
                  >
                    <h4>Skills</h4>
                    <ul>
                      {skills.map((val) => {
                        return <li key={val}>{val}</li>;
                      })}
                    </ul>
                  </StDetailContainer>
                </StDetail>
                <StDetailBtn
                  isLeft={isLeft}
                  onClick={() =>
                    title === selectedCard
                      ? setSelectedCard("")
                      : setSelectedCard(title)
                  }
                >
                  {title === selectedCard ? "Go Back" : "See Detail"}
                </StDetailBtn>
              </StBackground>
            </StCard>
          );
        })}
      </StList>
    </StPortfolio>
  );
};

export default PortfolioMobile;

const StPortfolio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.gray2};
  padding-bottom: ${calcRem(60)};
  overflow-x: hidden;

  h2 {
    padding: ${calcRem(24)} 0;
    color: ${({ theme }) => theme.orange1};
    text-align: center;
    font-family: "Inter";
    font-size: ${calcRem(28)};
    font-weight: 300;
  }
`;

const StList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${calcRem(16)};
  padding: 0 ${calcRem(24)};
`;

const StCard = styled.li`
  width: 100%;
  box-shadow: ${calcRem(3)} ${calcRem(3)} ${calcRem(10)} rgba(0, 0, 0, 0.3);
  position: relative;
`;

const StContent = styled.div`
  width: 100%;
  padding: ${calcRem(8)};
  background-color: ${({ theme }) => theme.gray4};
  border-radius: ${calcRem(4)} ${calcRem(4)} 0 0;

  h3 {
    color: ${({ theme }) => theme.orange2};
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    font-size: ${calcRem(20)};
    font-weight: 300;
    font-family: "Archivo";
  }
`;

const StBackground = styled.div<{ isLeft: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ isLeft }) => (isLeft ? "flex-start" : "flex-end")};
  width: 100%;
  height: 100%;
  position: relative;

  img {
    display: block;
    width: 80%;
    height: 100%;
    aspect-ratio: 3 / 2;
    object-fit: cover;
  }
`;

const StVisitContainer = styled.div<{ isLeft: boolean; isPrivate: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ isLeft }) => (isLeft ? "flex-start" : "flex-end")};
  gap: ${calcRem(8)};
  position: absolute;
  bottom: ${calcRem(50)};

  ${({ isLeft }) =>
    isLeft
      ? css`
          right: ${calcRem(12)};
        `
      : css`
          left: ${calcRem(12)};
        `}

  span {
    display: flex;
    align-items: center;
    gap: ${calcRem(4)};
    color: ${({ theme }) => theme.white};
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    font-size: ${calcRem(10)};
    font-weight: 300;
    cursor: pointer;
  }

  svg {
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
    width: ${calcRem(12)};
    height: ${calcRem(12)};
  }
`;

const StDetailBtn = styled.button<{ isLeft: boolean }>`
  margin-top: ${calcRem(8)};
  padding: ${calcRem(6)} ${calcRem(8)};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.white};
  position: absolute;
  bottom: ${calcRem(12)};
  ${({ isLeft }) =>
    isLeft
      ? css`
          right: ${calcRem(12)};
        `
      : css`
          left: ${calcRem(12)};
        `}
  color: ${({ theme }) => theme.white};
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  font-family: "Inter";
  font-size: ${calcRem(10)};
  font-weight: 400;

  :hover {
    border: 1px solid ${({ theme }) => theme.orange2};
    color: ${({ theme }) => theme.orange2};
    transition: ease-in 0.1s;
  }
`;

const StDiv1 = styled.div<{ isLeft: boolean }>`
  background-color: ${({ theme }) => theme.gray5};
  width: 20%;
  height: 100%;
  position: absolute;
  top: 0;
  ${({ isLeft }) =>
    isLeft
      ? css`
          right: 0;
        `
      : css`
          left: 0;
        `}
`;

const StDiv2 = styled.div<{ isLeft: boolean; w: number }>`
  width: 20%;
  height: 100%;
  position: absolute;
  top: 0;
  ${({ isLeft, w, theme }) =>
    isLeft
      ? css`
          border-top: ${calcRem(w)} solid transparent;
          border-right: ${calcRem(w)} solid ${theme.gray5};
          border-bottom: 0 solid ${({ theme }) => theme.gray5};
          border-left: 0 solid transparent;
          right: calc(20% - 1px);
        `
      : css`
          border-top: ${calcRem(w)} solid transparent;
          border-right: 0 solid transparent;
          border-bottom: 0 solid ${({ theme }) => theme.gray5};
          border-left: ${calcRem(w)} solid ${theme.gray5};
          left: calc(20% - 1px);
        `}
`;

const StDetail = styled.div<{ isSelected: boolean; isLeft: boolean }>`
  ${({ isSelected }) => {
    return isSelected
      ? css`
          width: 100%;
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
          right: 0;
        `
      : css`
          left: 0;
        `;
  }};
  transition: all ease-in 0.3s;
`;

const StDetailContainer = styled.div<{ isSelected: boolean; isLeft: boolean }>`
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0)};
  position: absolute;
  top: 50%;
  ${({ isLeft }) => {
    return isLeft
      ? css`
          left: 15%;
        `
      : css`
          right: 15%;
        `;
  }}
  transform: translateY(-50%);
  transition: all ease-in 0.3s;
  text-align: center;

  h4 {
    margin-bottom: ${calcRem(8)};
    color: ${({ theme }) => theme.orange2};
    font-size: ${calcRem(16)};
    font-weight: 500;
    font-family: "Inter";
  }

  li {
    margin-bottom: ${calcRem(4)};
    font-size: ${calcRem(12)};
    font-weight: 400;
  }
`;

const StDetailBackground = styled.div<{ isSelected: boolean }>`
  width: 100%;
  height: 100%;
  opacity: ${({ isSelected }) => (isSelected ? 0.9 : 0)};
  background-color: ${({ theme }) => theme.gray4};
  transition: all ease-in 0.3s;
`;
