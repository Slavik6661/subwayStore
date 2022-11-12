import EventBus from "../../../componentss/pubSub";
import BottomModal from "./bottomModalComponent";
class Modal {
  sandwichesCustom = [];
  selectCardActive = {};
  summaModal = 0;
  customSandwichesModal = [];
  menuState = {
    active: 0,
  };
  stateModal = {
    menuActive: [],
    modalCardActive: [],
  };
  constructor(rootCard, content, modalCard, modalMenu, modalBottom) {
    this.rootCard = rootCard;
    this.content = content;
    this.modalCard = modalCard;
    this.modalMenu = modalMenu;
    this.modalBottom = modalBottom;
    EventBus.subscribe("modalMenuValue", this.rerender.bind(this));
  }
  rerender(menuValue) {
    document.querySelector("#modal-overlay").remove();
    let modalHtml = "";
    modalHtml = /*html*/ `

        <dialog id="modal-content">
            <div id="modal-top">
                <input type="button" name="close-modal" id="close-modal" value="X"/>
            </div>
            <form method="dialog" class='modal-form'>
                ${this.modalMenu.render()}
                <div class="button-next-Ingredients">
                    <input type="button" id="back" value="< НАЗАД"/>
                    <input type="button" id="next" value="ВПЕРЕД >">
                </div>
                <ul id="size-selection">
                    ${this.modalCard.render(menuValue)}
                </ul>
                <div id="modal-bottom">
                <p>Итого:${this.summaModal} руб</p>
                </div>
            </form>
        </dialog>

    `;

    this.createModalContent(modalHtml);
    let modal = document.querySelector("#modal-content");
    let menuModal = document.querySelector("#menu-modal");
    let btnNext = document.querySelector("#next");
    let btnBack = document.querySelector("#back");
    let menuModalElement = menuModal.children;
    modal.showModal();

    this.menuActive();
    this.buttonSelectedMenu(btnNext, btnBack, menuModalElement);
    this.showAndHidingButton(btnNext, btnBack);
    this.selectModalCard(menuModalElement);
    this.consoleModal();
  }
  render() {
    console.log("modalComponent Render");
    let modalHtml = "";
    modalHtml = /*html*/ `
   
        <dialog id="modal-content">
            <div id="modal-top">
                <input type="button" name="close-modal" id="close-modal" value="X"/>
            </div>
            <form method="dialog" class='modal-form'>
                ${this.modalMenu.render()}
                <div class="button-next-Ingredients">
                    <input type="button" id="back" value="< НАЗАД"/>
                    <input type="button" id="next" value="ВПЕРЕД >">
                </div>
                <ul id="size-selection">
                    ${this.modalCard.render()}
                </ul>
                <div id="modal-bottom">
                <p>Итого:${this.summaModal} руб</p>
                </div>
            </form>
        </dialog>
   
    `;

    let modalContent = document.createElement("div");
    modalContent.id = "modal-overlay";
    modalContent.className = "modal-overlay";
    modalContent.innerHTML = modalHtml;
    this.rootCard.appendChild(modalContent);
    let modal = document.querySelector("#modal-content");

    let menuModal = document.querySelector("#menu-modal");
    let btnNext = document.querySelector("#next");
    let btnBack = document.querySelector("#back");
    let menuModalElement = menuModal.children;
    modal.showModal();
    this.menuActive();
    this.buttonSelectedMenu(btnNext, btnBack, menuModalElement);
    this.showAndHidingButton(btnNext, btnBack);
    this.selectModalCard(menuModalElement);
    this.consoleModal();

    if (document.getElementById("modal-bottom")) {
      new BottomModal(document.getElementById("modal-bottom"));
    }
  }
  set setState(newState) {
    this.menuState = newState;
    this.rerender();
  }

  createModalContent(modalHtml) {
    let modalContent = document.createElement("div");
    modalContent.id = "modal-overlay";
    modalContent.className = "modal-overlay";
    modalContent.innerHTML = modalHtml;
    this.rootCard.appendChild(modalContent);
  }

