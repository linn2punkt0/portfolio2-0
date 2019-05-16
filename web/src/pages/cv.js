import React from "react";
import styled from "styled-components";
import Layout from "../containers/layout";
import { graphql } from "gatsby";
import ContactBar from "../components/ContactBar";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";

export const query = graphql`
  query CvQuery {
    cv: sanityCv {
      name
      portrait {
        asset {
          url
        }
      }
      professional
      personal
      adress
      phone
      phone
      email
      education {
        title
        start
        end
        school
        description
      }
      work {
        title
        start
        end
        employer
        description
      }
      skills {
        skill
        icon
      }
    }
  }
`;

const Styledcv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 200vh 40vh;
  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
  }
  svg {
    fill: var(--main-font-color);
  }
`;

const cv = props => {
  const { data, errors } = props;
  const cv = (data || {}).cv;
  const skills = (data.skills || {}).skills ? mapEdgesToNodes(data.skills) : [];
  const work = (data.work || {}).work ? mapEdgesToNodes(data.work) : [];

  // console.log(cv.work);
  return (
    <Layout>
      <Styledcv>
        <ContactBar cv={cv} />
        <Experience cv={cv} />
        <Skills cv={skills} />
      </Styledcv>
    </Layout>
  );
};

export default cv;
