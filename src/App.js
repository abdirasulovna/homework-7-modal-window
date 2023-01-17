import { useState } from "react";
import "./App.css";
import Movie from "./components/movies/Movie";
import Header from "./components/header/Header";
function App() {
  const [movies, setMovies] = useState([
    {
      id: 1 + new Date().getMilliseconds(),
      title: "Avatar 1",
      rating: 5,
      img: "https://image.cnbcfm.com/api/v1/image/105897632-1557241558937avatar-e1541360922907.jpg?v=1664130328&w=1920&h=1080",
    },
    {
      id: 2 + new Date().getMilliseconds(),
      title: "Kunfu panda",
      rating: 5,
      img: "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 3 + new Date().getMilliseconds(),
      title: "NarutoShipuden",
      rating: 4,
      img: "https://cdn.europosters.eu/image/1300/posters/naruto-shippuden-i84239.jpg",
    },
    {
      id: 5 + new Date().getMilliseconds(),
      title: "Hobbit",
      rating: 5,
      img: "https://m.media-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_FMjpg_UX1000_.jpg",
    },
  ]);
  const addNewMovieHandler = (data) => {
    const upDatedMovies = [...movies];
    upDatedMovies.push(data);
    setMovies(upDatedMovies);
  };
  function handleDeleteClick(id) {
    setMovies(movies.filter((todo) => todo.id !== id));
  }
  return (
    <div>
      <Header addNewMovieHandler={addNewMovieHandler} />
      <Movie items={movies} handleDeleteClick={handleDeleteClick} />
    </div>
  );
}

export default App;
