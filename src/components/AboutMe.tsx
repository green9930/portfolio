import { useState } from "react";
import styled from "styled-components";
import { FaCopy, FaCheck } from "react-icons/fa";
import { SiGmail, SiGithub, SiNotion } from "react-icons/si";
import { SlNote } from "react-icons/sl";

import ModalLayout from "./layout/ModalLayout";
import Button from "./elements/Button";
import { MOBILE_W, TABLET_W, calcRem } from "../styles/theme";
import Profile from "../assets/images/profile.jpg";
import { logClickEvent } from "../utils/googleAnalytics";

const EMAIL = "geuna0204@gmail.com";
const GITHUB_URL = "https://github.com/green9930";
const NOTION_URL =
  "https://green9930.notion.site/b0f36faa708e4529982b7d36364118db?v=150fc5569d7d4d02bd12ee88270154b9";
const BLOG_URL = "https://velog.io/@green9930";

const AboutMe = () => {
  const [showEmailCopyModal, setShowEmailCopyModal] = useState(false);

  const handleEmailCopyModal = () => setShowEmailCopyModal(!showEmailCopyModal);

  const handleCopy = (target: string) => {
    if (window.navigator.clipboard) {
      navigator.clipboard
        .writeText(target)
        .then(() => handleEmailCopyModal())
        .catch((err) => alert("copy failed!"));
    } else {
      window.alert("copy failed!");
    }
  };

  const handleClick = (target: "github" | "notion" | "blog") => {
    logClickEvent({ action: "BTN_CLICK", category: "ABOUT_ME", label: target });

    let url = "";
    switch (target) {
      case "blog":
        url = BLOG_URL;
        break;
      case "github":
        url = GITHUB_URL;
        break;
      case "notion":
        url = NOTION_URL;
        break;
      default:
        break;
    }
    window.open(url, "_blank");
  };

  return (
    <StAboutMe>
      <StProfileContent>
        <StProfileImage>
          <img src={Profile} alt="profile" />
          <StTriangle></StTriangle>
        </StProfileImage>
        <StProfileText>
          <h2>Bae Geuna</h2>
          <h3>
            I'm <span>FrontEnd Developer</span>
          </h3>
          <p>
            저는 “언제나 해결할 방법이 있다.”는 마음으로 목표를 향해 최선을
            다합니다.
            <br />
            코드 개선과 새로운 기술에 관심이 많고, 유저들의 반응을 원동력으로
            즐겁게 성장하고 있습니다.
          </p>
          <StProfileContactList>
            <StEmailItem>
              <SiGmail />
              <span>geuna0204@gmail.com</span>
              <StCopyBtn>
                <FaCopy onClick={() => handleCopy(EMAIL)} />
              </StCopyBtn>
            </StEmailItem>
            <StContactItem onClick={() => handleClick("github")}>
              <SiGithub />
              <span>GitHub</span>
            </StContactItem>
            <StContactItem onClick={() => handleClick("notion")}>
              <SiNotion />
              <span>Notion</span>
            </StContactItem>
            <StContactItem onClick={() => handleClick("blog")}>
              <SlNote />
              <span>Blog</span>
            </StContactItem>
          </StProfileContactList>
        </StProfileText>
      </StProfileContent>
      {showEmailCopyModal ? (
        <ModalLayout height={250} handleEmailCopyModal={handleEmailCopyModal}>
          <StEmailCopyModal>
            <FaCheck />
            <h2>email address copied successfully.</h2>
            <Button onClick={handleEmailCopyModal}>Close</Button>
          </StEmailCopyModal>
        </ModalLayout>
      ) : null}
    </StAboutMe>
  );
};

export default AboutMe;

const StAboutMe = styled.div`
  position: relative;
  height: 400px;
  background-color: ${({ theme }) => theme.gray1};
  cursor: default;

  @media screen and (max-width: ${TABLET_W}px) {
    height: 300px;
  }

  @media screen and (max-width: ${MOBILE_W}px) {
    /* height: 300px; */
    padding: ${calcRem(24)} ${calcRem(24)};
  }
`;

