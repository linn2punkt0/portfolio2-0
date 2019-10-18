import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const StyledProjectImage = styled.div`
  position: relative;
  width: 100%;
  margin: 5vh 0 2vh 0;
  padding: 0;
  /* padding-top: 50%; */
  /* background: url(${props => props.imageUrl || "grey"}); */
  /* background-size: cover;
  background-position: cover; */
  background-color: var(--main-font-color);
  box-shadow: 0px 0px 4px 0px black;
  @media only screen and (max-width: 800px) {
    margin: 3vh 0 1vh 0;
  }
`;

const HoverOverlay = styled.div`
  /* Hover-effect on images */
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: rgba(0, 0, 0, 0.822);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    margin: 0;
  }

  &:hover {
    opacity: 1;
  }
`;
const ProjectImage = props => {
  return (
    <StyledProjectImage imageUrl={props.imageUrl}>
      <Img fluid={props.imageUrl} alt="project image" />
      <HoverOverlay>
        <h4>Read more</h4>
      </HoverOverlay>
    </StyledProjectImage>
  );
};

export default ProjectImage;
