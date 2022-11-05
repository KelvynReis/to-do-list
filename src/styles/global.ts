import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    border: 0;
    outline: 0;
}

html, body, #root {
    width: 100vw;
    height: 100vh;
}

body {
    background-color: #fafafa;
    font-family: 'Roboto', sans-serif;
}
`;