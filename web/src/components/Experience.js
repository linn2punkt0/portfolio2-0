import React from "react";
import styled from "styled-components";
import moment from "moment";

const StyledExperience = styled.div`
  grid-column: 2 / 4;
  grid-row: 1 / 2;
  background-color: var(--main-font-color);
  color: var(--main-bg-color);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  @media only screen and (max-width: 800px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    flex-direction: column;
  }
  & > div {
    padding: 2vh;
  }
  .education {
    width: 30vw;
    padding: 0;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    justify-content: flex-start;
    @media only screen and (max-width: 800px) {
      width: 100%;
    }
  }
  .work {
    width: 30vw;
    padding: 0;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    justify-content: flex-start;
    @media only screen and (max-width: 800px) {
      width: 100%;
    }
  }
  h2 {
    font-size: 28px;
    font-family: var(--main-font);
    color: var(--main-bg-color);
    font-weight: 600;
    justify-self: flex-start;
    margin: 28px 0 0 0;
  }
  h3 {
    margin: 28px 0 12px 0;
  }
  & > i,
  h4,
  p {
    margin: 0 0 1vw 0;
  }
  & > h3 {
    margin: 2vw 0 0.5vw 0;
  }
`;

const Experience = props => {
  const education = props.cv.education;
  const work = props.cv.work;

  return (
    <StyledExperience>
      <div>
        <h2>Utbildningar</h2>
        <div className="education">
          {education.map(e => (
            <div key={e.school}>
              <h3>{e.title}</h3>
              <h4>
                {moment(e.start).format("YYYY")}-{moment(e.end).format("YYYY")}, {e.school}
              </h4>
              <p>{e.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>Tidigare erfarenheter</h2>
        <div className="work">
          {work.map(w => (
            <div key={w.employer}>
              <h3>{w.title}</h3>
              <h4>
                {moment(w.start).format("M/YY")}-
                {w.end ? moment(w.end).format("M/YY") : "Nuvarande"}, {w.employer}
              </h4>
              <p>{w.description}</p>
            </div>
          ))}
        </div>
      </div>
    </StyledExperience>
  );
};

export default Experience;
