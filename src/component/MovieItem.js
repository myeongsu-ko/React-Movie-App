import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieItem = (props) => {
  const { id, title, medium_cover_image } = props.movie;
  const deleteById = props.deleteById;

  const CardImageStyle = styled.img`
    height: 70px;
    background-size: 100% 100%;
  `;

  const CardContentStyle = styled.div`
    display: grid;
    align-items: center;
    font-weight: 600;
    margin: 0 0 0 10px;
    color: white;
  `;

  const CardStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    border: 1px solid rgb(212, 210, 210);
    border-radius: 6px;
    box-shadow: 0 0 3px 0 rgb(172, 170, 170);
  `;

  const SearchButtonStyle = styled.button`
    background-color: #ff5a5f;
    color: white;
    width: 70px;
    height: 45px;
    font-size: 15px;
    font-weight: 700; /*굵기*/
    border-radius: 6px;
    border: 0;
    cursor: pointer;
  `;

  return (
    <CardStyle>
      <Link to={`/detail/${id}`}>
        <CardImageStyle src={medium_cover_image} />
      </Link>
      <CardContentStyle>{title}</CardContentStyle>
      <SearchButtonStyle onClick={() => deleteById(id)}>삭제</SearchButtonStyle>
    </CardStyle>
  );
};

export default MovieItem;
