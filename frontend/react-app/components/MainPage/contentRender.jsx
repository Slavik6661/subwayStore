import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodCard from "../CardFoodComponent/foodCard.jsx";
import "../../../static/style/food-card.css";
import { getCurrentProductsThisPage } from "../../store/store.js";

const MainContent = () => {
  const dispatch = useDispatch();
  const menuCategory = useSelector((state) => state.menuCategory);
  const menuProducts = useSelector((state) => state.menuItems);
  const currentPageProducts = useSelector((state) => state.currentPageProducts);
  const searchParams = useSelector((state) => state.searchValueProduct);
  useEffect(() => {
    console.log("useEffect");

    const addCurrentPageProducts = () => {
      let arrayProduct = [];
      menuProducts.map((elem, idCard) => {
        if (elem.category === menuCategory) {
          arrayProduct.push(elem);
        }
      });
      dispatch(getCurrentProductsThisPage(arrayProduct));
    };
    addCurrentPageProducts();
  }, [menuProducts, menuCategory]);
  let id = -1;

  return (
    <ul id="products-list" className="products-list">
      {menuProducts &&
        menuProducts
          .filter((product) => {
            if (product.category === menuCategory) {
              if (
                product.name.toLowerCase().includes(searchParams.toLowerCase())
              ) {
                return true;
              }
            }
          })
          .map((elem, idCard) =>
            elem.category === menuCategory
              ? (id++, (<FoodCard elem={elem} idCard={id} key={idCard} />))
              : ""
          )}
    </ul>
  );
  //}
};

export default MainContent;
//<div>
//     {Object.values(menuProductsList).map((item) => (
//       <div>{item.name}</div>
//     ))}
//   </div>

// class Content {
//   htmlCardFood = "";

//   card;

//   counter;

//   constructor(content) {
//     this.content = content;

//     this.counter = new Counter();
//     this.card = new FoodCardList(content, this.counter);
//   }

//   rerender(menuValue) {
//     console.log("Render menuValue");
//     store.stateCounter = [];
//     store.productsFromTheCurrentPage = [];
//     const contentFood = document.querySelector("#contentFoods");
//     contentFood.innerHTML = "";
//     const html = this.render(menuValue);
//     contentFood.insertAdjacentHTML("afterbegin", html);
//   }

//   render(menuValue) {
//     console.log("renderContent");
//     let htmlContent = "";

//     htmlContent = /* html */ `
//     <ul id="products-list" class='products-list'>
//     ${this.card.render(menuValue)}
//     </ul>
//     `;

//     return htmlContent;
//   }

//   contentListners(htmlContent) {
//     for (let idCard = 0; idCard < store.stateCounter.length; idCard += 1) {
//       this.counter.addEventListeners(idCard, htmlContent);
//       this.card.addEventListeners(idCard, htmlContent);
//     }
//   }
// }

// export default Content;
