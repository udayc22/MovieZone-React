import { useState, useEffect } from "react";

import MovieCard from "./MovieCard";

import "./App.css";
import searchIcon from "./search.svg";
// eb4d9a0c

const API_URL = "http://www.omdbapi.com?apikey=eb4d9a0c";

const movie1 = {
  Title: "Spiderman",
  Year: "2010",
  imdbID: "tt1785572",
  Type: "movie",
  Poster: "N/A",
};

const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(` ${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieZone</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value="superman"
          onChange={() => {}}
        />
        <img src={searchIcon} alt="search" onClick={() => {}} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>NO movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
