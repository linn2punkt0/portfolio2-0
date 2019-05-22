import React from "react";
import styled from "styled-components";
import ProjectImage from "./ProjectImage";
import moment from "moment";
import { Link } from "gatsby";

const StyledProjectOverview = styled(Link)`
  max-width: 30vw;
  min-width: 30%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media only screen and (max-width: 800px) {
    min-width: 90vw;
    max-height: none;
  }

  & > h5 {
    margin: 1vw 0 0 0;
    font-size: 25px;
    @media only screen and (max-width: 800px) {
      font-size: 22px;
      margin-top: 10px;
    }
  }
  & > a {
    margin: 1vh 0;
    text-decoration: none;
    color: var(--main-accent-color);
  }
  & > p {
    color: var(--main-font-color);
    font-size: 20px;
    font-weight: 300;
    margin: 0;
    @media only screen and (max-width: 800px) {
      font-size: 17px;
    }
  }
  .completion-date {
    margin: 5px 0;
    color: var(--main-accent-color);
  }
`;
// to={`/projects/${props.content.slug.current}`}
const ProjectOverview = props => {
  return (
    <StyledProjectOverview to={`/project/${props.content.slug.current}`}>
      <ProjectImage imageUrl={props.content.mainImage ? props.content.mainImage.asset.url : ""} />
      <h5>{props.content.title}</h5>
      <p className="completion-date">{moment(props.content.date).format("DD/M-YYYY")}</p>
      <p>{props.content.overview}</p>
    </StyledProjectOverview>
  );
};

export default ProjectOverview;
