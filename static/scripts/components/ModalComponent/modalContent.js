import ModalMenu from "./modalMenuComponent";
import ModalCard from "./modalCardComponent";
import getResponse from "../../../componentss/API/content";
class ModalContent {
  modalHtml = "";
  //   modalMenu;
  //   modalCard;
  constructor() {}

  render() {
    // let modalHtml = "";
    let modalMenu;
    let modalCard;
    getResponse().then((content) => {
      console.log("modalComponent Render");
      //   this.modalMenu = new ModalMenu();
      //   this.modalCard = new ModalCard(content);
      modalMenu = new ModalMenu();
      modalCard = new ModalCard(content);

      this.modalHtml = /*html*/ `
       
            <dialog id="modal-content">
                <div id="modal-top">
                    <input type="button" name="close-modal" id="close-modal" value="X"/>
                </div>
                <form method="dialog" class='modal-form'>
                    ${modalMenu.render()}
                    <div class="button-next-Ingredients">
                        <input type="button" id="back" value="< НАЗАД"/>
                        <input type="button" id="next" value="ВПЕРЕД >">
                    </div>
                    <ul id="size-selection">
                        ${modalCard.render()}
                    </ul>
                    <div id="modal-bottom">
                    <p>Итого:${1} руб</p>
                    </div>
                </form>
            </dialog>
       
        `;
      return modalHtml;
    });
    console.log("ttttttttttt", this.modalHtml);
  }
}

export default ModalContent;
