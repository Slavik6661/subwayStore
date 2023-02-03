const defaultState = {
  menuItems: [],
  products: [],

  value: 0,
  menuCategory: "sandwiches",
  currentPageProducts: [],
  ordersArray: [],
  productsFromTheCurrentPage: [],
  idOrder: 0,
  showModal: false,
  showRegForm: false,
  showLoginForm: false,
  isAuth: false,
  menuModalState: 0,
  menuModalCategories: "sizes",
  menuModalCategoriesRU: "Размер",
  categoriesEN: [
    "sizes",
    "breads",
    "vegetables",
    "sauces",
    "fillings",
    "ready",
  ],
  categoriesRU: ["Размер", "Хлеб", "Овощи", "Соусы", "Начинка", "Готово"],
  modalSum: 0,
  selectedCardInfo: [],
  modalOrder: [],
  idModalCardActive: {},
  allModalCardId: [],
  searchValueProduct: "",
};
// eslint-disable-next-line import/prefer-default-export
export const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_MENU_ITEM":
      return {
        ...state,
        menuCategory: action.payload,
        // currentPageProducts: [],
      };

    case "ADD_PRODUCT_BUCKET":
      // eslint-disable-next-line no-return-assign
      return {
        ...state,
        ordersArray: (state.ordersArray = [...action.payload]),
      };

    case "DELETE_PRODUCT_BUCKET":
      // eslint-disable-next-line no-return-assign
      return {
        ...state,
        ordersArray: state.ordersArray.filter(
          (order) => order.id !== action.payload
        ),
      };
    case "INCREMENT_ID_ORDER":
      return {
        ...state,
        idOrder: state.idOrder + 1,
      };
    case "MODAL_STATE":
      return {
        ...state,
        showModal: action.payload,
        modalSum: 0,
        menuModalCategories: "sizes",
        menuModalCategoriesRU: "Размер",
        idModalCardActive: {},
      };
    case "SHOW_REG_FORM":
      return {
        ...state,
        showRegForm: action.payload,
      };
    case "SHOW_LOGIN_FORM":
      return {
        ...state,
        showLoginForm: action.payload,
      };
    case "IS_AUTH":
      return {
        ...state,
        isAuth: action.payload,
      };

    case "GET_PRODUCT_BD":
      return {
        ...state,
        products: action.payload,
      };
    case "GET_MENU_BD":
      return {
        ...state,
        menuItems: action.payload,
      };
    case "MENU_MODAL_STATE":
      return {
        ...state,
        menuModalState: state.menuModalState + action.payload,
      };
    case "MENU_MODAL_CATEGORY":
      return {
        ...state,
        menuModalCategories: state.categoriesEN[action.payload],
        menuModalCategoriesRU: state.categoriesRU[action.payload],
      };
    case "MODAL_SUM":
      // eslint-disable-next-line no-return-assign
      return {
        ...state,
        modalSum: (state.modalSum += action.payload),
      };
    case "CURRENT_PAGE_PRODUCTS":
      return {
        ...state,
        currentPageProducts: [...action.payload],
      };
    case "CARD_INFO":
      return {
        ...state,
        selectedCardInfo: action.payload,
      };
    case "ADD_PRODUCT_MODAL_ORDER":
      // eslint-disable-next-line no-return-assign
      return {
        ...state,
        // eslint-disable-next-line no-undef
        modalOrder: action.payload,
      };

    case "ACTIVE_CARD_PRODUCT_MODAL": {
      console.log(action.payload);
      return {
        ...state,
        idModalCardActive: action.payload,
      };
    }

    case "ALL_MODAL_CARD_ID":
      return {
        ...state,
        allModalCardId: [...state.allModalCardId, action.payload],
      };

    case "SEARCH_VALUE":
      return {
        ...state,
        searchValueProduct: action.payload,
      };

    default:
      return state;
  }
};
export const getProductsBD = (payload) => ({ type: "GET_PRODUCT_BD", payload });
export const getMenuBD = (payload) => ({ type: "GET_MENU_BD", payload });
export const getNewModalState = (payload) => ({
  type: "MENU_MODAL_STATE",
  payload,
});
export const getNewModalCategory = (payload) => ({
  type: "MENU_MODAL_CATEGORY",
  payload,
});
export const modalSum = (payload) => ({
  type: "MODAL_SUM",
  payload,
});
export const getCurrentProductsThisPage = (payload) => ({
  type: "CURRENT_PAGE_PRODUCTS",
  payload,
});

export const cardInfo = (payload) => ({
  type: "CARD_INFO",
  payload,
});

export const modalCardActive = (payload) => ({
  type: "CARD_MODAL_ACTIVE",
  payload,
});

export const addProductModalOrder = (payload) => ({
  type: "ADD_PRODUCT_MODAL_ORDER",
  payload,
});

export const addIdActiveModalCard = (payload) => ({
  type: "ACTIVE_CARD_PRODUCT_MODAL",
  payload,
});

export const stateRegForm = (payload) => ({
  type: "SHOW_REG_FORM",
  payload,
});

export const stateLoginForm = (payload) => ({
  type: "SHOW_LOGIN_FORM",
  payload,
});

export const isAuth = (payload) => ({
  type: "IS_AUTH",
  payload,
});

export const allModalCardID = (payload) => ({
  type: "ALL_MODAL_CARD_ID",
  payload,
});

export const searchValue = (payload) => ({
  type: "SEARCH_VALUE",
  payload,
});

// eslint-disable-next-line import/prefer-default-export
// export const counterReducerMultiply = (state = defaultState, action) => {
//   switch (action.type) {
//     case "Multiply":
//       return { ...state, value: state.value * 20 };
//     case "DECREMENT":
//       return { ...state, value: state.value - action.payload };

//     default:
//       return state;
//   }
// };
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
