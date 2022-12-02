import EventBus from "../../../componentss/pubSub";

class ModalOrderReady {
  foodImg;

  foodName;

  rootModalReady = "";

  rootModalReadyBottom = "";

  idCard;

  constructor(counter) {
    EventBus.subscribe("cardInfo", this.modalInfo.bind(this));
    EventBus.subscribe("modalMenuValue", this.modalInfo.bind(this));
    EventBus.subscribe(
      "modalRenderReady",
      this.ModalOrderReadyRender.bind(this)
    );
    EventBus.subscribe("sumModal", this.modalInfo.bind(this));
    this.counter = counter;
  }

  modalInfo(i) {
    this.foodImg = document.querySelector(`#photo-food-${i} img`).src;
    this.foodName = document.querySelector(`#name-food-${i}`).innerText;
    this.idCard = i;
  }

  ModalOrderReadyRender(sandwichesCustom) {
    let selectSize = "";
    this.rootModalReady = document.querySelector("#size-selection");
    Object.entries(sandwichesCustom).forEach((element, index) => {
      element[1].forEach((el) => {
        const order = `${el.categoryMenuValue}:${el.foodName}`;
        selectSize += `<p style="margin-top: 0px;">${order}</p>`;
      });
    });
    const htmlModalReady = /*html*/ ` 
      <div class="img_food">
        <img src =${this.foodImg} style=" background-color: white;
          border-radius: 100px;
          width: 165px;
          height: 166px;
          margin-top: 10px;">
    
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
    this.rootModalReadyBottom.innerHTML =
      /* html */
      `
    <div class="select-amountFood">
    <p>Количество</p>

     ${this.counter.render(this.idCard).innerHTML}
            </div>

            <div class="summaPrice">
    <p>Итого:${0} руб </p>
    <button type="submit" id="button-add-basket"> В КОРЗИНУ</button>
    </div>`;
    this.counter.eventListener(this.idCard);
  }
}
export default ModalOrderReady;
