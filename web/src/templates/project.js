import React from "react";
import { graphql } from "gatsby";
import Project from "../components/project";
// import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query ProjectTemplateQuery($id: String!) {
    project: sanityProject(id: { eq: $id }) {
      id
      title
      description
      date
      collaborators
      githubLink
      liveLink
      slug {
        current
      }
      mainImage {
        asset {
          url
        }
      }
      secondImage {
        asset {
          url
        }
      }
      thirdImage {
        asset {
          url
        }
      }
    }
  }
`;

const ProjectTemplate = props => {
  const { data, errors } = props;
  const project = data && data.project;
  return (
    <Layout>
      {/* {errors && <SEO title="GraphQL Error" />}
      {project && <SEO title={project.title || "Untitled"} />}

      {errors && <GraphQLErrorList errors={errors} />} */}
      {project && <Project {...project} />}
    </Layout>
  );
};

export default ProjectTemplate;
