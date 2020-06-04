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
    background: #171D2D;
    color: #353E4A;
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    justify-content: center;
  }

  body, input, button {
    font-size: 15px;
  }
  
  button:hover {
    cursor: pointer;
  }
  
  #root {
    margin: 0 auto;
    max-width: 1366px;
    min-width: 485px;
  }
`;

export default GlobalStyle;
