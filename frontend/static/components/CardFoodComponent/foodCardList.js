import EventBus from "../../../component/pubSub";
import FoodCard from "./foodCard";
import Counter from "../FoodCounterComponent/counterComponent";
import MainModal from "../ModalComponent/mainModalComponent";
import store from "../../store";

class FoodCardList {
  foodCard;

  menuItem;

  modal;

  counter;

  constructor(content) {
    this.content = content;
    this.foodCard = new FoodCard();
    this.counter = new Counter();
    this.modal = new MainModal(content);
    EventBus.subscribe("menuValue", this.render.bind(this));
  }

  render(menuValue = "sandwiches") {
    console.log("!!!!!", menuValue);
    let html = "";
    console.log("render cardFood 1", menuValue);
    this.menuItem = menuValue;
    let element;
    let idCard = 0;

    this.counter.state.counter = 1;
    for (const i in this.content.menu) {
      element = this.content.menu[i];

      if (element.category === menuValue) {
        store.stateCounter.push(this.counter.state.counter);
        store.productsFromTheCurrentPage.push(element);
        html += this.foodCard.render(idCard, element);
        idCard += 1;
      }
    }
    console.log("render cardFood 2");
    return html;
  }

  addEventListeners(idCard, root) {
    root
      .querySelector(`#button-buy-${idCard}`)
      .addEventListener("click", () => {
        const menuSection = this.menuItem;
        if (menuSection === "sandwiches") {
          console.log("sandwiches");
          EventBus.publish("addInBusket");
          EventBus.publish("modalInfo", idCard);
        } else {
          EventBus.publish("addFood", idCard);
        }
      });
  }
}

export default FoodCardList;
