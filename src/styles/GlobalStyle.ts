import { createGlobalStyle } from "styled-components";
import { calcRem, darkTheme } from "./theme";

/* FONT --------------------------------------------------------------------- */
// font-family: 'Inter', sans-serif;
// font-family: 'Poppins', sans-serif;
// font-family: 'Roboto', sans-serif;
// font-family: 'Ubuntu', sans-serif;
// font-family: 'Pretendard-Regular';

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Pretendard-Regular';
      src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
      font-weight: 400;
      font-style: normal;
  }
  @font-face {
    font-family: 'HSGyeoulNoonkott20';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/HSGyeoulNoonkott20.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
  }
  
  html, body {
    box-sizing: border-box;
    margin: 0 auto;
  }
  
  html {
    background-color: #FFFFFF;
    font-size: 14px;
  }

  body {
    max-width: 1440px;
    min-height: 100vh;
    background-color: ${({ theme }) => `${theme.bgColor}`}; 
    color: ${({ theme }) => `${theme.white}`};
    margin: auto;
    /* padding: 0 ${calcRem(80)}; */
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: "Ubuntu";
  }

  ul, ol, li {
    list-style: none;
    padding: 0;
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  .a11y-hidden {
    overflow: hidden;
    position: absolute;
    clip: rect(0, 0, 0, 0);
    clip-path: circle(0);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
  }
`;

export default GlobalStyle;
