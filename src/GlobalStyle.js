import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
    box-sizing: border-box;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`;

export { GlobalStyle };
