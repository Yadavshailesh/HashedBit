import React from "react";
 
import "./MovieList.css";
import { Link, useNavigate } from "react-router-dom";

const movies = [
  {
    id: 1,
    title: "Movie 1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvVysvrvaHP3y_NMP9uCv_qVpE_kj3IOmz3A&s ",
  },
  {
    id: 2,
    title: "Movie 2",
    image: "https://via.placeholder.com/200x300?text=Movie+2",
  },
  {
    id: 3,
    title: "Movie 3",
    image: "https://via.placeholder.com/200x300?text=Movie+3",
  },
  {
    id: 4,
    title: "Movie 4",
    image: "https://via.placeholder.com/200x300?text=Movie+4",
  },
  {
    id: 5,
    title: "Movie 5",
    image: "https://via.placeholder.com/200x300?text=Movie+5",
  },
  {
    id: 6,
    title: "Movie 6",
    image: "https://via.placeholder.com/200x300?text=Movie+6",
  },
  {
    id: 7,
    title: "Movie 7",
    image: "https://via.placeholder.com/200x300?text=Movie+7",
  },
  {
    id: 8,
    title: "Movie 8",
    image: "https://via.placeholder.com/200x300?text=Movie+8",
  },
  {
    id: 9,
    title: "Movie 9",
    image: "https://via.placeholder.com/200x300?text=Movie+9",
  },
  {
    id: 10,
    title: "Movie 10",
    image: "https://via.placeholder.com/200x300?text=Movie+10",
  },
  {
    id: 11,
    title: "Movie 11",
    image: "https://via.placeholder.com/200x300?text=Movie+11",
  },
  {
    id: 12,
    title: "Movie 12",
    image: "https://via.placeholder.com/200x300?text=Movie+12",
  },
  {
    id: 13,
    title: "Movie 13",
    image: "https://via.placeholder.com/200x300?text=Movie+13",
  },
  {
    id: 14,
    title: "Movie 14",
    image: "https://via.placeholder.com/200x300?text=Movie+14",
  },
  {
    id: 15,
    title: "Movie 15",
    image: "https://via.placeholder.com/200x300?text=Movie+15",
  },
  {
    id: 16,
    title: "Movie 16",
    image: "https://via.placeholder.com/200x300?text=Movie+16",
  },
];

const MovieList = () => {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item">
          <Link to={`/movie/${movie.id}`}>
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
