import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SearchStyle = styled.div`
  width: 430px;
  display: inline-block;
  height: 500px;
  background-color: white;
  position: relative;
  /* relative 일때 top 이나 left를 줄수 있음 */
  left: 300px;
  top: 10px;
  padding: 20px 30px 20px 30px;
  box-shadow: 0 2px 2px 0 rgb(214, 214, 214);
  border-radius: 10%;
`;

const SearchTitleStyle = styled.div`
  padding: 10px 0;
  font-size: 30px;
  font-weight: 800;
  color: rgb(75, 74, 74);
`;

const SubTitleStyle = styled.td`
  padding: 10px 0;
  font-size: 12px;
  font-weight: 600;
`;

const SearchInputStyle = styled.input`
  height: 45px;
  width: 100%;
  color: rgb(100, 100, 100);
  font-size: 15px;
  border: 1px solid rgb(230, 230, 230);
`;

const SearchButtonBoxStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  justify-content: end;
  padding: 20px 0;
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

const MovieDetail = (props) => {
  const id = props.match.params.id;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`http://10.100.102.2:8000/api/movie/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setMovie(res);
      });
  }, []);

  function inputHandle(e) {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  }

  function submitMovie(e) {
    e.preventDefault();
    let jsonMovie = JSON.stringify(movie);
    console.log(jsonMovie);

    fetch(`http://10.100.102.2:8000/api/movie/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: jsonMovie,
    })
      .then((res) => res.text())
      .then((res) => {
        console.log(res);
        if (res === "ok") {
          alert("수정성공");
        } else {
          alert("수정실패");
        }
      });
  }

  return (
    <SearchStyle>
      <form>
        <SearchTitleStyle>영화 상세정보</SearchTitleStyle>
        <table style={{ width: "100%" }}>
          <tr>
            <SubTitleStyle colSpan="2">제목</SubTitleStyle>
          </tr>
          <tr>
            <td colSpan="2">
              <SearchInputStyle
                type="text"
                onChange={inputHandle}
                name="title"
                value={movie.title}
              />
            </td>
          </tr>
          <tr>
            <SubTitleStyle colSpan="2">줄거리</SubTitleStyle>
          </tr>
          <tr>
            <td colSpan="2">
              <SearchInputStyle
                type="text"
                name="summary"
                onChange={inputHandle}
                value={movie.summary}
              />
            </td>
          </tr>
          <tr>
            <SubTitleStyle colSpan="2">평점</SubTitleStyle>
          </tr>
          <tr>
            <td colSpan="2">
              <SearchInputStyle
                type="text"
                name="rating"
                onChange={inputHandle}
                value={movie.rating}
              />
            </td>
          </tr>
          <tr>
            <SubTitleStyle colSpan="2">사진</SubTitleStyle>
          </tr>
          <tr>
            <td colSpan="2">
              <SearchInputStyle
                type="text"
                name="medium_cover_image"
                onChange={inputHandle}
                value={movie.medium_cover_image}
              />
            </td>
          </tr>
        </table>
        <SearchButtonBoxStyle>
          <SearchButtonStyle onClick={submitMovie}>수정</SearchButtonStyle>
        </SearchButtonBoxStyle>
      </form>
    </SearchStyle>
  );
};

export default MovieDetail;
