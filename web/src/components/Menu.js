import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledMenu = styled.div`
  width: 100vw;
  height: ${props => (props.menuIsOpen ? "100vh" : "100%")};
  top: -100vh;
  margin: 0;
  background-color: black;
  position: fixed;
  z-index: 2;
  pointer-events: ${props => (props.menuIsOpen ? "all" : "none")};
  transition: 0.5s;
  opacity: ${props => (props.menuIsOpen ? "1" : "0")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: ${props => (props.menuIsOpen ? "translateY(100vh)" : "translateY(0vh)")};

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: var(--main-font-color);
    font-family: var(--main-font);
    font-size: 30px;
    text-decoration: none;
    text-decoration: none;
    color: var(--main-font-color);
  }

  a {
    text-decoration: none;
    color: var(--main-font-color);
  }
`;

const Menu = props => {
  return (
    <StyledMenu menuIsOpen={props.menuIsOpen}>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/cv">CV</Link>
      </div>
    </StyledMenu>
  );
};

export default Menu;
