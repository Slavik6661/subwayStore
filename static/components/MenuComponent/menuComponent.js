import EventBus from "../../../component/pubSub";
import store from "../../store";

class Menu {
  arrMenu = [
    "Сэндвичи",
    "Бургеры",
    "Тортилья & Салаты",
    "Курица & Картофель",
    "Напитки & Десерты",
    "Пицца",
    "Шаурма",
  ];

  arrayCategory = [];

  #state = {
    isActive: 0,
  };

  constructor(content) {
    this.content = content;
  }

  /**
   * @param {{ isActive: number; }} newState
   */
  set stateSet(newState) {
    console.log("set state", newState);
    this.#state = newState;
    this.render();
  }

  rerender() {
    const menu = document.querySelector("#menu");
    menu.innerHTML = "";
    const html = this.render();
    menu.insertAdjacentHTML("afterbegin", html);
  }

  addActiveIndex(value) {
    this.stateSet = {
      isActive: value,
    };
  }

  render() {
    console.log("render menu", this.content);
    let html = "";
    for (const i in this.content.menu) {
      const categorys = this.content.menu[i].category;
      if (!this.arrayCategory.includes(categorys)) {
        this.arrayCategory.push(categorys);
      }
    }

    for (const i in this.arrayCategory) {
      html += /* html */ `
        <button id="${this.arrayCategory[i]}" value='${i}'
        class=${
          Number(this.#state.isActive) === Number(i) ? "active" : "no-active"
        }>${this.arrMenu[i]}</button>
      
       `;
    }

    return html;
  }

  eventlistener(html) {
    for (const i in this.arrayCategory) {
      html
        .querySelector(`#${this.arrayCategory[i]}`)
        .addEventListener("click", (e) => {
          this.addActiveIndex(e.target.value);
          EventBus.publish("menuValue", e.target.id);
          store.menuCategory = e.target.id;
        });
    }
  }
}

export default Menu;
