import { createGlobalStyle } from "styled-components";
import { modernNormalize } from "styled-modern-normalize";

const GlobalStyle = createGlobalStyle`
  ${modernNormalize}
  @import url('https://fonts.googleapis.com/css?family=Comfortaa:300,400,500,600,700|Great+Vibes|Raleway+Dots');
  :root {
  --main-bg-color: #141414;
  --main-accent-color: #a15889;
  --main-font-color: #d0d0d0;
  --main-nav-color: #000000;
  --main-accent-font: "Great Vibes";
  --main-font: "Comfortaa";
  --main-detail-font: "Raleway Dots";
  --backup-font: "cursive";
  }

  body{
    background-color: var(--main-bg-color);
    color: var(--main-font-color);
    font-family: var(--main-font);

    display: block;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
