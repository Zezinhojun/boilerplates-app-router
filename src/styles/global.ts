"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root, .app{
  height: 100%;
  width: 100%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.app{
  display: flex;
  position: relative;
}

html{
  font-size: 62.5%;
}

html, border-style, #_next{
  height: 100%;
}

::-webkit-scrollbar{
  width: 100%;
}

/* Track */
::-webkit-scrollbar-track{
  background-color: #e0e0e0;
}

/* Handle */

::-webkit-scrollbar-thumb{
  background: #888;
}

/* Handle on Hover */
::-webkit-scrollbar-track-piece{
  background: #555;
}

`;

export default GlobalStyles;
