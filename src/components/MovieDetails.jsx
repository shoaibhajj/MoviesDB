import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { Link, Links, useParams } from "react-router";
const MovieDetails = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState({});
  const getMovieDetails = async () => {
    const res = await axios.get(
      ` https://api.themoviedb.org/3/movie/${id}?api_key=c51a0f9f2f6db0dfc72b89340ef7c0aa&language=en-US&page=1`
    );
    setMovie(res.data);
  };
  useEffect(() => {
    getMovieDetails();
  }, []);

  console.log(movie);
  return (
    <div>
      <Row>
        <Col xs={12} md={12} sm={12} className="mt-4">
          <div className="d-flex  align-items-center mobile">
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              thumbnail
              className="w-30"
            />

            <div className="justify-content-center text-center mx-auto">
              <p> {movie.title}</p>
              <p>Release Date: {movie.release_date}</p>

              <p>Rate : {movie.vote_average}</p>
              <p>Adult: {movie.adult ? "Yes" : "No"}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={12} sm={12} className="mt-4">
          <div className="d-flex flex-column align-itmes-start">
            <div className="text-start p-4">
              <p className="border-bottom"> Overview </p>
              <p className="px-2">{movie.overview}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={10} xs={12} className="justify-content-center d-flex">
          <Link to={"/"}>
            <Button
              style={{ fontWeight: "bold" }}
              className="m-2 "
              variant="warning"
            >
              Back Home
            </Button>
          </Link>
          <Link to={movie.homepage}>
            <Button
              style={{ fontWeight: "bolder" }}
              className="mx-3"
              variant="warning"
            >
              Watch Movie Now
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetails;
