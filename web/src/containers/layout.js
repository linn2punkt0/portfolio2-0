import { graphql, StaticQuery } from "gatsby";
import React, { useState } from "react";

/* const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
  }
`; */

function LayoutContainer({ children }) {
  return children;
}

export default LayoutContainer;
