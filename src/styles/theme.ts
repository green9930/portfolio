import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  bgColor: "#242532",
  gray1: "#21232d",
  gray2: "#313444",
  gray3: "#3B3E51",
  white: "#FFFFFF",
  orange1: "#F5A828",
  orange2: "#F7B952",
};

// export const theme = darkTheme;

export const calcRem = (size: number) => `${size / 14}rem`;
