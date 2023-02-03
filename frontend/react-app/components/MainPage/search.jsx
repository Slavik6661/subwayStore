import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { searchValue } from "../../store/store";
import "../../../static/style/search.css";
const Search = () => {
  const dispatch = useDispatch();
  let searchParams = useSelector((state) => state.searchValueProduct);
  const menuCategory = useSelector((state) => state.menuCategory);
  let searchProduct = "";
  const postSearchProduct = () => {
    axios
      .get(`/search?`, { params: { searchProduct, menuCategory } })
      .then((response) => console.log(response));
  };
  console.log(searchParams);
  return (
    <div className="search-product">
      <input
        type="search"
        // value={searchParams}
        className="search-input"
        onChange={(e) => (searchProduct = e.target.value)}
        //onChange={(e) => dispatch(searchValue(e.target.value))}
      />
      <button className="search-button" onClick={() => postSearchProduct()}>
        Найти 🔎
      </button>
    </div>
  );
};
export default Search;
