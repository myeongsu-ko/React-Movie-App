import React, { useState } from "react";
import styled from "styled-components";

const SearchStyle = styled.div`
  width: 430px;
  display: inline-block;
  height: 500px;
  background-color: white;
  position: relative;
  /* relative 일때 top 이나 left를 줄수 있음 */
  left: 50px;
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

const Movie = () => {
  //1. 전개 연산자
  const [movie, setMovie] = useState({
    title: "",
    rating: "",
    summary: "",
    medium_cover_image: "",
  });

  //2. Conputed property names
  function inputHandle(e) {
    //console.log(e.target.value);
    setMovie({ ...movie, [e.target.name]: e.target.value });
    console.log(movie);
  }

  function submitUser(e) {
    e.preventDefault();
    console.log(movie);
    let jsonmovie = JSON.stringify(movie);

    fetch("http://10.100.102.2:8000/api/movie", {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: jsonmovie,
    })
      .then((res) => {
        return res.text();
      })
      .then((res) => {
        console.log(res);
        if (res === "ok") {
          alert("등록됨");
        }
      });
  }

  function reset(e) {
    e.preventDefault();
    setMovie({
      title: "",
      rating: "",
      medium_cover_image: "",
    });
    console.log(movie);
  }

  return (
    <SearchStyle>
      <form>
        <SearchTitleStyle>영화 등록좀 해주세요</SearchTitleStyle>
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
                placeholder="title을 입력하세요"
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
                placeholder="rating을 입력하세요"
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
                placeholder="summary를 입력하세요"
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
                placeholder="이미지를 입력하세요"
              />
            </td>
          </tr>
        </table>
        <SearchButtonBoxStyle>
          <SearchButtonStyle onClick={submitUser}>등록</SearchButtonStyle>
          <SearchButtonStyle onClick={reset}>리셋</SearchButtonStyle>
        </SearchButtonBoxStyle>
      </form>
    </SearchStyle>
  );
};

export default Movie;
