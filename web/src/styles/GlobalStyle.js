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
  svg{
    fill: var(--main-accent-color);
    width: 70px;
    @media only screen and (max-width: 800px) {
      width: 50px;
    }
  }
  h1 {
    color: var(--main-font-color);
    font-family: var(--main-font);
    font-size: 70px;
    font-weight: 700;
    @media only screen and (max-width: 800px) {
      font-size: 35px;
    }
  }
  h2 {
    font-family: var(--main-accent-font);
    font-size: 90px;
    font-weight: 400;
    color: var(--main-accent-color);
    @media only screen and (max-width: 800px) {
      font-size: 60px;
    }
  }
  h3{
    @media only screen and (max-width: 800px) {
      font-size: 24px;
    }
  }
  h4{
    @media only screen and (max-width: 800px) {
      font-size: 20px;
    }
  }
  h5{
    @media only screen and (max-width: 800px) {
      font-size: 20px;
    }
  }
  p{
    @media only screen and (max-width: 800px) {
      font-size: 18px;
    }
  }
`;

export default GlobalStyle;
