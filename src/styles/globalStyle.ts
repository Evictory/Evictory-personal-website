import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {   
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #fbf8ef;
    color: #28475d;
    justify-content: center;
  }

  body, input, button {
    font: 15px 'PT Sans', sans-serif;
  }
  
  button:hover {
    background-color: invert;
  }
  
  #root {
    margin: 0 auto;
    max-width: 1560px;
  }
`;

export default GlobalStyle;
