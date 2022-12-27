// import FoodCardList from "../CardFoodComponent/foodCardList";
// import Counter from "../FoodCounterComponent/counterComponent";
// import store from "../../store";
import React, { useEffect, useState } from "react";
import FoodCard from "../CardFoodComponent/foodCard.jsx";
import "../../../static/style/food-card.css";

const MainContent = (props) => {

  let menuProductsList;
  let products = { ...props.foodData };
  menuProductsList = products.menu || {};

  return (
    <ul id="products-list" className="products-list">
      <FoodCard menuList={menuProductsList} />
      {/* {this.card.render(menuValue)} */}
    </ul>
  );
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
