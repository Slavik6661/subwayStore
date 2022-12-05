import EventBus from "../../../componentss/pubSub";
import ModalOrderReady from "./modlFinishOrderConfiguration";
import BottomModal from "./bottomModalComponent";
import ModalMenu from "./modalMenuComponent";
import ModalCard from "./modalCardComponent";
import store from "../../store";

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

  idCard;

  rootCard = "";

  constructor(content) {
    this.content = content;
    // EventBus.subscribe("addInBusket", this.render.bind(this));
    EventBus.subscribe("cardInfo", this.sumModal.bind(this));
    EventBus.subscribe("modalMenuId", this.rerender.bind(this));
    EventBus.subscribe("deleteModalData", this.deleteModalData.bind(this));

    this.modalMenu = new ModalMenu();
    this.modalCard = new ModalCard(this.content);
    // eslint-disable-next-line no-new
    new BottomModal();
    // eslint-disable-next-line no-new
    new ModalOrderReady();
  }

  rerender(menuId) {
    document.querySelector("#modal-overlay").remove();
    this.render(menuId);
  }

  sumModal(idCard) {
    this.summaModal = store.productsFromTheCurrentPage[idCard].price;
    this.idCard = idCard;
    this.render();
  }
  // rerender(menuId) {
  //   this.rootCard = document.querySelector("#contentFoods");

  //   document.querySelector("#modal-overlay").remove();
  //   let modalHtml = "";
  //   modalHtml = /* html */ `

  //       <dialog id="modal-content">
  //           <div id="modal-top">
  //               <input type="button" name="close-modal" id="close-modal" value="X"/>
  //           </div>
  //           <form method="dialog" class='modal-form'>
  //               ${this.modalMenu.render()}
  //               <div class="button-next-Ingredients">
  //                   <input type="button" id="back" value="< НАЗАД"/>
  //                   <input type="button" id="next" value="ВПЕРЕД >">
  //               </div>
  //               <ul id="size-selection">
  //                   ${this.modalCard.render(menuId)}
  //               </ul>
  //               <div id="modal-bottom">
  //               <p>Итого:${this.summaModal} руб</p>
  //               </div>
  //           </form>
  //       </dialog>

  //   `;

  //   this.createModalContent(modalHtml);
  //   const modal = document.querySelector("#modal-content");
  //   const menuModal = document.querySelector("#menu-modal");
  //   const btnNext = document.querySelector("#next");
  //   const btnBack = document.querySelector("#back");
  //   const menuModalElement = menuModal.children;
  //   modal.showModal();

  //   this.menuActive();
  //   this.RestrictionOnAddProduct(menuModalElement);
  //   this.buttonSelectedMenu(btnNext, btnBack, menuModalElement);
  //   this.showAndHidingButton(btnNext, btnBack);
  //   this.selectModalCard(menuModalElement);
  //   this.consoleModal();
  // }

  render(menuId) {
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
                    ${this.modalCard.render(menuId)}
                </ul>
                <div id="modal-bottom">
                <p>Итого:${this.summaModal} руб</p>
                </div>
            </form>
        </dialog>

    `;
    const modalContent = document.createElement("div");
    modalContent.id = "modal-overlay";
    modalContent.className = "modal-overlay";
    modalContent.innerHTML = modalHtml;
    this.rootCard.appendChild(modalContent);
    const modal = document.querySelector("#modal-content");
    const menuModal = document.querySelector("#menu-modal");
    const btnNext = document.querySelector("#next");
    const btnBack = document.querySelector("#back");
    const menuModalElement = menuModal.children;
    modal.showModal();
    this.menuActive();
    this.RestrictionOnAddProduct(menuModalElement);
    this.buttonSelectedMenu(btnNext, btnBack, menuModalElement);
    this.showAndHidingButton(btnNext, btnBack);
    this.selectModalCard(menuModalElement);
    this.consoleModal();
  }

  set setState(newState) {
    this.menuState = newState;
    store.menuStateModal = this.menuState.active;
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
    for (let i = 0; i <= sizeSelection.children.length - 1; i += 1) {
      const card = document.querySelector(`#id-modal-card-${i}`);

      // eslint-disable-next-line no-loop-func
      card.addEventListener("click", (e) => {
        const [_, productObject] = Object.entries(
          this.content[menuCategoriesId]
        )[i];
        cardProductObj = productObject;
        foodName = cardProductObj.name;
        foodPrice = +cardProductObj.price;

        if (e.currentTarget.className === "selected") {
          card.className = "active-modal";
          this.createOrderObj(
            i,
            foodName,
            foodPrice,
            menuCategoriesId,
            categoryMenuValue
          );
          this.RestrictionOnAddProduct(menuModalElement);
          this.totalSummModal();
        } else {
          card.className = "selected";

          if (Object.keys(this.sandwichesCustom).includes(menuCategoriesId)) {
            const [, productObject] = Object.entries(
              this.content[menuCategoriesId]
            )[i];
            cardProductObj = productObject;
            const idCard = i;
            this.deleteFood(menuCategoriesId, idCard);
            this.RestrictionOnAddProduct(menuModalElement);
          }
        }
      });
    }

    console.log("!!!!!!!!!!", this.sandwichesCustom);
    this.customSandwichesModal = [];
    if (this.sandwichesCustom[menuCategoriesId]) {
      this.customSandwichesModal = [...this.sandwichesCustom[menuCategoriesId]];
    }
  }

  modalCardAddActive() {
    const modalCardList = document.querySelector("#size-selection");
    Object.values(modalCardList.children).forEach((el) => {
      if (el.className === "selected") {
        el.className = "disabled-modal";
      }
    });
  }

  modalCardAddDisable() {
    const modalCardList = document.querySelector("#size-selection");
    Object.values(modalCardList.children).forEach((el) => {
      const card = el;
      if (card.className === "disabled-modal") {
        card.className = "selected";
      }
    });
  }

  RestrictionOnAddProduct(menuModalElement) {
    const menuCategoriesId = menuModalElement[this.menuState.active].id;
    console.log(menuCategoriesId);
    if (this.sandwichesCustom[menuCategoriesId]) {
      const countCardActive = Object.keys(
        this.sandwichesCustom[menuCategoriesId]
      ).length;

      if (
        menuCategoriesId === "vegetables" ||
        menuCategoriesId === "fillings"
      ) {
        if (countCardActive === 3) {
          this.modalCardAddActive();
        } else {
          this.modalCardAddDisable();
        }
      } else if (countCardActive === 1) {
        this.modalCardAddActive();
      } else {
        this.modalCardAddDisable();
      }
    }
  }

  createOrderObj(i, foodName, foodPrice, menuCategoriesId, categoryMenuValue) {
    if (menuCategoriesId === "vegetables" || menuCategoriesId === "fillings") {
      console.log("OK", this.customSandwichesModal);
      this.customSandwichesModal.push({
        id: i,
        foodName,
        foodPrice,
        categoryMenuValue,
      });
    } else {
      this.customSandwichesModal = [
        {
          id: i,
          foodName,
          foodPrice,
          categoryMenuValue,
        },
      ];
    }

    this.selectCardActive[menuCategoriesId] = this.customSandwichesModal;
    this.sandwichesCustom = this.selectCardActive;
    console.log("11111", this.sandwichesCustom);
  }

  deleteFood(menuCategoriesId, idCard) {
    Object.values(this.sandwichesCustom[menuCategoriesId]).forEach(
      (element, index) => {
        if (element.id === idCard) {
          console.log("delete element", element.id, index);
          this.sandwichesCustom[menuCategoriesId].splice(index, 1);
          this.totalSummModal(menuCategoriesId);
        }
      }
    );
  }

  totalSummModal() {
    console.log(store.productsFromTheCurrentPage[this.idCard].price);
    this.summaModal = store.productsFromTheCurrentPage[this.idCard].price;
    for (let i = 0; i < Object.values(this.sandwichesCustom).length; i += 1) {
      for (
        let j = 0;
        j < Object.values(this.sandwichesCustom)[i].length;
        j += 1
      ) {
        this.summaModal += Object.values(this.sandwichesCustom)[i][j].foodPrice;
      }
    }
    store.modalSum = this.summaModal;
    store.orderModal = { ...this.sandwichesCustom };

    console.log("orderModal", store.orderModal);
    EventBus.publish("modalSum", this.summaModal);
  }

  addActiveModalCard(categoryMenuId) {
    if (Object.keys(this.sandwichesCustom).includes(categoryMenuId)) {
      this.sandwichesCustom[categoryMenuId].forEach((el) => {
        document.querySelector(`#id-modal-card-${el.id}`).className =
          "active-modal";
      });
    }
  }

  nextMenuItem(menuModalElement) {
    // eslint-disable-next-line no-unused-expressions
    this.menuState.active < menuModalElement.length - 1
      ? (this.setState = {
          ...this.menuState,
          active: this.menuState.active + 1,
        })
      : "";
    const categoryMenuId = menuModalElement[this.menuState.active].id;
    // const categoryMenuValue = menuModalElement[this.menuState.active].value;

    this.RestrictionOnAddProduct(menuModalElement);
    EventBus.publish("modalMenuId", categoryMenuId);

    this.addActiveModalCard(categoryMenuId);
    if (categoryMenuId === "ready") {
      EventBus.publish("modalRenderReady", this.sandwichesCustom);
      // EventBus.publish("modalSum2", this.summaModal);
    }
  }

  backMenuItem(menuModalElement) {
    // eslint-disable-next-line no-unused-expressions
    this.menuState.active > 0
      ? (this.setState = {
          ...this.menuState,
          active: this.menuState.active - 1,
        })
      : "";
    const categoryMenuId = menuModalElement[this.menuState.active].id;
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
    const newBtnBack = btnBack;
    const newBtnNext = btnNext;
    if (this.menuState.active > 0) {
      newBtnBack.style.display = "block";
    } else {
      newBtnBack.style.display = "none";
    }

    if (this.menuState.active < 5) {
      newBtnNext.style.display = "block";
    } else {
      newBtnNext.style.display = "none";
    }
  }

  menuActive() {
    const menuModalActive = document.querySelectorAll("#menu-modal input");
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

  deleteModalData() {
    document.querySelector("#modal-overlay").remove();
    this.selectCardActive = {};
    this.sandwichesCustom = {};
    this.customSandwichesModal = [];
    store.orderModal = {};
    this.summaModal = 0;
    this.resetMenuState();
  }

  consoleModal() {
    const closeModalOutOfRange = (e) => {
      if (e.target.id === "modal-content") {
        this.deleteModalData();
      }
    };
    if (document.querySelector("#modal-content") !== null) {
      document
        .querySelector("#modal-content")
        .addEventListener("click", closeModalOutOfRange);
    }
    const modalClose = document.querySelector("#close-modal");
    modalClose.addEventListener("click", () => {
      this.deleteModalData();
    });
  }
}

export default MainModal;
