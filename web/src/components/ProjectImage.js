import React from "react";
import styled from "styled-components";

const StyledProjectImage = styled.div`
  width: 100%;
  margin: 5vh 0;
  padding: 0;
  padding-top: 56.25%;
  background-image: url("");
  background-color: grey;
  background-size: cover;
  background-position: center;
  background-color: var(--main-font-color);
`;

const ProjectImage = props => {
  return <StyledProjectImage imageUrl={props.imageUrl} />;
};

export default ProjectImage;
