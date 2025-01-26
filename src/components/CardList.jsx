import React from "react";
import { Col, Row } from "react-bootstrap";
import Cards from "./Card";
import NewPagination from "./Pagination";

const CardList = ({ movies, updatePage, pageCount }) => {
  return (
    <Row className="my-3">
      <h3 className="header text-center">The Best DB Movies Ever</h3>
      {movies.length > 1 ? (
        movies.map((movie) => {
          return (
            <Col key={movie.id} sm="3" className="my-3 ">
              <Cards key={movie.id} movie={movie} />
            </Col>
          );
        })
      ) : (
        <h2 className="justify-content-center text-center fs-3 mt-5">
          There is No Movies...
        </h2>
      )}
      {movies.length >= 1 ? (
        <NewPagination updatePage={updatePage} pageCount={pageCount} />
      ) : null}
    </Row>
  );
};

export default CardList;
