import { modalIngredientsBD, getMenuBD, totalPage } from "../../react-app/store/store";
import axios from "axios";

// export const getCardProduct = async (elem) => {
//   let test = {};
//   let menuCategory = elem ?? "sandwiches";
//   await axios.get(`/data?`, { params: { menuCategory } }).then((response) => {
//     test = response.data;
//   });

//   return test;
// };

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
