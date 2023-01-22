// eslint-disable-next-line import/named
import { getProductsBD, getMenuBD } from "../../react-app/store/store";

// eslint-disable-next-line import/prefer-default-export
export function getMenu() {
  return (dispatch) => {
    fetch("http://localhost:3000/data")
      .then((response) => response.json())
      .then((json) => dispatch(getMenuBD(json)))
      .then((json1) => console.log(json1));
  };
}
export function getProducts() {
  return (dispatch) => {
    fetch("http://localhost:3000/modalData")
      .then((response) => response.json())
      .then((json) => dispatch(getProductsBD(json)));
  };
}

/// http://myjson.dit.upm.es/api/bins/9np0

// const response2 = await fetch("http://localhost:3000/modalData", {
//   method: "GET",
// });
// const filings = await response2.json();

// return { menu, filings };
