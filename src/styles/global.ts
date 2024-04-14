import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw; 
    height: 100vh; 
    -webkit-font-smoothing: antialiased;
    background-color: ${theme.zinc[900]};


  }

  body, input, button, select {
    font: 1rem 'Lexend', sans-serif;
  }

  h1, h2, p, span, strong, button, label, input {
    line-height: 100%;
  }

  #root {
    max-width: 1280px;
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }
`;
