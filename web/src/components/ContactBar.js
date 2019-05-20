import React from "react";
import styled from "styled-components";

const StyledContactBar = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  padding: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  @media only screen and (max-width: 800px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    padding: 0;
  }

  & > h1,
  h4,
  h3 {
    width: 90%;
    margin: auto;
  }
  & > h1 {
    font-size: 30px;
  }
  img {
    width: 18vw;
    border-radius: 50%;
    @media only screen and (max-width: 800px) {
      width: 60vw;
    }
  }
  svg {
    margin: 0.5vw;
  }
  & > h3 {
    margin: 1vw 0;
    overflow: auto;
    @media only screen and (max-width: 800px) {
      margin: 4vh 0;
      font-size: 20px;
    }
  }
`;

const ContactBar = props => {
  const cv = props.cv;
  return (
    <StyledContactBar>
      <img src={cv.portrait.asset.url} />
      <h1>{cv.name}</h1>
      <h4>{cv.professional}</h4>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z" />
      </svg>
      <h4>{cv.personal}</h4>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
      </svg>
      <h3>{cv.adress}</h3>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M19 2c0-1.104-.896-2-2-2h-10c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-20zm-8.5 0h3c.276 0 .5.224.5.5s-.224.5-.5.5h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zm1.5 20c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3h-10v-14.024h10v14.024z" />
      </svg>
      <h3>{cv.phone}</h3>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
      </svg>
      <h3>{cv.email}</h3>
    </StyledContactBar>
  );
};

export default ContactBar;
