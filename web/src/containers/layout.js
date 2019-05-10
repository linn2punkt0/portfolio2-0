import { graphql, StaticQuery } from "gatsby";
import React, { useState } from "react";
import Burger from "../components/Burger";
import Menu from "../components/Menu";
import GlobalStyle from "../styles/GlobalStyle";

/* const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
  }
`; */

const LayoutContainer = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <GlobalStyle />
      <Burger menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <Menu menuIsOpen={menuIsOpen} />
      <main>{children}</main>
    </>
  );
};

export default LayoutContainer;
