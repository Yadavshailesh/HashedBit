import React from "react";
import { useParams, Link } from "react-router-dom";
import "./MovieDetails.css";
 

const MovieDetails = () => {
  const { id } = useParams();
  const movie = {
    title: `Movie ${id}`,
    description: `This is the description for Movie ${id}.`,
    image: `https://via.placeholder.com/400x600?text=Movie+${id}`,
  };

  return (
    <div className="movie-details">
      <img src={movie.image} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <Link to={`/book-seat/${id}`}>
        <button className="book-button">Book Seat</button>
      </Link>
    </div>
  );
};

export default MovieDetails;
