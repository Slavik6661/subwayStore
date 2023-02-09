import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import classnames from "classnames";
import { getMenuBD } from "../../../react-app/store/store";
import "../../../static/style/pagination.css";

const Pagination = () => {
  const dispatch = useDispatch();
  let menuCategory = useSelector((state) => state.menuCategory);
  let [currentPageActive, setCurrentPageActive] = useState(0);
  let [currentPage, setCurrentPage] = useState(0);
  let [numPagesCount, setNumPagesCount] = useState([]);
  let [skipPage, setSkipPage] = useState(0);
  let siblingCount = 5;
  console.log(skipPage);
  const totalPageCount = useSelector((state) => state.totalPageCount);

  const numberSelectedPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const onNext = () => {
    if (currentPage < totalPageCount - 1) {
      setCurrentPage((currentPage = currentPage + 1));
      setCurrentPageActive(currentPage);
      setSkipPage((skipPage = skipPage + 3));

      axios.get(`/data?`, { params: { menuCategory, skipPage } }).then((response) => {
        console.log(response);
        dispatch(getMenuBD(response.data.productMenu));
      });
    }
  };
  const onPrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((currentPage = currentPage - 1));
      setCurrentPageActive(currentPage);
      setSkipPage((skipPage = skipPage - 3));

      axios.get(`/data?`, { params: { menuCategory, skipPage } }).then((response) => {
        console.log(response);
        dispatch(getMenuBD(response.data.productMenu));
      });
    }
  };

  const getNumPages = () => {
    numPagesCount = [];
    for (let i = 1; i < totalPageCount + 1; i++) {
      numPagesCount.push(i);
    }
    setNumPagesCount(numPagesCount);
  };
  useEffect(() => {
    getNumPages();
  }, [totalPageCount]);
  return (
    <nav className="pagination">
      <li className="arrows-hover" onClick={() => onPrevious()}>
        <div className="arrow left"></div>
      </li>
      {numPagesCount.map((pageNumber, id) => {
        return (
          <li
            id={id + 1}
            onClick={() => {
              setCurrentPageActive(id), numberSelectedPage(pageNumber);
            }}
            className={currentPageActive === id ? "numberPage pagination-active" : "numberPage"}
          >
            {pageNumber}
          </li>
        );
      })}
      <li className="arrows-hover" onClick={() => onNext()}>
        <div className="arrow right"></div>
      </li>
    </nav>
  );
};
export default Pagination;
