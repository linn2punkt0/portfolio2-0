import React from "react";
import styled from "styled-components";
import Layout from "../containers/layout";
import LineBreakText from "./LineBreakText";

const StyledProject = styled.div`
  width: 70vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media only screen and (max-width: 800px) {
    width: 90vw;
  }
  h3 {
    width: 30vw;
    @media only screen and (max-width: 800px) {
      width: 90vw;
      margin: 0;
      font-size: 20px;
    }
  }
  p {
    width: 60vw;
    color: var(--main-font-color);
    @media only screen and (max-width: 800px) {
      width: 90vw;
      font-size: 17px;
    }
  }
  img {
    width: 70vw;
    @media only screen and (max-width: 800px) {
      width: 90vw;
    }
  }
  a {
    font-size: 20px;
    text-decoration: none;
    color: var(--main-accent-color);
    margin-top: 1vh;
  }
`;

const Project = props => {
  console.log("project page, wihooo!");
  return (
    <StyledProject>
      <h1>{props.title}</h1>
      {props.collaborators && (
        <h3>
          <LineBreakText text={props.collaborators} />
        </h3>
      )}
      <p>{props.description}</p>
      {props.mainImage && <img src={props.mainImage.asset.url} />}
      {props.secondImage && <img src={props.secondImage.asset.url} />}
      {props.thirdImage && <img src={props.thirdImage.asset.url} />}
      <a href={props.githubLink} aria-label="Link to Github repository">
        Visit the Github repository
      </a>
      {props.liveLink && (
        <a href={props.liveLink} aria-label="Link to live site or demo site">
          Visit the page
        </a>
      )}
    </StyledProject>
  );
};

export default Project;
