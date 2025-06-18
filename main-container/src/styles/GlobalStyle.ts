// main-container/src/styles/GlobalStyle.ts
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        transition: background-color 0.3s, color 0.3s;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }
`;
