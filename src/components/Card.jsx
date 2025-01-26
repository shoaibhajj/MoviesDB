import React from "react";

import Card from "react-bootstrap/Card";
import { Link } from "react-router";

const Cards = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <Card style={{ height: "350px" }}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          className="w-100 h-100"
        />
        <div className="card__overlay ">
          <p > {movie.title}</p>
          <p>Release Date: {movie.release_date}</p>

          <p>Rate : {movie.vote_average}</p>
          <p>Adult: {movie.adult ? "Yes" : "No"}</p>
        </div>
      </Card>
    </Link>
  );
};

export default Cards;
