import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import Burger from "../components/Burger";
import Menu from "../components/Menu";
import GlobalStyle from "../styles/GlobalStyle";
import Footer from ".././components/Footer";
import SEO from "../components/seo";

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
      image {
        asset {
          url
        }
      }
    }
  }
`;

const LayoutContainer = ({ children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const { site } = useStaticQuery(query);

  return (
    <>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
        image={site.image.asset.url}
      />
      <GlobalStyle />
      <Burger menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <Menu menuIsOpen={menuIsOpen} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default LayoutContainer;
