import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Apple SD Gothic Neo", sans-serif;
  }

  body {
      background-color: #0f1117;
      color: #111;
  }
`;

export default GlobalStyle;
