import EventBus from "../../../componentss/pubSub";
class Content {
  htmlCardFood = "";
  counter = 0;

  constructor(rootCard, card, modal) {
    this.rootCard = rootCard;
    this.card = card;
    this.modal = modal;
    EventBus.subscribe("menuValue", this.upRender.bind(this));
    this.render();
  }
  upRender(menuValue) {
    console.log("Render menuValue", menuValue);
    console.log(menuValue);
    if (menuValue === menuValue) {
      this.render(menuValue);
    }
  }

  render(menuValue) {
    console.log("renderContent");
    let productsList = document.createElement("ul");
    productsList.id = "products-list";
    productsList.className = "products-list";
    productsList.innerHTML = this.card.cardFood(menuValue).html;
    this.rootCard.innerHTML = "";
    this.rootCard.appendChild(productsList);

    let childrenLength = this.rootCard.childNodes[0].children.length;

    for (let i = 0; i < childrenLength; i++) {
      this.rootCard
        .querySelector(`#add-food-${i}`)
        .addEventListener("click", () => {
          this.counter = this.rootCard.querySelector(`#amount-food-${i}`);
          this.counter.defaultValue = +this.counter.value + 1;
          EventBus.publish("counterValue", +this.counter.value);
        });

      this.rootCard
        .querySelector(`#delete-food-${i}`)
        .addEventListener("click", () => {
          this.counter = this.rootCard.querySelector(`#amount-food-${i}`);
          this.counter.defaultValue > 1
            ? (this.counter.defaultValue = +this.counter.value - 1)
            : "";
          EventBus.publish("counterValue", +this.counter.value);
        });

      this.rootCard
        .querySelector(`#button-buy-${i}`)
        .addEventListener("click", (e) => {
          let menuSection = this.card.cardFood(menuValue).menuValue;
          if (menuSection === "sandwiches") {
            console.log("sandwiches");
            let foodImage = document.querySelector(`#photo-food-${i} img`).src;
            let foodName = document.querySelector(`#name-food-${i}`).innerText;
            EventBus.publish("cardInfo", i);
            console.log(foodImage, foodName);
            this.modal.render(foodImage);
          } else {
            EventBus.publish("idCard", i);
          }
        });
    }
  }
}

export default Content;

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
