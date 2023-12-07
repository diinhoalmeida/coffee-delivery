import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${(props) => props.theme["background"]};
    -webkit-font-smoothing: antialiased;
  }

  p {
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3, h4 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1rem;
  }
`;
