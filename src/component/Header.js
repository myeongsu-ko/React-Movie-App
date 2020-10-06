import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const MenuStyle = styled.ul`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 30px;
    font-size: 30px;
    font-weight: 800;
  `;

  return (
    <div>
      <MenuStyle>
        <li>
          <Link style={{ color: "white" }} to="/list">
            영화목록
          </Link>
        </li>
        <li>
          <Link style={{ color: "white" }} to="/">
            영화등록
          </Link>
        </li>
      </MenuStyle>
    </div>
  );
};

export default Header;
