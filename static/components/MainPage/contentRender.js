import EventBus from "../../../componentss/pubSub";
import FoodCardList from "../CardFoodComponent/foodCardList";
import Menu from "../MenuComponent/menuComponent";
import Counter from "../FoodCounterComponent/counterComponent";
import store from "../../store";

class Content {
  htmlCardFood = "";

  card;

  counter;

  constructor(rootCard, modal, content) {
    this.rootCard = rootCard;
    this.content = content;
    this.modal = modal;
    this.counter = new Counter();
    EventBus.subscribe("menuValue", this.upRender.bind(this));
    new Menu(document.getElementById("menu"), this.content);

    this.card = new FoodCardList(this.content, this.counter);
    this.render();
  }

  upRender(menuValue) {
    console.log("Render menuValue");
    store.stateCounter = [];
    this.render(menuValue);
  }

  render(menuValue) {
    console.log("renderContent");

    const productsList = document.createElement("ul");
    productsList.id = "products-list";
    productsList.className = "products-list";
    productsList.innerHTML = this.card.cardFood(menuValue).html;
    this.rootCard.innerHTML = "";
    this.rootCard.appendChild(productsList);

    for (let idCard = 0; idCard < store.stateCounter.length; idCard++) {
      this.rootCard
        .querySelector(`#add-food-${idCard}`)
        .addEventListener("click", () => {
          store.stateCounter[idCard] += 1;

          this.counter.state.counter = store.stateCounter[idCard];
          const x = this.rootCard.querySelector(`#amount-food-${idCard}`);
          x.defaultValue = this.counter.state.counter;
          EventBus.publish("counterValue", +this.counter.value);
        });

      this.rootCard
        .querySelector(`#delete-food-${idCard}`)
        .addEventListener("click", () => {
          console.log(this.counter.state.counter);
          if (this.counter.state.counter > 1) {
            store.stateCounter[idCard] -= 1;
            this.counter.state.counter = store.stateCounter[idCard];
            const x = this.rootCard.querySelector(`#amount-food-${idCard}`);
            x.defaultValue = this.counter.state.counter;
          } else {
            console.log("");
          }
          EventBus.publish("counterValue", +this.counter.value);
        });

      this.rootCard
        .querySelector(`#button-buy-${idCard}`)
        .addEventListener("click", () => {
          const menuSection = this.card.cardFood(menuValue).menuValue;
          if (menuSection === "sandwiches") {
            console.log("sandwiches");
            EventBus.publish("addInBusket", idCard);
            EventBus.publish("cardInfo", idCard);
          } else {
            EventBus.publish("idCard", idCard);
          }
        });
    }
  }
}

export default Content;

// const rootCard = document.querySelector("#contentFoods");
// async function getResponse() {
//   let response = await fetch("http://myjson.dit.upm.es/api/bins/9np0");
//   let content = await response.json();
//   return content;
// }
// getResponse().then((content) => {
//   let counter = new Counter();
//   let card = new FoodCard(content, counter);

//   let cardFood = new Content(rootCard, card);
// });
