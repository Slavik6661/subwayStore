import EventBus from "../../../componentss/pubSub";
class ModalCard {
  constructor(content) {
    this.content = content;
    EventBus.subscribe("modalMenuValue", this.render.bind(this));
    this.render();
  }
  upRender(modalElement) {
    // console.log(modalElement);
  }
  render(modalElement) {
    console.log("modalCardRender");
    let modalCardHtml = "";
    let i = 0;
    modalElement === undefined
      ? (modalElement = "sizes")
      : (modalElement = modalElement);

    for (let key in this.content[`${modalElement}`]) {
      let element = this.content[`${modalElement}`][key];
      modalCardHtml += /*html*/ `
        <div class='selected' id = 'id-modal-card-${i}'>
            <div class="background">
              <image src="static/${element.image}"/>
            </div>
                <p style="margin-top: 10px;">${element.name}</p>
                    <hr>
              <p>${element.price} руб</p>
  
        </div>
          `;
      i += 1;
    }
    return modalCardHtml;
  }
}
export default ModalCard;
