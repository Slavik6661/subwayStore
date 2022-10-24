class CardFood {
  root;
  i = 0;
  htmlCardFood = "";
  constructor(rootCard, button1) {
    this.rootCard = rootCard;
    this.button1 = button1;

    this.render();
  }

  render() {
    async function getResponse() {
      let response = await fetch("http://myjson.dit.upm.es/api/bins/9np0");
      let content = await response.json();
      return content;
    }
    getResponse().then((content) => {
      content.menu.forEach((element) => {
        this.htmlCardFood +=
          /*html*/
          `
        <div id='food-card' data-set='${this.i}'>
        <div id="logo-food">
        <img src=https://logos-marques.com/wp-content/uploads/2021/03/Subway-Logo-2048x1158.png></div>
        <div id="photo-food"> 
        <div class='backgroundFood'>
        
        <img src="/static${element.image}">
        </div>
        
        </div>
        <div id="description-food">
        <div class='name-food' style="height: 73px;">
            <p>${element.name}</p>
            </div>
            <hr>

            <div class='ingredients1'style="height: 70px;">
            <a id="add-ingredients" href="#">${element.description}</a>
            </div>
            <hr>
                <p>Цена:${element.price}</p><br>
                </div>
                <div id="buy-food">
                ${this.button1.render().innerHTML}
                </div>
              
        </div>
        `;

        this.i++;

        this.rootCard.innerHTML = this.htmlCardFood;

        this.rootCard
          .querySelector("#add-food")
          .addEventListener("click", () => {
            this.button1.increment();
          });

        this.rootCard
          .querySelector("#delete-food")
          .addEventListener("click", () => {
            this.button1.decrement();
          });
        // const counterFood = document.querySelector("#buy-food");
        // counterFood.appendChild(this.button1.render());
        // console.log(counterFood);
      });
      // <div id="buy-food">
      // <p>Количество</p>
      // <button type="button" id="add-food">+</button>
      // <input type="number" id="amount-food" name="amount-food" value=${element.weight} />
      // <button type="button" id="delete-food">-</button><br>
      // <button type="button" id="button-buy"  data='${this.i}' >В КОРЗИНУ</button>
      // </div>
    });
  }
}

class Button {
  htmlDiv = "";
  #state = {
    counter: 1,
  };

  constructor() {
    this.render();
  }

  /**
   * @param {{ counter: number; }} newState
   */
  set stateSet(newState) {
    console.log("set state", newState);
    this.#state = newState;
    this.render();
  }

  increment() {
    this.stateSet = {
      ...this.stateSet,
      counter: this.#state.counter + 1,
    };
    console.log(this.#state.counter);
  }

  decrement() {
    this.#state.counter > 1
      ? (this.stateSet = {
          ...this.stateSet,
          counter: this.#state.counter - 1,
        })
      : "";
  }

  render() {
    const html = /*html*/ `
    <p>Количество</p>
      <button type="button" id="add-food">+</button>
      <input type="number" id="amount-food" name="amount-food" value=${
        this.#state.counter
      } />
      <button type="button" id="delete-food">-</button><br>
      <button type="button" id="button-buy"  data='${
        this.i
      }' >В КОРЗИНУ</button>
    
    `;
    this.htmlDiv = document.createElement("div");
    //this.htmlDiv.className = "counter";
    this.htmlDiv.innerHTML = html;

    this.htmlDiv
      .querySelector("#add-food")
      .addEventListener("click", this.increment.bind(this));

    this.htmlDiv
      .querySelector("#delete-food")
      .addEventListener("click", this.decrement.bind(this));

    return this.htmlDiv;
  }
}

// const counter = document.querySelector("#counter");

const button1 = new Button();

const rootCard = document.querySelector("#products-list");

let cardFood = new CardFood(rootCard, button1);
