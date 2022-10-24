class Menu {
  root;
  #state = {
    isActive: 0,
  };

  constructor(root, arrMenu) {
    this.root = root;
    this.arrMenu = arrMenu;
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

  addActiveIndex(index) {
    this.stateSet = {
      isActive: index,
    };
  }

  render() {
    this.root.innerHTML = "";
    this.arrMenu.map((element, index) => {
      const html = /*html*/ `
        <button id="${index}" value='${element}' class=${
        Number(this.#state.isActive) === index ? "active" : "no-active"
      }>${element}</button>
        </nav>
        `;

      this.root.innerHTML += html;
    });

    this.root.addEventListener("click", (e) => {
      console.log(e.target.id);
      console.log(e.target.value);
      this.addActiveIndex(e.target.id);
    });
  }
}

const root = document.querySelector("#menu");

let arrMenu = [
  "Блины!!",
  "Шаурма",
  "Пицца",
  "Сэндвичи",
  "Бургеры",
  "Курица & Картофель",
  "Тортилья & Салаты",
  "Напитки & Десерты",
];

const button = new Menu(root, arrMenu);
