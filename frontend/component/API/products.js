import { modalIngredientsBD, getMenuBD, totalPage } from "../../react-app/store/store";
import axios from "axios";

// export function getMenu() {
//   return (dispatch) => {
//     fetch("http://localhost:3000/data")
//       .then((response) => response.json())
//       .then((json) => dispatch(getMenuBD(json)));
//   };
// }
// export function getProducts() {
//   return (dispatch) => {
//     fetch("http://localhost:3000/modalData")
//       .then((response) => response.json())
//       .then((json) => dispatch(getProductsBD(json)));
//   };
// }

// export function getCardProduct(elem) {
//   return (dispatch) => {
//     let menuCategory = "";
//     menuCategory = elem ?? "sandwiches";
//     axios.get(`/data?`, { params: { menuCategory } }).then((response) => {
//       console.log(response);
//       dispatch(getMenuBD(response.data));
//     });
//   };
// }

export const getCardProduct = (elem) => {
  return (dispatch) => {
    let menuCategory = elem ?? "sandwiches";
    axios.get(`/data?`, { params: { menuCategory } }).then((response) => {
      console.log(response);
      dispatch(getMenuBD(response.data.productMenu));
      dispatch(totalPage(response.data.totalPageCount));
    });
  };
};

export const getModalIngredients = () => {
  return (dispatch) => {
    axios.get(`/modalData`).then((response) => {
      console.log(response);
      dispatch(modalIngredientsBD(response.data));
    });
  };
};
