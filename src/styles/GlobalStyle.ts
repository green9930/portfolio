import { createGlobalStyle } from "styled-components";
import { calcRem, darkTheme } from "./theme";

/* FONT --------------------------------------------------------------------- */
// font-family: 'Archivo', sans-serif;
// font-family: 'Inter', sans-serif;
// font-family: 'Poppins', sans-serif;
// font-family: 'Roboto', sans-serif;
// font-family: 'Ubuntu', sans-serif;

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Pretendard-Regular';
      src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
      font-weight: 400;
      font-style: normal;
  }

  * {
    box-sizing: border-box;
  }
  
  html, body {
    box-sizing: border-box;
    background-color: ${({ theme }) => `${theme.bgColor}`}; 
  }
  
  html {
    font-size: 14px;
  }

  body {
    min-height: 100vh;
    max-width: 100vw;
    margin: auto;
    color: ${({ theme }) => `${theme.white}`};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  
  h1 {
    font-family: "Ubuntu";
  }

  h2, h3, h4, h5, h6 {
    font-family: "Poppins";
  }

  ul, ol, li {
    list-style: none;
    margin: 0;
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
