// import MovieList from './Component/movies';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Component/header";
import Search from "./Component/search";
import MovieList from "./Component/MovieList";


function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = process.env.OMDB_API_KEY;
  // const Key = process.env.OMDB_API_KEY
  const getMovies = () => {
    const MOVIE_API_URL = `http://www.omdbapi.com/?s=man&apikey=4da3df56`;

    axios.get(MOVIE_API_URL).then((res) => {
      setLoading(false);
      setMovies(res.data.Search);
    });
  };

  useEffect(() => {
    getMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const search = (searchValue) => {
    axios
      .get(`https://www.omdbapi.com/?s=${searchValue}&apikey=4da3df56`)
      .then((res) => {
        if (res.data.Response === "True") {
          setMovies(res.data.Search);
          setLoading(false);
        } else {
          setError(res.data.Error);
          setLoading(false);
        }
      })
      .catch((error)=>{
        console.error(error)
      })
  };
  useEffect(() => {
    search();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Header />
      <Search search={search} />
      {loading && !error ? (
        <h2 className="loading">Loading...</h2>
      ) : error ? (
        <h2 className="error">Unable to Provide Movie List at this time</h2>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
}

export default App;
