import EventBus from "../../../componentss/pubSub";
import Counter from "../FoodCounterComponent/counterComponent";
import store from "../../store";

class ModalOrderReady {
  foodImg;

  foodName;

  rootModalReady = "";

  rootModalReadyBottom = "";

  summaModal = 0;

  idCard;

  counter;

  constructor() {
    this.counter = new Counter();
    EventBus.subscribe("cardInfo", this.modalInfo.bind(this));
    EventBus.subscribe("modalMenuValue", this.modalInfo.bind(this));
    EventBus.subscribe("modalRenderReady", this.render.bind(this));
  }

  modalInfo(i) {
    this.foodImg = document.querySelector(`#photo-food-${i} img`).src;
    this.foodName = document.querySelector(`#name-food-${i}`).innerText;
    this.idCard = `idCard-${i}`;
  }

  modalSum(modalSum) {
    this.summaModal = modalSum;
  }

  render(sandwichesCustom) {
    let selectSize = "";
    this.rootModalReady = document.querySelector("#size-selection");
    Object.entries(sandwichesCustom).forEach((element) => {
      element[1].forEach((el) => {
        const order = `${el.categoryMenuValue}:${el.foodName}`;
        selectSize += `<p style="margin-top: 0px;">${order}</p>`;
      });
    });
    const htmlModalReady = /* html */ ` 
      <div class="img_food">
        <img class="img_food-modal" src =${this.foodImg}>
        </div>
      <div class=info>
     
      <p style="margin-top: 0px;">Ваш ${this.foodName} сендвич готов!</p>
      <hr>
      <p style="margin-top: 0px;">${selectSize}
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

     ${this.counter.render(this.idCard).innerHTML}
            </div>

            <div class="summaPrice">
    <p>Итого:${store.modalSum} руб </p>
    <button type="submit" id="button-add-basket"> В КОРЗИНУ</button>
    </div>
    `;
  }

  addEventListeners() {
    this.counter.render(this.idCard);
    this.counter.addEventListeners(this.idCard);
    document
      .querySelector("#button-add-basket")
      .addEventListener("click", () => {
        console.log("add bucket");
      });
  }
}
export default ModalOrderReady;
