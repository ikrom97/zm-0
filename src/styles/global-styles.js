import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    color: inherit;
    font-family: inherit;
  }

  html {
    overflow-x: hidden;
  }

  html::-webkit-scrollbar {
    width: 8px;
  }

  html::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.primary};
  }

  html::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.secondary};
    border-radius: 2px;
  }

  body {
    margin: 0;
    background-color: ${({ theme }) => theme.lightGray};
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
  }

  .root {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
