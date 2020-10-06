import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieItem from "../component/MovieItem";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  function deleteById(id) {
    fetch("http://10.100.102.2:8000/api/movie/" + id, {
      method: "delete",
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          setMovies(movies.filter((movie) => movie.id !== id));
        }
      });
  }

  useEffect(() => {
    console.log("그림 그려짐");

    fetch("http://10.100.102.2:8000/api/movie", {})
      .then((res) => res.json())
      .then((res) => {
        setMovies(res);
      });
  }, []);

  const CardBoxStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  `;

  return (
    <CardBoxStyle>
      {movies.map((movie) => (
        <MovieItem movie={movie} deleteById={deleteById} />
      ))}
    </CardBoxStyle>
  );
};

export default MovieList;
