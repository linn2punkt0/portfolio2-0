import React from "react";
import styled from "styled-components";
import Layout from "../containers/layout";
import LineBreakText from "../components/LineBreakText";

export const query = graphql`
  query AboutQuery {
    about: sanityAbout {
      name
      portrait {
        asset {
          url
        }
      }
      professional
      personal
    }
  }
`;
const Styledabout = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 300;

  .profile-image {
    width: 30vw;
    margin: 2vw;
  }
  h2 {
    font-family: var(--main-accent-font);
    font-size: 70px;
    font-weight: 400;
    margin: 0;
    padding: 10px 0;
    color: var(--main-accent-color);
  }
  p {
    font-family: var(--main-font);
    color: var(--main-font-color);
    font-size: 20px;
    line-height: 150%;
  }
  svg {
    fill: var(--main-accent-color);
  }
`;

const about = props => {
  const { data, errors } = props;
  const about = (data || {}).about;
  return (
    <Layout>
      <Styledabout>
        <div class="about-me-section">
          <img className="profile-image" src={about.portrait.asset.url} alt="me" />
          <h2>{about.name}</h2>
          <p>
            <LineBreakText text={about.professional} />
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24">
            <path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z" />
          </svg>
          <p>
            <LineBreakText text={about.personal} />
          </p>
        </div>
      </Styledabout>
    </Layout>
  );
};

export default about;
