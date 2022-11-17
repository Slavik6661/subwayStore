import EventBus from "../../../componentss/pubSub";
import Counter from "../FoodCounterComponent/counterComponent";
import store from "../../store";
class FoodCardList {
  counter;
  //html = "";
  constructor(content, counter) {
    this.content = content;
    this.counter = counter;
    EventBus.subscribe("menuValue", this.cardFood.bind(this));
  }

  cardFood(menuValue) {
    menuValue === undefined ? (menuValue = "sandwiches") : menuValue;
    console.log("render cardFood 1", menuValue);
    let element;
    let idCard = 0;
    let html = "";
    this.counter.state.counter = 1;

    for (let i in this.content.menu) {
      element = this.content.menu[i];

      if (element.category === menuValue) {
        store.stateCounter.push(this.counter.state.counter);

        html +=
          /*html*/
          `
        <div id="food-card-${idCard}" class="food-card">
          <div id="logo-food">
          <img src=https://logos-marques.com/wp-content/uploads/2021/03/Subway-Logo-2048x1158.png></div>

          <div id="photo-food-${idCard}" class='photo-food'> 
          <div class='backgroundFood'>
          <img src="/static/${element.image}">
          </div>
          </div>

          <div id="description-food">
            <div id ='name-food-${idCard}',class='name-food' style="height: 73px;">
              <p>${element.name}</p>
            </div>
              <hr>

            <div class='ingredients1'style="height: 70px;">
              <a id="add-ingredients" href="#">${element.description}</a>
            </div>
              <hr>
                <div id='price-${idCard}'>
                    <p>Цена:${element.price}</p><br>
                </div>
              </div>
                  <div id="buy-food">
                  <p>Количество</p>
                  <div id='counter'>
                ${this.counter.render(idCard).innerHTML}
                  </div>
                  <button type="button" id="button-buy-${idCard}" class='button-buy'  data='${idCard}' >В КОРЗИНУ</button>
                  </div>
        </div>
        
        `;
        idCard++;
      }
    }
    console.log("render cardFood 2");
    console.log(store.stateCounter);
    return { html, menuValue };
  }
}

// async function getResponse() {
//   let response = await fetch("http://myjson.dit.upm.es/api/bins/9np0");
//   let content = await response.json();
//   return content;
// }
// getResponse().then((content) => {
//    let counter = new Counter();
//   let card = new FoodCard(content, counter);
// });
export default FoodCardList;
