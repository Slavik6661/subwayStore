import EventBus from "../../../component/pubSub";

class BottomModal {
  rootBottomComponent = "";

  constructor() {
    EventBus.subscribe("modalSum", this.modalBottomRender.bind(this));
  }

  modalBottomRender(summaModal) {
    console.log("modalBottomRender");
    const modalBottom = /*html*/ `
        <p>Итого:${summaModal} руб</p>
        `;
    this.rootBottomComponent = document.querySelector("#modal-bottom");
    this.rootBottomComponent.innerHTML = modalBottom;
  }
}
export default BottomModal;
