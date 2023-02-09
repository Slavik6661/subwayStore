import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { foundProducts, setSearchText } from "../../store/store";
import "../../../static/style/search.css";
const Search = () => {
  const dispatch = useDispatch();
  let searchParams = useSelector((state) => state.foundProducts);
  const menuCategory = useSelector((state) => state.menuCategory);
  let searchProduct = "";
  const postSearchProduct = (e) => {
    searchProduct = e;
    dispatch(setSearchText(searchProduct));
    if (searchProduct !== "") {
      axios
        .get(`/search?`, { params: { searchProduct, menuCategory } })
        .then((response) => dispatch(foundProducts(response.data)));
    }
  };
  console.log(searchParams);
  return (
    <div className="search-product">
      <input
        type="search"
        // value={searchParams}
        className="search-input"
        placeholder=" Найти продукт 🔎"
        onChange={(e) => postSearchProduct(e.target.value)}
      />
      {/* <button className="search-button" onClick={() => postSearchProduct()}>
        Найти 🔎
      </button> */}
    </div>
  );
};
export default Search;
