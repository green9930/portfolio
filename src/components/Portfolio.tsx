import React from "react";
import styled from "styled-components";
import { SiGithub } from "react-icons/si";
import { calcRem } from "../styles/theme";
import ThumbnailChackCheck from "../assets/images/resize_thumbnail_chackcheck.png";
import ThumbnailCmw from "../assets/images/resize_thumbnail_cmw.jpg";
import ThumbnailPwa from "../assets/images/resize_thumbnail_pwa.jpg";
import ThumbnailSamstagram from "../assets/images/resize_thumbnail_samstagram.jpg";

const DISABLE_MESSAGE = "I'm sorry, this project is in private repository";
type portfolioListType = {
  title: string;
  skills: string[];
  isPrivate: boolean;
  github: string;
  thumbnail: string;
};
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
  return (
    <StPortfolio>
      <h2>Portfolio</h2>
      {PORTFOLIO_LIST.map((val) => {
        const { title, skills, isPrivate, github, thumbnail } = val;
        return (
          <StCard key={title}>
            <StCardContent>
              <StCardText isPrivate={isPrivate}>
                <h3>{title}</h3>
                <span onClick={() => (isPrivate ? null : window.open(github))}>
                  {isPrivate ? (
                    `${github}`
                  ) : (
                    <>
                      <SiGithub />
                      visit repository
                    </>
                  )}
                </span>
              </StCardText>
              <ul>
                {skills.map((val) => {
                  return <li key={val}>{val}</li>;
                })}
              </ul>
            </StCardContent>
            <StCardBackground>
              <img src={thumbnail} alt={title} />
              <StDiv>
                <StDiv1></StDiv1>
              </StDiv>
            </StCardBackground>
          </StCard>
        );
      })}
    </StPortfolio>
  );
};

export default Portfolio;

const StPortfolio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    padding: ${calcRem(40)} 0;
    color: ${({ theme }) => theme.orange1};
    text-align: center;
    font-family: "Inter";
    font-size: ${calcRem(30)};
    font-weight: 300;
  }
`;

const StCard = styled.div`
  width: ${calcRem(600)};
  height: auto;
  img {
    width: 100%;
    height: auto;
  }
`;

const StCardContent = styled.div``;

const StCardText = styled.div<{ isPrivate: boolean }>``;

const StCardBackground = styled.div`
  display: flex;
  align-items: center;
`;

const StDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const StDiv1 = styled.div`
  width: ${calcRem(200)};
  height: 100%;
  background-color: ${({ theme }) => theme.gray3};
`;
