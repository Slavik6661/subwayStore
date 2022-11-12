import EventBus from "../../../componentss/pubSub";
class Menu {
  root;
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

  constructor(root, content) {
    this.root = root;
    this.content = content;
    this.render();
  }

  /**
   * @param {{ isActive: number; }} newState
   */
  set stateSet(newState) {
    console.log("set state", newState);
    this.#state = newState;
    this.render();
  }

  addActiveIndex(value) {
    this.stateSet = {
      isActive: value,
    };
  }

  render() {
    console.log("render menu");
    let html = "";
    this.root.innerHTML = "";
    for (let i in this.content.menu) {
      let category = this.content.menu[i].category;
      if (!this.arrayCategory.includes(category)) {
        this.arrayCategory.push(category);
      }
    }
    for (let i in this.arrayCategory) {
      html = /*html*/ `
        <button id="${this.arrayCategory[i]}" value='${i}'
        class=${
          Number(this.#state.isActive) === parseInt(i) ? "active" : "no-active"
        }>${this.arrMenu[i]}</button>
        </nav>
       `;
      this.root.innerHTML += html;
    }

    for (let i in this.arrayCategory) {
      this.root
        .querySelector(`#${this.arrayCategory[i]}`)
        .addEventListener("click", (e) => {
          this.addActiveIndex(e.target.value);
          EventBus.publish("menuValue", e.target.id);
        });
    }
  }
}

export default Menu;
