console.warn = () => {};
 import "./App.css";
import { useState, useEffect } from "react";
import api from "./api/axios_config";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Trailer from "./components/Trailer/Trailer";
import Reviews from "./components/Reviews/Reviews";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
      // console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getMovie=async(imdbId)=>{
    console.log("getMovie")
    try {
      const response = await api.get(`/api/v1/movies/${imdbId}`);
      // console.log(response)
      let singleMovie=response.data
      console.log("singleMovie")
      console.log(singleMovie)
      console.log("singleMovie.reviewsId")
      console.log(singleMovie.reviewIds)
      setMovie(singleMovie)
      setReviews(singleMovie.reviewIds)
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home movies={movies} />} ></Route>
            <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route> 
            <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovie} movie={movie} reviews ={reviews} setReviews = {setReviews} />}></Route>
            <Route path="*" element = {<NotFound/>}></Route> 
          </Route>
      </Routes>

    </div>
  );
}

export default App;
