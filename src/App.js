import "./App.css";
import MovieList from "./components/MovieList";
import Search from "./components/Search";
import { movie } from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import AddMovie from "./components/AddMovie";
import { useState } from "react";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import MovieDescription from "./components/MovieDescription";
import Ourtrailer from "./components/Ourtrailer";

function App() {
  const [movies, setMovies] = useState(movie);
  const [searchValue, setSearchValue] = useState("");
  const [searchRating, setSearchRating] = useState(0);
  const handleadd = (newmovie) => {
    setMovies([...movies, newmovie]);
  };

  const handleRating = (rate) => setSearchRating(rate);
  const handleSearch = (e) => setSearchValue(e.target.value);
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Routes>
          <Route
            path="/" element={<div><img src='/images/welcome.jpg' alt="welcome" /></div>}
            
          />
           <Route path='/MovieList'element={
              <div>
                <Search
                  searchValue={searchValue}
                  searchRating={searchRating}
                  handleRating={handleRating}
                  handleSearch={handleSearch}
                />
                <MovieList
                  movies={movies.filter(
                    (el) =>
                      el.title
                        .toLowerCase()
                        .includes(searchValue.toLowerCase().trim()) &&
                      el.rate >= searchRating
                  )}
                />
              </div>
            }/> 
          <Route
            path="/AddMovie"
            element={<AddMovie handleadd={handleadd} />}
          />
          <Route
            path="/MovieList/MovieDescription/:id"
            element={<MovieDescription movies={movies} />}
          />
          <Route path="/MovieDescription/Ourtrailer/:id" element={<Ourtrailer movies={movies}/> }/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
