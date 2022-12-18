import EventBus from "../../../component/pubSub";
import Counter from "../FoodCounterComponent/counterComponent";
import store from "../../store";

class ModalOrderReady {
  foodImg;

  foodName;

  rootModalReady = "";

  rootModalReadyBottom = "";

  summaModal = 0;

  idCard;

  mainModal;

  counter;

  constructor() {
    this.counter = new Counter();
    EventBus.subscribe("modalInfo", this.modalInfo.bind(this));
    EventBus.subscribe("modalMenuValue", this.modalInfo.bind(this));
    EventBus.subscribe("modalRenderReady", this.render.bind(this));
  }

  modalInfo(idCard) {
    this.foodImg = document.querySelector(`#photo-food-${idCard} img`).src;
    this.foodName = document.querySelector(`#name-food-${idCard}`).innerText;
    this.idCard = idCard;
  }

  render(sandwichesCustom) {
    if (sandwichesCustom.length === 0) {
      sandwichesCustom = { ...store.orderDefolt };
      store.modalSum = store.productsFromTheCurrentPage[this.idCard].price;
    }
    let selectSize = "";
    this.rootModalReady = document.querySelector("#size-selection");
    Object.entries(sandwichesCustom).forEach((element) => {
      element[1].forEach((el) => {
        const order = `${el.categoryMenuValue}:${el.foodName}`;
        selectSize += `<p>${order}</p>`;
      });
    });
    const htmlModalReady = /* html */ ` 
      <div class="img_food">
        <img class="img_food-modal" src =${this.foodImg}>
        </div>
      <div class=info>
     
      <p>Ваш ${this.foodName} сендвич готов!</p>
      <hr>
      <p >${selectSize}
      <hr>
      <p>${this.foodName}</p>
      </div>
      `;

    this.rootModalReady.innerHTML = htmlModalReady;
    this.rootModalReadyBottom = document.querySelector("#modal-bottom");
    // eslint-disable-next-line operator-linebreak
    this.rootModalReadyBottom.innerHTML =
      /* html */
      `
    <div class="select-amountFood">
      <p>Количество</p>
          ${this.counter.render(this.idCard)}
    </div>

    <div class="summaPrice">
      <p>Итого:${store.modalSum} руб </p>
      <button type="submit" id="button-add-basket"> В КОРЗИНУ</button>
    </div>
    `;

    this.counter.addEventListeners(this.idCard, this.rootModalReadyBottom);
    console.log(this.rootModalReadyBottom.querySelector("#button-add-basket"));
    this.addCustomSandwichesInBucket();
  }

  addCustomSandwichesInBucket() {
    this.rootModalReadyBottom
      .querySelector("#button-add-basket")
      .addEventListener("click", () => {
        EventBus.publish("clickButtonAddBasketModal", this.idCard);
        EventBus.publish("deleteModalData");
      });
  }
}
export default ModalOrderReady;
