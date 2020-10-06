import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Movie from "./page/Movie";
import MovieDetail from "./page/MovieDetail";
import MovieList from "./page/MovieList";

function App() {
  return (
    <div>
      <Header />
      <Route path="/" exact={true} component={Movie} />
      <Route path="/list" exact={true} component={MovieList} />
      <Route path="/detail/:id" exact={true} component={MovieDetail} />
    </div>
  );
}

export default App;
