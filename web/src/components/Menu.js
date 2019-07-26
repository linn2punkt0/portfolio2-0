import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledMenu = styled.div`
  width: 100vw;
  height: ${props => (props.menuIsOpen ? "100vh" : "100%")};
  top: -100vh;
  margin: 0;
  background-color: var(--main-nav-color);
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
    height: 80%;
    margin: auto;
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
  button {
    border: none;
    background-color: var(--main-nav-color);
  }
  svg {
    fill: var(--main-font-color);
  }
`;

const Menu = props => {
  const [changedColor, setChangedColor] = useState(false);

  function toggleColor() {
    const style = document.documentElement.style;

    if (changedColor === false) {
      // setChangedColor=true;
      style.setProperty("--main-font-color", "#141414");
      style.setProperty("--main-accent-color", "#036d94");
      style.setProperty("--main-bg-color", "#fafafa");
      style.setProperty("--main-nav-color", "#fafafa");
    } else {
      // setChangedColor=false;
      style.setProperty("--main-font-color", "#d0d0d0");
      style.setProperty("--main-accent-color", "#a15889");
      style.setProperty("--main-bg-color", "#141414");
      style.setProperty("--main-nav-color", "#000000");
    }
  }

  return (
    <StyledMenu menuIsOpen={props.menuIsOpen}>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/cv">CV - Only swedish</Link>
        <button
          aria-label="change color"
          onClick={
            changedColor
              ? () => {
                  toggleColor(), setChangedColor(false);
                }
              : () => {
                  toggleColor(), setChangedColor(true);
                }
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M4 21.832c4.587.38 2.944-4.493 7.188-4.538l1.838 1.534c.458 5.538-6.315 6.773-9.026 3.004zm14.065-7.115c1.427-2.239 5.847-9.749 5.847-9.749.352-.623-.43-1.273-.976-.813 0 0-6.572 5.714-8.511 7.525-1.532 1.432-1.539 2.086-2.035 4.447l1.68 1.4c2.227-.915 2.868-1.039 3.995-2.81zm-11.999 3.876c.666-1.134 1.748-2.977 4.447-3.262.434-2.087.607-3.3 2.547-5.112 1.373-1.282 4.938-4.409 7.021-6.229-1-2.208-4.141-4.023-8.178-3.99-6.624.055-11.956 5.465-11.903 12.092.023 2.911 1.081 5.571 2.82 7.635 1.618.429 2.376.348 3.246-1.134zm6.952-15.835c1.102-.006 2.005.881 2.016 1.983.004 1.103-.882 2.009-1.986 2.016-1.105.009-2.008-.88-2.014-1.984-.013-1.106.876-2.006 1.984-2.015zm-5.997 2.001c1.102-.01 2.008.877 2.012 1.983.012 1.106-.88 2.005-1.98 2.016-1.106.007-2.009-.881-2.016-1.988-.009-1.103.877-2.004 1.984-2.011zm-2.003 5.998c1.106-.007 2.01.882 2.016 1.985.01 1.104-.88 2.008-1.986 2.015-1.105.008-2.005-.88-2.011-1.985-.011-1.105.879-2.004 1.981-2.015zm10.031 8.532c.021 2.239-.882 3.718-1.682 4.587l-.046.044c5.255-.591 9.062-4.304 6.266-7.889-1.373 2.047-2.534 2.442-4.538 3.258z" />
          </svg>
        </button>
      </div>
    </StyledMenu>
  );
};

export default Menu;
