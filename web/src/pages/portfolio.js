import React from "react";
import styled from "styled-components";
import Layout from "../containers/layout";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import ProjectOverview from "../components/ProjectOverview";

export const query = graphql`
  query PortfolioQuery {
    projects: allSanityProject(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          title
          slug {
            _key
            _type
            current
          }
          date
          overview
          description
          collaborators
          githubLink
          liveLink
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
    }
  }
`;
const Styledportfolio = styled.div`
  font-family: var(--main-font);
  color: var(--main-accent-color);

  & > h1 {
    margin: 3vw 0 3vw 5vw;
    align-self: flex-start;
    @media only screen and (max-width: 800px) {
      margin: 3vw 0 3vw 5vw;
    }
  }
  .projectContainer {
    width: 90vw;
    max-height: 90vh;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3vh;
    @media only screen and (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  }
`;

const portfolio = props => {
  const { data, errors } = props;
  const projects = (data || {}).projects ? mapEdgesToNodes(data.projects) : [];
  console.log(projects);

  return (
    <Layout>
      <Styledportfolio>
        <h1>Portfolio</h1>
        <div className="projectContainer">
          {projects.map(project => (
            <ProjectOverview key={project.id} content={project} />
          ))}
        </div>
      </Styledportfolio>
    </Layout>
  );
};

export default portfolio;
