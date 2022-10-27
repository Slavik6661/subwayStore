import counter from "../scripts/components/counterComponent.js";
class FoodCard {
  html = "";

  constructor(content, counter) {
    this.content = content;
    this.counter = counter;
  }

  cardFood() {
    let foodCard;
    let htmlContent;
    for (let [i, element] of Object.entries(this.content.menu).splice(1, 3)) {
      foodCard = document.createElement("div");
      foodCard.id = `food-card-${i}`;
      foodCard.className = "food-card";

      htmlContent = document.createElement("div");
      htmlContent.id = `food-card-${i + i}`;
      htmlContent.className = "food-card";

      this.html +=
        /*html*/
        `
        <div id="food-card-${i}" class="food-card">
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
                <p>Количество</p>
                <div id='counter'>
              ${this.counter.render().innerHTML}
                </div>
                <button type="button" id="button-buy"  data='${i}' >В КОРЗИНУ</button>
                </div>
                </div>
        
        `;
    }

    return this.html;
  }
}

async function getResponse() {
  let response = await fetch("http://myjson.dit.upm.es/api/bins/9np0");
  let content = await response.json();
  return content;
}
getResponse().then((content) => {
  // let counter = new Counter();
  let card = new FoodCard(content, counter);
});
export default card;
