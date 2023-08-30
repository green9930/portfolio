import styled from "styled-components";
import { GoTriangleRight } from "react-icons/go";
import { TABLET_W, calcRem, darkTheme } from "../../styles/theme";

type ExperienceType = {
  title: string;
  content: string[];
  date: string;
};

export const EXPERIENCE_LIST: ExperienceType[] = [
  {
    title: "리포츠 주식회사",
    content: [
      `레저스포츠 예약 서비스 '세모스' 개발 (React-Native)`,
      `파트너 강사용 액티비티 관리 서비스 '세모스 파트너' 개발 (React)`,
    ],
    date: "2023.04 ~ 2023.07",
  },
  {
    title: "(주) 아이엠파인",
    content: ["R&D center 웹 프론트엔드 개발"],
    date: "2022.11 ~ 2023.02",
  },
  {
    title: "스파르타코딩클럽 항해99 8기",
    content: ["React 과정 수료"],
    date: "2022.07 ~ 2022.10",
  },
];

const Experience = () => {
  return (
    <StExperience>
      <StExperienceContent>
        <h2>Experience & Education</h2>
        <StList>
          {EXPERIENCE_LIST.map((val, idx) => {
            const { title, content, date } = val;
            return (
              <StItem
                key={`${title}-${idx}`}
                isLast={idx === EXPERIENCE_LIST.length - 1}
              >
                <StTitle>
                  <StTitleText>{title}</StTitleText>({date})
                </StTitle>
                <StContent>
                  {content.map((val) => (
                    <li key={val}>
                      <GoTriangleRight fill={darkTheme.orange1} />
                      <p>{val}</p>
                    </li>
                  ))}
                </StContent>
              </StItem>
            );
          })}
        </StList>
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
  height: ${calcRem(360)};
  background-color: ${({ theme }) => theme.gray1};
  position: relative;
  cursor: default;

  @media screen and (max-width: ${TABLET_W}px) {
    height: ${calcRem(340)};
  }
`;

const StExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: ${calcRem(40)} 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;

  h2 {
    padding-bottom: ${calcRem(32)};
    color: ${({ theme }) => theme.orange1};
    text-align: center;
    font-family: "Inter";
    font-size: ${calcRem(30)};
    font-weight: 300;
  }

  @media screen and (max-width: ${TABLET_W}px) {
    padding: ${calcRem(28)} 0;

    h2 {
      padding-bottom: ${calcRem(28)};
      font-size: ${calcRem(28)};
    }
  }
`;

const StList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${calcRem(12)};
  width: 100%;
  padding: 0 ${calcRem(150)};

  @media screen and (max-width: ${TABLET_W}px) {
    padding: 0 ${calcRem(80)};
  }
`;

const StItem = styled.li<{ isLast: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${calcRem(8)};
  padding-bottom: ${calcRem(10)};
  border-bottom: 1px solid
    ${({ theme, isLast }) => (isLast ? "transparent" : theme.gray5)};
`;

const StTitle = styled.div`
  display: flex;
  align-items: center;

  h3,
  span {
    color: ${({ theme }) => theme.white};
    font-size: ${calcRem(16)};
  }
`;

const StTitleText = styled.h3`
  margin-right: ${calcRem(8)};
  font-weight: 600;
`;

const StContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${calcRem(4)};

  li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${calcRem(8)};
    width: 100%;

    svg {
      width: ${calcRem(16)};
      height: ${calcRem(16)};
    }

    p {
      word-break: keep-all;
      white-space: pre-wrap;
      font-size: ${calcRem(14)};
    }
  }
`;

const StStyleBox = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
`;

const StStyleBox1 = styled.div`
  border-top: ${calcRem(360)} solid transparent;
  border-right: ${calcRem(360)} solid ${({ theme }) => theme.gray3};
  border-bottom: 0 solid ${({ theme }) => theme.gray3};
  border-left: 0 solid transparent;

  @media screen and (max-width: ${TABLET_W}px) {
    border-top: ${calcRem(340)} solid transparent;
    border-right: ${calcRem(340)} solid ${({ theme }) => theme.gray3};
  }
`;

const StStyleBox2 = styled.div`
  width: ${calcRem(360)};
  height: ${calcRem(360)};
  background-color: ${({ theme }) => theme.gray3};

  @media screen and (max-width: ${TABLET_W}px) {
    width: ${calcRem(340)};
    height: ${calcRem(340)};
  }
`;
