import card from "../scripts/components/cardFoodComponent.js";

class Content {
  htmlCardFood = "";

  constructor(rootCard, card) {
    this.rootCard = rootCard;
    this.card = card;
    this.render();
  }

  render() {
    let productsList = document.createElement("ul");
    productsList.id = "products-list";
    productsList.className = "products-list";
    productsList.innerHTML += this.card.cardFood();

    this.rootCard.appendChild(productsList);

    let childrenLength = this.rootCard.childNodes[0].children.length;

    for (let i = 1; i < childrenLength + 1; i++) {
      this.rootCard
        .querySelector(`#add-food-${i}`)
        .addEventListener("click", () => {
          let counter = this.rootCard.querySelector(`#amount-food-${i}`);
          counter.defaultValue = +counter.value + 1;
        });

      this.rootCard
        .querySelector(`#delete-food-${i}`)
        .addEventListener("click", () => {
          let counter = this.rootCard.querySelector(`#amount-food-${i}`);
          counter.defaultValue > 1
            ? (counter.defaultValue = +counter.value - 1)
            : "";
        });
    }
  }
}

const rootCard = document.querySelector("#contentFoods");
let cardFood = new Content(rootCard, card);

// const counter = document.querySelector("#counter");

// const rootCard = document.querySelector("#contentFoods");
// async function getResponse() {
//   let response = await fetch("http://myjson.dit.upm.es/api/bins/9np0");
//   let content = await response.json();
//   return content;
// }
// getResponse().then((content) => {
//   let counter = new Counter();
//   let card = new FoodCard(content, counter);

//   let cardFood = new Content(rootCard, card);
// });
