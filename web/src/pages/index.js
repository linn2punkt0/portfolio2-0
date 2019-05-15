import React from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import styled from "styled-components";
import FeaturedProjects from "../components/FeaturedProjects";
import BlockContent from "@sanity/block-content-to-react";
import LineBreakText from "../components/LineBreakText";

export const query = graphql`
  query IndexPageQuery {
    projects: allSanityProject(
      filter: { featured: { eq: true } }
      limit: 3
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          id
          title
          mainImage {
            asset {
              url
            }
          }
        }
      }
    }
    homepage: sanityHome {
      name
      tagline
    }
  }
`;

const Styledindex = styled.div`
  width: 90vw;
  margin: 10vh auto;
  position: relative;

  > div {
    margin-top: 10vh;
    margin-bottom: 10vh;
  }
  h2 {
    padding: 10px 0;
    margin: 0;
  }

  h1 {
    margin: 10px 0;
  }
  h4 {
    margin: 0;
  }

  .featured {
    width: 100%;
    max-height: 50vh;
    font-family: var(--main-font);
    color: var(--main-accent-color);
    font-size: 30px;
    @media only screen and (max-width: 800px) {
      max-height: none;
      font-size: 25px;
    }
  }
  .row {
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 800px) {
      flex-direction: column;
    }
  }
`;
const IndexPage = props => {
  const { data, errors } = props;

  const homepage = (data || {}).homepage;
  const projects = (data || {}).projects ? mapEdgesToNodes(data.projects) : [];

  return (
    <Layout>
      <Styledindex>
        {/* <SEO title={site.title} description={site.description} keywords={site.keywords} /> */}
        <div>
          <h2>{homepage.name}</h2>
          <h1>
            <LineBreakText text={homepage.tagline} />
          </h1>
        </div>
        <div className="featured">
          <h4>Featured Projects:</h4>
          <div className="row">
            {projects.map(project => (
              <FeaturedProjects
                key={project.id}
                title={project.title}
                imageUrl={project.mainImage.asset.url}
              />
            ))}
          </div>
        </div>
      </Styledindex>
    </Layout>
  );
};

export default IndexPage;
