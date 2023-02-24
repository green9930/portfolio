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
              <StTd>
                <span>2022.11 ~ 2023.02</span>
              </StTd>
              <StTd>아이엠파인</StTd>
              <StTd>R&D center 웹 프론트엔드 개발</StTd>
            </tr>
            <tr>
              <td>
                <span>2022.07 ~ 2023.10</span>
              </td>
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
  height: ${calcRem(300)};
  background-color: ${({ theme }) => theme.gray1};
  position: relative;
  cursor: default;

  @media screen and (max-width: 1023px) {
    height: ${calcRem(220)};
  }
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

  @media screen and (max-width: 1023px) {
    h2 {
      padding: ${calcRem(30)} 0;
      font-size: ${calcRem(28)};
    }
  }
`;

const StTable = styled.table`
  width: 56%;
  margin: 0 auto;
  border-spacing: 0;

  td {
    width: 33%;
    padding: ${calcRem(16)} ${calcRem(20)};
    text-align: center;
    font-family: "Pretendard-Regular";
    font-size: ${calcRem(16)};
    font-weight: 400;

    span {
      font-family: "Inter";
      font-size: ${calcRem(14)};
      font-weight: 300;
    }
  }

  @media screen and (max-width: 1023px) {
    width: 80%;
    td {
      padding: ${calcRem(8)} ${calcRem(12)};
      font-size: ${calcRem(14)};
      span {
        font-size: ${calcRem(12)};
      }
    }
  }
`;

const StTd = styled.td`
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`;

const StStyleBox = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
`;

const StStyleBox1 = styled.div`
  border-top: ${calcRem(300)} solid transparent;
  border-right: ${calcRem(300)} solid ${({ theme }) => theme.gray3};
  border-bottom: 0 solid ${({ theme }) => theme.gray3};
  border-left: 0 solid transparent;

  @media screen and (max-width: 1023px) {
    border-top: ${calcRem(220)} solid transparent;
    border-right: ${calcRem(220)} solid ${({ theme }) => theme.gray3};
  }
`;

const StStyleBox2 = styled.div`
  width: ${calcRem(300)};
  height: ${calcRem(300)};
  background-color: ${({ theme }) => theme.gray3};

  @media screen and (max-width: 1023px) {
    width: ${calcRem(220)};
    height: ${calcRem(220)};
  }
`;
