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

    &::-webkit-scrollbar {
      width: 5px; /* Largura da barra de rolagem */
    }

    &::-webkit-scrollbar-thumb {
      background-color: #888; /* Cor da alça da barra de rolagem */
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #555; /* Cor da alça da barra de rolagem quando hover */
    }

    &::-webkit-scrollbar-track {
      background-color: #f2f2f2; /* Cor da trilha da barra de rolagem */
    }
  }

  .iconIntroduction {
    font-size: 25px;
    @media (max-width: 900px) {
      font-size: 30px;
    }
  }
`;
