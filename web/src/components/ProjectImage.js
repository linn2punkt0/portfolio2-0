import React from "react";
import styled from "styled-components";

const StyledProjectImage = styled.div`
  position: relative;
  width: 100%;
  margin: 5vh 0;
  padding: 0;
  padding-top: 50%;
  background: url(${props => props.imageUrl || "grey"});
  background-size: cover;
  background-position: cover;
  background-color: var(--main-font-color);
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
      <HoverOverlay>
        <h4>Read more</h4>
      </HoverOverlay>
    </StyledProjectImage>
  );
};

export default ProjectImage;
