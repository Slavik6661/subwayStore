import EventBus from "../../../componentss/pubSub";
import FoodCardList from "../CardFoodComponent/foodCardList";
import Counter from "../FoodCounterComponent/counterComponent";
import store from "../../store";

class Content {
  htmlCardFood = "";

  card;

  counter;

  constructor(content) {
    //  this.rootCard = rootCard;
    this.content = content;

    this.counter = new Counter();
    this.card = new FoodCardList(content, this.counter);
   // EventBus.subscribe("menuValue", this.upRender.bind(this));
  }

  upRender(menuValue) {
    console.log("Render menuValue");
    store.stateCounter = [];
    store.productsFromTheCurrentPage = [];
    const contentFood = document.querySelector("#contentFoods");
    contentFood.innerHTML = "";
    const html = this.render(menuValue);
    contentFood.insertAdjacentHTML("afterbegin", html);
    // this.render(menuValue);
  }

  render(menuValue) {
    console.log("renderContent");
    let htmlContent = "";

    htmlContent = /* html */ `
    <ul id="products-list" class='products-list'>
    ${this.card.render(menuValue)}
    </ul>
    `;
    return htmlContent;
  }
}

export default Content;

// const productsList = document.createElement("ul");
// productsList.id = "products-list";
// productsList.className = "products-list";
// productsList.innerHTML = this.card.renderCardFood(menuValue).html;
// this.rootCard.innerHTML = "";
// this.rootCard.appendChild(productsList);

// for (let idCard = 0; idCard < store.stateCounter.length; idCard += 1) {
//   this.counter.addEventListeners(idCard, htmlContent);
//   this.card.addEventListeners(idCard, htmlContent);
// }