  selectModalCard(menuModalElement) {
    let menuCategories = menuModalElement[this.menuState.active].id;
    let foodName;
    let foodPrice;
    let cardProductObj;

    let sizeSelection = document.querySelector("#size-selection");
    for (let i = 0; i <= sizeSelection.children.length - 1; i++) {
      let card = document.querySelector(`#id-modal-card-${i}`);

      card.addEventListener("click", (e) => {
        cardProductObj = Object.entries(this.content[menuCategories])[i][1];
        foodName = cardProductObj.name;
        foodPrice = +cardProductObj.price;
        if (e.currentTarget.className === "selected") {
          card.className = "active-modal";
          this.createOrderObj(i, foodName, foodPrice, menuCategories);
          this.totalSummModal();
        } else {
          card.className = "selected";
          if (Object.keys(this.sandwichesCustom).includes(menuCategories)) {
            cardProductObj = Object.entries(this.content[menuCategories])[i][1];
            let idCard = i;
            this.deleteFood(menuCategories, idCard);
          }
        }
      });
    }

    console.log(this.sandwichesCustom);
    this.customSandwichesModal = [];
  }
  createOrderObj(i, foodName, foodPrice, menuCategories) {
    this.customSandwichesModal.push({ id: i, foodName, foodPrice });
    this.selectCardActive[menuCategories] = this.customSandwichesModal;
    this.sandwichesCustom = this.selectCardActive;
    console.log(this.sandwichesCustom);
  }

  deleteFood(menuCategories, idCard) {
    Object.values(this.sandwichesCustom[menuCategories]).forEach(
      (element, index) => {
        if (element.id === idCard) {
          console.log("delete element", element.id, index);
          this.sandwichesCustom[menuCategories].splice(index, 1);
          // console.log(this.sandwichesCustom);
          this.totalSummModal(menuCategories);
        }
      }
    );
  }

  totalSummModal() {
    this.summaModal = 0;
    for (let i = 0; i < Object.values(this.sandwichesCustom).length; i++) {
      for (let j = 0; j < Object.values(this.sandwichesCustom)[i].length; j++) {
        this.summaModal += Object.values(this.sandwichesCustom)[i][j].foodPrice;
      }
    }
    EventBus.publish("modalSum", this.summaModal);
    // document.querySelector("#modal-bottom").innerHTML =
    //   this.modalBottomRender();
  }
  addActiveModalCard(menuModalElement, categoryMenu) {
    if (Object.keys(this.sandwichesCustom).includes(categoryMenu)) {
      this.sandwichesCustom[categoryMenu].forEach((el) => {
        document.querySelector(`#id-modal-card-${el.id}`).className =
          "active-modal";
      });
    } else {
      ("");
    }
  }

  nextMenuItem(menuModalElement) {
    this.menuState.active < menuModalElement.length - 1
      ? (this.setState = {
          ...this.menuState,
          active: this.menuState.active + 1,
        })
      : "";
    let categoryMenu = menuModalElement[this.menuState.active].id;
    EventBus.publish("modalMenuValue", categoryMenu);
    this.addActiveModalCard(menuModalElement, categoryMenu);
    if (categoryMenu === "ready") {
      EventBus.publish("modalRender", this.sandwichesCustom);
    }
  }

  backMenuItem(menuModalElement) {
    this.menuState.active > 0
      ? (this.setState = {
          ...this.menuState,
          active: this.menuState.active - 1,
        })
      : "";
    let categoryMenu = menuModalElement[this.menuState.active].id;
    EventBus.publish("modalMenuValue", categoryMenu);

    this.addActiveModalCard(menuModalElement, categoryMenu);
  }

  resetMenuState() {
    this.menuState = {
      ...this.menuState,
      active: this.menuState.active * 0,
    };
  }
  showAndHidingButton(btnNext, btnBack) {
    this.menuState.active > 0
      ? (btnBack.style.display = "block")
      : (btnBack.style.display = "none");

    this.menuState.active < 5
      ? (btnNext.style.display = "block")
      : (btnNext.style.display = "none");
  }
  menuActive() {
    let menuModalActive = document.querySelectorAll("#menu-modal input");
    this.stateModal.menuActive = [];
    menuModalActive.forEach((element) => {
      this.stateModal.menuActive.push(element);
    });
    this.stateModal.menuActive[this.menuState.active].className =
      "active-modal-menu";
  }

  buttonSelectedMenu(btnNext, btnBack, menuModalElement) {
    btnNext.addEventListener("click", () => {
      this.nextMenuItem(menuModalElement);
    });
    btnBack.addEventListener("click", () => {
      this.backMenuItem(menuModalElement);
    });
  }
  consoleModal() {
    let modalClose = document.querySelector("#close-modal");
    modalClose.addEventListener("click", () => {
      document.querySelector("#modal-overlay").remove();
      this.sandwichesCustom = [];
      this.summaModal = 0;
      this.resetMenuState();
    });
  }
}

export default Modal;
