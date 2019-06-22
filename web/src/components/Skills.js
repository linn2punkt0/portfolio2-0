import React from "react";
import styled from "styled-components";

const StyledSkills = styled.div`
  grid-column: 2 / 4;
  grid-row: 2 / 3;
  background-color: var(--main-font-color);
  color: var(--main-bg-color);
  @media only screen and (max-width: 800px) {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
  & > ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    list-style: none;
  }
`;

const Skills = props => {
  const skills = props.skills;
  console.log(skills[0].skill);
  return (
    <StyledSkills>
      <ul>
        {skills.map(s => {
          <li key={s.skill}>
            {s.icon}
            <h3>{s.skill}</h3>
          </li>;
        })}
      </ul>
    </StyledSkills>
  );
};

export default Skills;
