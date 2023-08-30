import styled from "styled-components";
import { GoTriangleRight } from "react-icons/go";
import { EXPERIENCE_LIST } from "./Experience";
import { calcRem, darkTheme } from "../../styles/theme";

const ExperienceMobile = () => {
  return (
    <StContainer>
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
    </StContainer>
  );
};

export default ExperienceMobile;

const StContainer = styled.div`
  background-color: ${({ theme }) => theme.gray1};
  padding: ${calcRem(24)} 0;
  cursor: default;

  h2 {
    padding-bottom: ${calcRem(24)};
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
  justify-content: space-between;
  gap: ${calcRem(12)};
  width: 100%;
  padding: 0 ${calcRem(24)};
`;

const StItem = styled.li<{ isLast: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${calcRem(8)};
  padding: ${calcRem(8)} 0;
  border-bottom: 1px solid
    ${({ theme, isLast }) => (isLast ? "transparent" : theme.gray5)};
`;

const StTitle = styled.div`
  display: flex;
  align-items: center;

  h3,
  span {
    color: ${({ theme }) => theme.white};
    font-size: ${calcRem(14)};
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

    svg {
      width: ${calcRem(16)};
      height: ${calcRem(16)};
    }

    p {
      width: 100%;
      word-break: keep-all;
      white-space: pre-wrap;
      font-size: ${calcRem(14)};
      font-weight: 400;
    }
  }
`;
