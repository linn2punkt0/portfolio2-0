import React from "react";
import styled from "styled-components";

const StyledExperience = styled.div`
  grid-column: 2 / 4;
  grid-row: 1 / 2;
  background-color: var(--main-font-color);
  color: var(--main-bg-color);
  .education {
    width: 30vw;
    padding: 2vw;
  }
  .work {
    width: 30vw;
    padding: 2vw;
  }

  & > i,
  h4,
  p {
    margin: 0 0 1vw 0;
  }
  & > h3 {
    margin: 2vw 0 0.5vw 0;
  }

  /* .main-content {
    height: 50vh;
    color: var(--main-font-color);
    font-family: var(--main-font);
  }
  .main-content > h3 {
    margin-top: 100px;
  } */
`;

const Experience = props => {
  const education = props.cv.education;
  const work = props.cv.work;
  const skills = props.cv.skills;
  return (
    <StyledExperience>
      <div className="education">
        {education.map(e => {
          <h3>{e.title}</h3>;
          // console.log(e);
        })}
      </div>
      <div className="work">
        {work.map(w => {
          <h3>{w.title}</h3>;
          // console.log(w);
        })}
      </div>
    </StyledExperience>
  );
};

export default Experience;
