import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getProducts, getMenu } from "../../../component/API/products";
import "../../../static/style/navbar-menu.css";
const Menu = () => {
  const dispatch = useDispatch();
  const arrayCategory = ["sandwiches", "burgers", "salads", "chicken", "drinks", "pizza", "shaurma"];

  let arrMenu = [
    "Сэндвичи",
    "Бургеры",
    "Тортилья & Салаты",
    "Курица & Картофель",
    "Напитки & Десерты",
    "Пицца",
    "Шаурма",
  ];
  let [menuItemActive, setMenuItemActive] = useState(0);
  let currentPageProducts = useSelector((state) => state.currentPageProducts);
  let menuCategory = useSelector((state) => state.menuCategory);
  const setMenuState = (elem) => {
    dispatch({ type: "GET_MENU_ITEM", payload: elem });
    currentPageProducts = [];
  };
  useEffect(() => {
    getCardProduct();
  }, []);
  const getCardProduct = (elem) => {
    console.log("getCardProduct", menuCategory);
    //menuCategory = elem;
    console.log("getCardProduct", menuCategory);
    axios.get(`/data?`, { params: { menuCategory } }).then((response) => {
      console.log(response);
      // dispatch(getProducts());
      dispatch(getMenuBD(response.data));
    });
  };
  return (
    <>
      {arrayCategory.map((elem, index) => {
        return (
          <button
            id={elem}
            value={index}
            key={elem}
            onClick={() => {
              setMenuItemActive((menuItemActive = index));
              setMenuState(elem);
              getCardProduct(elem);
            }}
            className={Number(menuItemActive) === Number(index) ? "active" : "no-active"}
          >
            {arrMenu[index]}
          </button>
        );
      })}
    </>
  );
};

export default Menu;

// import EventBus from "../../../component/pubSub";
// import store from "../../store";

// class Menu {
//   arrMenu = [
//     "Сэндвичи",
//     "Бургеры",
//     "Тортилья & Салаты",
//     "Курица & Картофель",
//     "Напитки & Десерты",
//     "Пицца",
//     "Шаурма",
//   ];

//   arrayCategory = [];

//   #state = {
//     isActive: 0,
//   };

//   constructor(content) {
//     this.content = content;
//   }

//   /**
//    * @param {{ isActive: number; }} newState
//    */
//   set stateSet(newState) {
//     console.log("set state", newState);
//     this.#state = newState;
//     this.render();
//   }

//   rerender() {
//     const menu = document.querySelector("#menu");
//     menu.innerHTML = "";
//     const html = this.render();
//     menu.insertAdjacentHTML("afterbegin", html);
//   }

//   addActiveIndex(value) {
//     this.stateSet = {
//       isActive: value,
//     };
//   }

//   render() {
//     console.log("render menu", this.content);
//     let html = "";
//     for (const i in this.content.menu) {
//       const categorys = this.content.menu[i].category;
//       if (!this.arrayCategory.includes(categorys)) {
//         this.arrayCategory.push(categorys);
//       }
//     }

//     for (const i in this.arrayCategory) {
//       html += /* html */ `
//         <button id="${this.arrayCategory[i]}" value='${i}'
//         class=${
//           Number(this.#state.isActive) === Number(i) ? "active" : "no-active"
//         }>${this.arrMenu[i]}</button>

//        `;
//     }

//     return html;
//   }

//   eventlistener(html) {
//     for (const i in this.arrayCategory) {
//       html
//         .querySelector(`#${this.arrayCategory[i]}`)
//         .addEventListener("click", (e) => {
//           this.addActiveIndex(e.target.value);
//           EventBus.publish("menuValue", e.target.id);
//           store.menuCategory = e.target.id;
//         });
//     }
//   }
// }

// export default Menu;
