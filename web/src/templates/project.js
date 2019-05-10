import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../containers/layout";

// export const query = graphql`
//   query ProjectTemplateQuery($id: String!) {

//   }
// `;

const ProjectTemplate = props => {
  const { data, errors } = props;
  // const project = data && data.project;
  return <Layout />;
};

export default ProjectTemplate;
