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
    max-width: auto;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 15px 'PT Sans', sans-serif;
  }
 
`;

export default GlobalStyle;