const StProfileContent = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: ${calcRem(12)};
  width: 100%;
  position: absolute;
  top: ${calcRem(20)};
  right: 0;
  z-index: 9;

  @media screen and (max-width: ${TABLET_W}px) {
    /* flex-direction: column; */
  }

  @media screen and (max-width: ${MOBILE_W}px) {
    /* flex-direction: column; */
    position: static;
  }
`;

const StProfileImage = styled.li`
  width: ${calcRem(240)};
  height: auto;
  position: relative;
  padding: ${calcRem(4)};
  border-top: 1px solid ${({ theme }) => theme.orange2};
  border-left: 1px solid ${({ theme }) => theme.orange2};

  img {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: ${TABLET_W}px) {
    width: ${calcRem(180)};
  }

  @media screen and (max-width: ${MOBILE_W}px) {
    width: ${calcRem(180)};
    display: none;
  }
`;

const StTriangle = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(20%, 15%);
  z-index: -1;
  opacity: 0.6;
  border-top: ${calcRem(90)} solid transparent;
  border-right: ${calcRem(90)} solid ${({ theme }) => theme.gray4};
  border-bottom: ${calcRem(90)} solid ${({ theme }) => theme.gray4};
  border-left: ${calcRem(90)} solid transparent;

  @media screen and (max-width: ${TABLET_W}px) {
    transform: translate(16%, 12%);
    border-top: ${calcRem(80)} solid transparent;
    border-right: ${calcRem(80)} solid ${({ theme }) => theme.gray4};
    border-bottom: ${calcRem(80)} solid ${({ theme }) => theme.gray4};
    border-left: ${calcRem(80)} solid transparent;
  }
`;

const StProfileText = styled.li`
  h2 {
    color: ${({ theme }) => theme.orange1};
    font-family: "Ubuntu";
    font-size: ${calcRem(32)};
    font-weight: 400;
  }

  h3 {
    font-family: "Poppins";
    font-size: ${calcRem(24)};
    font-weight: 300;
    span {
      color: ${({ theme }) => theme.orange2};
    }
  }

  p {
    margin: ${calcRem(24)} 0;
    font-family: "Pretendard-Regular";
    font-size: ${calcRem(16)};
    font-weight: 400;
  }

  @media screen and (max-width: ${TABLET_W}px) {
    h2 {
      font-size: ${calcRem(28)};
    }
    h3 {
      font-size: ${calcRem(20)};
    }
    p {
      font-size: ${calcRem(14)};
    }
  }

  @media screen and (max-width: ${MOBILE_W}px) {
    h2 {
      display: none;
    }
  }
`;

const StProfileContactList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${calcRem(12)};
  padding: 0 ${calcRem(16)};

  li {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${calcRem(12)};
    border-radius: ${calcRem(6)};
    padding: ${calcRem(14)};

    span {
      font-family: "Poppins";
      font-size: ${calcRem(14)};
    }
  }

  @media screen and (max-width: ${TABLET_W}px) {
    gap: ${calcRem(10)};
    li {
      padding: ${calcRem(10)};
      span {
        font-size: ${calcRem(12)};
      }
    }
  }

  @media screen and (max-width: ${MOBILE_W}px) {
    padding: 0;
  }
`;

const StEmailItem = styled.li`
  grid-column-start: 1;
  grid-column-end: 4;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.gray1};
  cursor: pointer;
`;

const StCopyBtn = styled.div`
  svg {
    margin-left: ${calcRem(-4)};
    :hover {
      opacity: 0.7;
      color: ${({ theme }) => theme.orange1};
    }
  }

  @media screen and (max-width: ${TABLET_W}px) {
    display: none;
  }
`;

const StContactItem = styled.li`
  background-color: ${({ theme }) => `${theme.gray3}`};
  box-shadow: ${calcRem(3)} ${calcRem(3)} ${calcRem(10)} rgba(0, 0, 0, 0.3);
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => `${theme.gray4}`};
    color: ${({ theme }) => `${theme.orange1}`};
    transition: ease-in 0.2s;
  }
`;

const StEmailCopyModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  button {
    /* flex: 1; */
  }

  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    font-family: "Poppins";
    font-size: ${calcRem(20)};
    font-weight: 400;
  }

  svg {
    width: ${calcRem(36)};
    height: auto;
    color: ${({ theme }) => theme.orange2};
  }
`;
