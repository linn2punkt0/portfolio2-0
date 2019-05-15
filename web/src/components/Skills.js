import React from "react";
import styled from "styled-components";

const StyledSkills = styled.div`
  grid-column: 2 / 4;
  grid-row: 2 / 3;
  background-color: var(--main-font-color);
  color: var(--main-bg-color);
  & > ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    list-style: none;
  }
`;

const Skills = props => {
  const skills = props.cv;
  return (
    <StyledSkills>
      <ul>
        {skills.map(s => {
          <li>
            {s.icon}
            <h3>{s.title}</h3>
          </li>;
        })}
      </ul>
    </StyledSkills>
  );
};

export default Skills;