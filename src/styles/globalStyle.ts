import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {   
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  body {
    background: F0F0F2;
    -webkit-font-smoothing: antialiased;
    justify-content: center;
  }
  body, input, button {
    font: 15px 'PT Sans', sans-serif;
  }

  #root {
    max-width: auto;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
