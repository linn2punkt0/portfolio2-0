import React from "react";
import styled from "styled-components";
import ProjectImage from "./ProjectImage";

const StyledFeaturedProjects = styled.a`
  max-width: 30vw;
  min-width: 30%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media only screen and (max-width: 800px) {
    min-width: 90vw;
  }

  h5 {
    margin: 0.5vh 0;
  }
`;

const FeaturedProjects = props => {
  return (
    <StyledFeaturedProjects>
      <ProjectImage imageUrl={props.imageUrl} />
      <h5>{props.title}</h5>
    </StyledFeaturedProjects>
  );
};

export default FeaturedProjects;
