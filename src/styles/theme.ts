import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  bgColor: "#242532",
  gray1: "#21232d",
  gray2: "#292B39",
  gray3: "#313444",
  gray4: "#3B3E51",
  gray5: "#525771",
  white: "#FFFFFF",
  orange1: "#F5A828",
  orange2: "#F7B952",
  orange3: "#F8C774",
};

// export const theme = darkTheme;

export const calcRem = (size: number) => `${size / 14}rem`;

export const TABLET_W = 1023;
export const MOBILE_W = 768;
export const WINDOW_W =
  window.innerWidth > MOBILE_W ? MOBILE_W : window.innerWidth;
export const WINDOW_H = window.innerHeight;
