const defaultState = {
  value: 0,
};
const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + 20 };
    case "DECREMENT":
      return { ...state, value: state.value - 20 };

    default:
      return state;
  }
};

const counterReducerMultiply = (state = defaultState, action) => {
  switch (action.type) {
    case "Multiply":
      return { ...state, value: state.value + 20 };
    case "DECREMENT":
      return { ...state, value: state.value - action.payload };

    default:
      return state;
  }
};

// const store = {
//   menuCategory: "",
//   productsFromTheCurrentPage: [],
//   menuStateModal: 0,
//   modalSum: 0,
//   stateCounter: [],
//   orderModal: {},
//   orderDefolt: {
//     sizes: [
//       {
//         id: 0,
//         foodName: "15 См",
//         foodPrice: 0,
//         categoryMenuValue: "Размер",
//       },
//     ],
//     breads: [
//       {
//         id: 0,
//         foodName: "Белый итальянский",
//         foodPrice: 0,
//         categoryMenuValue: "Хлеб",
//       },
//     ],
//     vegetables: [
//       {
//         id: 0,
//         foodName: "Пекинская капуста",
//         foodPrice: 0,
//         categoryMenuValue: "Овощи",
//       },
//       {
//         id: 1,
//         foodName: "Помидор",
//         foodPrice: 0,
//         categoryMenuValue: "Овощи",
//       },
//       {
//         id: 2,
//         foodName: "Соленый огурец",
//         foodPrice: 0,
//         categoryMenuValue: "Овощи",
//       },
//     ],
//     sauces: [
//       {
//         id: 0,
//         foodName: "1000 Островов",
//         foodPrice: 0,
//         categoryMenuValue: "Соусы",
//       },
//     ],
//   },

//   ordersArray: [],
// };
// export default store;
