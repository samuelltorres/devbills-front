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
    /* background-color: ${theme.colors.black}; */
    background: radial-gradient(ellipse 80% 80% at 50% -60%,rgba(120,119,198,0.9), ${theme.zinc[950]} );
    backdrop-filter: blur(150px);


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
