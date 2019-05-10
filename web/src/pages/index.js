import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import SEO from "../components/seo";
import Layout from "../containers/layout";

// export const query = graphql`
//   query IndexPageQuery {

//   }
// `;

const IndexPage = props => {
  const { data, errors } = props;

  // const site = (data || {}).site
  // const projectNodes = (data || {}).projects
  //   ? mapEdgesToNodes(data.projects)
  //     .filter(filterOutDocsWithoutSlugs)
  //     .filter(filterOutDocsPublishedInTheFuture)
  //   : []

  return (
    <Layout>
      {/* <SEO title={site.title} description={site.description} keywords={site.keywords} /> */}
      <h1>Haj!</h1>
    </Layout>
  );
};

export default IndexPage;
