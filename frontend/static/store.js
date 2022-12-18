const store = {
  menuCategory: "",
  productsFromTheCurrentPage: [],
  menuStateModal: 0,
  modalSum: 0,
  stateCounter: [],
  orderModal: {},
  orderDefolt: {
    sizes: [
      {
        id: 0,
        foodName: "15 См",
        foodPrice: 0,
        categoryMenuValue: "Размер",
      },
    ],
    breads: [
      {
        id: 0,
        foodName: "Белый итальянский",
        foodPrice: 0,
        categoryMenuValue: "Хлеб",
      },
    ],
    vegetables: [
      {
        id: 0,
        foodName: "Пекинская капуста",
        foodPrice: 0,
        categoryMenuValue: "Овощи",
      },
      {
        id: 1,
        foodName: "Помидор",
        foodPrice: 0,
        categoryMenuValue: "Овощи",
      },
      {
        id: 2,
        foodName: "Соленый огурец",
        foodPrice: 0,
        categoryMenuValue: "Овощи",
      },
    ],
    sauces: [
      {
        id: 0,
        foodName: "1000 Островов",
        foodPrice: 0,
        categoryMenuValue: "Соусы",
      },
    ],
  },

  ordersArray: [],
};
export default store;
