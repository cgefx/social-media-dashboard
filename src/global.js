import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
  :root {
    --limegreen: hsl(163, 72%, 41%);
    --brightred: hsl(356, 69%, 56%);
    --facebook: hsl(208, 92%, 53%);
    --twitter: hsl(203, 89%, 53%);
    --instagram: linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%);
    --youtube: hsl(348, 97%, 39%);
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
	//100% = 16px
	font-size: 62.5%; // 1rem = 10px
  }

  body {
    height: 100vh;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textPrimary};
    padding: 0;
    margin: 0;
    font-family: 'Inter', sans-serif;
    text-rendering: optimizeSpeed;
  }

  ul,
  ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  svg {
    fill: currentColor;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.textPrimary};
    display: inline-block;
  }
`;
