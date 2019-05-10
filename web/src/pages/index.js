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

export const query = graphql`
  query IndexPageQuery {
    sanityHome {
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
    color: var(--main-accent-color);
    font-family: var(--main-accent-font);
    font-size: 90px;
    font-weight: 400;
    padding: 10px 0;
    margin: 0;
  }

  h1 {
    color: var(--main-font-color);
    font-family: var(--main-font);
    font-size: 70px;
    font-weight: 700;
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
  }
  .row {
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
const IndexPage = props => {
  const { data, errors } = props;
  console.log(data);

  // const site = (data || {}).site
  // const projectNodes = (data || {}).projects
  //   ? mapEdgesToNodes(data.projects)
  //     .filter(filterOutDocsWithoutSlugs)
  //     .filter(filterOutDocsPublishedInTheFuture)
  //   : []

  return (
    <Layout>
      <Styledindex>
        {/* <SEO title={site.title} description={site.description} keywords={site.keywords} /> */}
        <div>
          <h2>{data.sanityHome.name}</h2>
          <h1>{data.sanityHome.tagline}</h1>
        </div>
        <div className="featured">
          <h4>Featured Projects:</h4>
          <div className="row">
            <FeaturedProjects title="title" imageUrl="" />
            <FeaturedProjects title="title" imageUrl="" />
            <FeaturedProjects title="title" imageUrl="" />
          </div>
        </div>
      </Styledindex>
    </Layout>
  );
};

export default IndexPage;
