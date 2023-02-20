import React from "react";
import styled, { css } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

const Portfolio = () => {
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
      github: "https://github.com/samstagram/samstagram_fe",
      thumbnail: ThumbnailSamstagram,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: 0,
  };

  return (
    <StPortfolio>
      <h2>Portfolio</h2>
      <StPortfolioBody>
        <Slider {...settings}>
          {PORTFOLIO_LIST.map((val) => {
            const { title, skills, isPrivate, github, thumbnail } = val;
            return (
              <StCard key={title}>
                <StCardContent>
                  <StCardText isPrivate={isPrivate}>
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
                  </StCardText>
                  <ul>
                    {skills.map((val) => {
                      return <li key={val}>{val}</li>;
                    })}
                  </ul>
                </StCardContent>
                <img src={thumbnail} alt={title} />
              </StCard>
            );
          })}
        </Slider>
      </StPortfolioBody>
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

const StPortfolioBody = styled.div`
  width: ${calcRem(600)};
  height: ${calcRem(400)};

  .slick-prev {
    left: 15px;
    z-index: 1;
    opacity: 0.5;
  }

  .slick-next {
    right: 15px;
    z-index: 1;
    opacity: 0.5;
  }
`;

const StCard = styled.div`
  position: relative;

  img {
    width: 100%;
    height: auto;
    filter: blur(1px);
  }
`;

const StCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${calcRem(6)};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);

  ul {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    gap: ${calcRem(14)};
    width: 80%;
    position: absolute;
    bottom: ${calcRem(20)};
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid ${({ theme }) => theme.orange2};
    padding: ${calcRem(8)};

    li {
      font-weight: 300;
    }
  }
`;

const StCardText = styled.div<{ isPrivate: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h3 {
    color: ${({ theme }) => theme.orange2};
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    font-family: "Poppins";
    font-size: ${calcRem(24)};
    font-weight: 400;
  }

  span {
    display: flex;
    align-items: center;
    gap: ${calcRem(8)};
    padding: ${calcRem(4)};
    color: ${({ theme }) => theme.white};
    font-size: ${calcRem(14)};
    font-weight: 300;
    cursor: ${({ isPrivate }) => (isPrivate ? "default" : "pointer")};

    ${({ isPrivate }) => {
      return (
        !isPrivate &&
        css`
          :focus,
          :hover {
            color: ${({ theme }) => theme.orange2};
            opacity: 0.8;
            transition: ease-in 0.1s;
          }
        `
      );
    }}
  }
`;
