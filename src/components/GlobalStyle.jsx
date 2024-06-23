import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

const GlobalStyle = createGlobalStyle`
${normalize}
* {
  text-decoration: none;
  cursor: none;
};

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
};

body {
 font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 overscroll-behavior: none;
 background: ${(props) => props.theme.background};
 overflow-x: hidden;
 overscroll-behavior: none;
}
`

export default GlobalStyle
