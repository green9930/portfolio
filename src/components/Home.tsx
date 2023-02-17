import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaCopy } from "react-icons/fa";
import { SiGmail, SiGithub, SiNotion } from "react-icons/si";
import { SlNote } from "react-icons/sl";
import { calcRem } from "../styles/theme";
import Profile from "../assets/images/profile.jpg";
import Swal from "sweetalert2";
import ModalLayout from "./layout/ModalLayout";

const Home = () => {
  const [showEmailCopyModal, setShowEmailCopyModal] = useState(false);

  const path = (name: string) => `../assets/images/${name}`;
  const handleOpenUrl = (url: string) => window.open(url, "_blank");

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

  return (
    <StHome>
      <StProfile>
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
              클린 코드를 지향하고, 사용자 관점에서 개발하고자 합니다. <br />
              동료와 커뮤니케이션을 즐기고 새로운 지식과 문제 해결의 성취감을
              원동력으로 성장하는 개발자입니다.
            </p>
            <StProfileContactList>
              <StEmailItem>
                <SiGmail />
                <span>geuna0204@gmail.com</span>
                <div onClick={() => handleCopy("geuna0204@gmail.com")}>
                  <FaCopy />
                  <span className="a11y-hidden">CLICK TO COPY</span>
                </div>
              </StEmailItem>
              <StContactItem
                onClick={() => handleOpenUrl("https://github.com/green9930")}
              >
                <SiGithub />
                <span>GitHub</span>
              </StContactItem>
              <StContactItem
                onClick={() =>
                  handleOpenUrl(
                    "https://green9930.notion.site/b0f36faa708e4529982b7d36364118db?v=150fc5569d7d4d02bd12ee88270154b9"
                  )
                }
              >
                <SiNotion />
                <span>Notion</span>
              </StContactItem>
              <StContactItem
                onClick={() => handleOpenUrl("https://velog.io/@green9930")}
              >
                <SlNote />
                <span>Blog</span>
              </StContactItem>
            </StProfileContactList>
          </StProfileText>
        </StProfileContent>
      </StProfile>
      <StContact>
        <h2>Contact</h2>
      </StContact>
      {showEmailCopyModal ? (
        <ModalLayout height={250} handleEmailCopyModal={handleEmailCopyModal}>
          <div>Copied!</div>
        </ModalLayout>
      ) : null}
    </StHome>
  );
};

export default Home;

const StHome = styled.div``;

const StProfile = styled.div`
  position: relative;
  height: 400px;
  background-color: ${({ theme }) => theme.gray1};
`;

const StProfileContent = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  position: absolute;
  top: ${calcRem(20)};
  right: 0;
  z-index: 9;
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
`;

const StTriangle = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(20%, 15%);
  z-index: -1;
  opacity: 0.6;
  border-bottom: ${calcRem(90)} solid ${({ theme }) => theme.gray3};
  border-top: ${calcRem(90)} solid transparent;
  border-left: ${calcRem(90)} solid transparent;
  border-right: ${calcRem(90)} solid ${({ theme }) => theme.gray3};
`;

const StProfileText = styled.li`
  h2 {
    color: ${({ theme }) => theme.orange1};
    font-size: ${calcRem(28)};
    font-weight: 400;
  }

  h3 {
    font-family: "Poppins";
    font-size: ${calcRem(22)};
    font-weight: 300;
    span {
      color: ${({ theme }) => theme.orange2};
    }
  }

  p {
    margin: ${calcRem(24)} 0;
    font-family: "Pretendard-Regular";
    font-size: ${calcRem(14)};
    font-weight: 400;
  }
`;

const StProfileContactList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${calcRem(12)};
  /* display: flex;
  align-items: center;
  justify-content: center;
   */
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
      font-size: ${calcRem(12)};
    }
  }
`;

const StEmailItem = styled.li`
  grid-column-start: 1;
  grid-column-end: 4;
  background-color: ${({ theme }) => theme.gray1};

  span {
    border-bottom: 1px solid ${({ theme }) => theme.white};
  }
`;

const StContactItem = styled.li`
  background-color: ${({ theme }) => `${theme.gray2}`};
  box-shadow: ${calcRem(3)} ${calcRem(3)} ${calcRem(10)} rgba(0, 0, 0, 0.3);
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => `${theme.gray3}`};
    color: ${({ theme }) => `${theme.orange1}`};
    transition: ease-in 0.2s;
  }
  :focus {
    background-color: ${({ theme }) => `${theme.gray3}`};
    color: ${({ theme }) => `${theme.orange1}`};
    transition: ease-in 0.2s;
  }
`;

const StContact = styled.div`
  padding: 0 ${calcRem(80)};
  h2 {
    font-size: ${calcRem(28)};
    font-weight: 300;
  }
`;
