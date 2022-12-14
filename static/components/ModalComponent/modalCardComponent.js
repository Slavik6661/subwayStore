import EventBus from "../../../component/pubSub";
import store from "../../store";

class ModalCard {
  constructor(content) {
    this.content = content;
    EventBus.subscribe("modalMenuId", this.render.bind(this));
  }

  render(categoryMenu) {
    console.log("modalCardRender");
    let modalCardHtml = "";
    let i = 0;
    categoryMenu === undefined
      ? (categoryMenu = "sizes")
      : (categoryMenu = categoryMenu);

    for (const key in this.content[`${categoryMenu}`]) {
      const element = this.content[`${categoryMenu}`][key];
      modalCardHtml += /* html */ `
        <div class='selected' id = 'id-modal-card-${i}'>
            <div class="background">
              <image src="static/${element.image}"/>
            </div>
                <p>${element.name}</p>
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
