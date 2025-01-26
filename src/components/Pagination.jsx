import React from "react";
import ReactPaginate from "react-paginate";
const NewPagination = ({ updatePage, pageCount }) => {
  const handlePageClick = (data) => {
    updatePage(data.selected + 1);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="< previous"
      containerClassName={"pagination justify-content-center p-3 warning-bg"}
      pageClassName={"page-item warning"}
      pageLinkClassName={"page-link warning"}
      previousClassName={"page-item warning"}
      nextClassName={"page-item warning"}
      previousLinkClassName={"page-link warning-bg"}
      nextLinkClassName={"page-link warning"}
      breakClassName={"page-item warning"}
      breakLinkClassName={"page-link warning"}
      activeClassName={"active warning-bg"}
    />
  );
};

export default NewPagination;
