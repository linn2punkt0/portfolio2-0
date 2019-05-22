import React from "react";
import styled from "styled-components";

const Styledproject = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const project = props => {
  console.log("här är ett project");
  return (
    <Layout>
      <Styledproject>
        <h1>{props.title}</h1>
      </Styledproject>
    </Layout>
  );
};

export default project;
