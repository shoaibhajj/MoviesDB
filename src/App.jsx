import { useEffect, useState } from "react";
import { Container, Pagination } from "react-bootstrap";
import NavBar from "./components/NavBar";
import CardList from "./components/CardList";
import NewPagination from "./components/Pagination";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router";
import MovieDetails from "./components/MovieDetails";
function App() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState();

  const getAllMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=c51a0f9f2f6db0dfc72b89340ef7c0aa&language=en-US&page=${page}`
    );
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };
  useEffect(() => {
    getAllMovies();
  }, [page]);

  const searchRequest = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=c51a0f9f2f6db0dfc72b89340ef7c0aa&query=${word}&page=1`
      );
      setMovies(res.data.results);
      setPageCount(res.data.total_pages);
    }
  };
  useEffect(() => {
    searchRequest(search);
  }, [search]);

  const updatePage = (newPage) => {
    setPage(newPage);
  };
  const handelSearch = (newQuary) => {
    setSearch(newQuary);
  };
  return (
    <>
      <NavBar handelSearch={handelSearch} />

      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <CardList
                  movies={movies}
                  updatePage={updatePage}
                  pageCount={pageCount}
                />
              }
            />
            <Route path="/movie/:id" element={<MovieDetails />  } />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
