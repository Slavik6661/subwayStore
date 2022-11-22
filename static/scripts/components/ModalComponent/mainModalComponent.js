import EventBus from "../../../componentss/pubSub";
import ModalOrderReady from "./modalReadyComponent";
import BottomModal from "./bottomModalComponent";
import ModalMenu from "./modalMenuComponent";
import ModalCard from "./modalCardComponent";

class MainModal {
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

  modalMenu;

  modalBottom = "";

  modalCard;

  rootCard = "";

  constructor(content, counter) {
    // this.modalCard = modalCard;
    // this.modalMenu = modalMenu;
    // this.modalBottom = modalBottom;
    this.content = content;
    this.counter = counter;
    EventBus.subscribe("addInBusket", this.render.bind(this));
    EventBus.subscribe("modalMenuId", this.rerender.bind(this));
    this.modalMenu = new ModalMenu();
    this.modalCard = new ModalCard(this.content);
    new BottomModal();
    new ModalOrderReady(counter);
  }

  rerender(menuId) {
    this.rootCard = document.querySelector("#contentFoods");

    document.querySelector("#modal-overlay").remove();
    let modalHtml = "";
    modalHtml = /* html */ `

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
                    ${this.modalCard.render(menuId)}
                </ul>
                <div id="modal-bottom">
                <p>Итого:${this.summaModal} руб</p>
                </div>
            </form>
        </dialog>

    `;

    this.createModalContent(modalHtml);
    const modal = document.querySelector("#modal-content");
    const menuModal = document.querySelector("#menu-modal");
    const btnNext = document.querySelector("#next");
    const btnBack = document.querySelector("#back");
    const menuModalElement = menuModal.children;
    modal.showModal();

    this.menuActive();
    this.buttonSelectedMenu(btnNext, btnBack, menuModalElement);
    this.showAndHidingButton(btnNext, btnBack);
    this.selectModalCard(menuModalElement);
    this.consoleModal();
  }

  render(cardId) {
    this.rootCard = document.querySelector("#contentFoods");
    console.log("modalComponent Render");
    let modalHtml = "";
    modalHtml = /* html */ `

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

    // let modalContents = new ModalContent();

    const modalContent = document.createElement("div");
    modalContent.id = "modal-overlay";
    modalContent.className = "modal-overlay";
    modalContent.innerHTML = modalHtml;
    this.rootCard.appendChild(modalContent);

    const modal = document.querySelector("#modal-content");

    // let menuModal = document.querySelector("#menu-modal");

    const btnNext = document.querySelector("#next");
    const btnBack = document.querySelector("#back");
    // let menuModalElement = menuModal.children;
    modal.showModal();
    const menuModal = document.querySelector("#menu-modal");
    const menuModalElement = menuModal.children;
    this.menuActive();
    this.buttonSelectedMenu(btnNext, btnBack, menuModalElement);
    this.showAndHidingButton(btnNext, btnBack);
    this.selectModalCard(menuModalElement);
    this.consoleModal();

    // if (document.getElementById("modal-bottom")) {
    //   new BottomModal(document.getElementById("modal-bottom"));
    // }

    // if (document.getElementById("modal-bottom")) {
    //   new BottomModal(document.getElementById("modal-bottom"));
    // }
  }

  set setState(newState) {
    this.menuState = newState;
    this.rerender();
  }

  createModalContent(modalHtml) {
    const modalContent = document.createElement("div");
    modalContent.id = "modal-overlay";
    modalContent.className = "modal-overlay";
    modalContent.innerHTML = modalHtml;
    this.rootCard.appendChild(modalContent);
  }

  selectModalCard(menuModalElement) {
    const menuCategoriesId = menuModalElement[this.menuState.active].id;
    const categoryMenuValue = menuModalElement[this.menuState.active].value;
    let foodName;
    let foodPrice;
    let cardProductObj;

    const sizeSelection = document.querySelector("#size-selection");
    for (let i = 0; i <= sizeSelection.children.length - 1; i++) {
      const card = document.querySelector(`#id-modal-card-${i}`);

      card.addEventListener("click", (e) => {
        cardProductObj = Object.entries(this.content[menuCategoriesId])[i][1];
        foodName = cardProductObj.name;
        foodPrice = +cardProductObj.price;
        if (e.currentTarget.className === "selected") {
          card.className = "active-modal";
          this.createOrderObj(
            i,
            foodName,
            foodPrice,
            menuCategoriesId,
            categoryMenuValue,
          );
          this.totalSummModal();
        } else {
          card.className = "selected";
          if (Object.keys(this.sandwichesCustom).includes(menuCategoriesId)) {
            cardProductObj = Object.entries(this.content[menuCategoriesId])[
              i
            ][1];
            const idCard = i;
            this.deleteFood(menuCategoriesId, idCard);
          }
        }
      });
    }

    console.log(this.sandwichesCustom);
    this.customSandwichesModal = [];
  }

  createOrderObj(i, foodName, foodPrice, menuCategoriesId, categoryMenuValue) {
    this.customSandwichesModal.push({
      id: i,
      foodName,
      foodPrice,
      categoryMenuValue,
    });
    this.selectCardActive[menuCategoriesId] = this.customSandwichesModal;
    this.sandwichesCustom = this.selectCardActive;
    console.log(this.sandwichesCustom);
  }

  deleteFood(menuCategoriesId, idCard) {
    Object.values(this.sandwichesCustom[menuCategoriesId]).forEach(
      (element, index) => {
        if (element.id === idCard) {
          console.log("delete element", element.id, index);
          this.sandwichesCustom[menuCategoriesId].splice(index, 1);
          // console.log(this.sandwichesCustom);
          this.totalSummModal(menuCategoriesId);
        }
      },
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

  addActiveModalCard(categoryMenuId) {
    if (Object.keys(this.sandwichesCustom).includes(categoryMenuId)) {
      this.sandwichesCustom[categoryMenuId].forEach((el) => {
        document.querySelector(`#id-modal-card-${el.id}`).className = "active-modal";
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
    const categoryMenuId = menuModalElement[this.menuState.active].id;
    const categoryMenuValue = menuModalElement[this.menuState.active].value;
    EventBus.publish("modalMenuId", categoryMenuId);

    this.addActiveModalCard(categoryMenuId);
    if (categoryMenuId === "ready") {
      EventBus.publish("modalRenderReady", this.sandwichesCustom);
      this.summaModal;
    }
  }

  backMenuItem(menuModalElement) {
    this.menuState.active > 0
      ? (this.setState = {
        ...this.menuState,
        active: this.menuState.active - 1,
      })
      : "";
    const categoryMenuId = menuModalElement[this.menuState.active].id;
    const categoryMenuValue = menuModalElement[this.menuState.active].value;
    EventBus.publish("modalMenuId", categoryMenuId);

    this.addActiveModalCard(categoryMenuId);
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
    const menuModalActive = document.querySelectorAll("#menu-modal input");
    this.stateModal.menuActive = [];
    menuModalActive.forEach((element) => {
      this.stateModal.menuActive.push(element);
    });
    this.stateModal.menuActive[this.menuState.active].className = "active-modal-menu";
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
    const modalClose = document.querySelector("#close-modal");
    modalClose.addEventListener("click", () => {
      document.querySelector("#modal-overlay").remove();
      this.sandwichesCustom = [];
      this.summaModal = 0;
      this.resetMenuState();
    });
  }
}

export default MainModal;
