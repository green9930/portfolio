import React from "react";
import styled from "styled-components";
import { calcRem } from "../styles/theme";

const Experience = () => {
  return (
    <StExperience>
      <StExperienceContent>
        <h2>Experience & Education</h2>
        <StTable>
          <tbody>
            <tr>
              <td>2022.11 ~ 2023.02</td>
              <td>아이엠파인</td>
              <td>R&D center 웹 프론트엔드 개발</td>
            </tr>
            <tr>
              <td>2022.07 ~ 2023.10</td>
              <td>스파르타코딩클럽 항해99 8기 수료</td>
            </tr>
          </tbody>
        </StTable>
      </StExperienceContent>
      <StStyleBox>
        <StStyleBox1></StStyleBox1>
        <StStyleBox2></StStyleBox2>
      </StStyleBox>
    </StExperience>
  );
};

export default Experience;

const StExperience = styled.div`
  height: 300px;
  background-color: ${({ theme }) => theme.gray1};
  position: relative;
`;

const StExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;

  h2 {
    padding: ${calcRem(40)} 0;
    color: ${({ theme }) => theme.orange1};
    text-align: center;
    font-family: "Inter";
    font-size: ${calcRem(30)};
    font-weight: 300;
  }
`;

const StTable = styled.table`
  width: 64%;
  margin: 0 auto;

  td {
    width: 33%;
    padding: ${calcRem(12)} ${calcRem(30)};
    text-align: center;
    font-family: "Pretendard-Regular";
    font-size: ${calcRem(16)};
    font-weight: 300;
  }
`;

const StStyleBox = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  /* -webkit-animation: glowing 1s ease-in-out infinite alternate;
  -moz-animation: glowing 1s ease-in-out infinite alternate;
  animation: glowing 1s ease-in-out infinite alternate;

  @keyframes glowing {
    from {
      box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #f0f, 0 0 40px #0ff,
        0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
    }
    to {
      box-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6,
        0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
    }
  } */
`;

const StStyleBox1 = styled.div`
  border-top: ${calcRem(300)} solid transparent;
  border-right: ${calcRem(300)} solid ${({ theme }) => theme.gray3};
  border-bottom: 0 solid ${({ theme }) => theme.gray3};
  border-left: 0 solid transparent;
`;

const StStyleBox2 = styled.div`
  width: ${calcRem(300)};
  height: ${calcRem(300)};
  background-color: ${({ theme }) => theme.gray3}; ;
`;
