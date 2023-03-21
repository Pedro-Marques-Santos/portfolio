import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --blue: #007FEF;
    --black: #000000;
    --blue-dark: #003563;
    --blue-light: #86c2f7;
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
    button {
    cursor: pointer;
  }

  body {
    font-family: 'Poppins';
  }
`;
