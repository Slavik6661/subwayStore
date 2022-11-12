import EventBus from "../../../componentss/pubSub";
class ModalOrderReady {
  foodImg;
  foodName;
  rootModalReady = "";
  constructor() {
    EventBus.subscribe("cardInfo", this.modalInfo.bind(this));
    EventBus.subscribe("modalRender", this.ModalOrderReadyRender.bind(this));
  }

  modalInfo(i) {
    this.foodImg = document.querySelector(`#photo-food-${i} img`).src;
    this.foodName = document.querySelector(`#name-food-${i}`).innerText;
  }

  ModalOrderReadyRender(sandwichesCustom) {
    console.log(sandwichesCustom);
    console.log("!!!!!!!!", this.foodImg, this.foodName);
    let selectSize = "";
    this.rootModalReady = document.querySelector("#size-selection");
    Object.entries(sandwichesCustom).forEach((element, index) => {
      // console.log(element[0], element[1]);
      element[1].forEach((el) => {
        console.log("&&&&&", element[0]);
        let order = `${element[0]}:${el.foodName}`;
        selectSize += `<p style="margin-top: 0px;">${order}</p>`;
      });
    });
    let htmlModalReady = /*html*/ ` 
      <div class="img_food">
        <img src =${this.foodImg} style=" background-color: white;
          border-radius: 100px;
          width: 165px;
          height: 166px;
          margin-top: 10px;">
    
        </div>
      <div class=info>
     
      <p style="margin-top: 0px;">Ваш сендвич готов!</p>
      <hr>
      <p style="margin-top: 0px;">${selectSize}
      <hr>
      <p>${this.foodName}</p>
      </div>
      `;

    this.rootModalReady.innerHTML = htmlModalReady;
  }
}
export default ModalOrderReady;
