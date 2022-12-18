import Counter from "../FoodCounterComponent/counterComponent";

class FoodCard {
  counter;

  constructor() {
    this.counter = new Counter();
  }

  render(idCard, element) {
    let html = "";
    html +=
      /* html */
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
          <div id ='name-food-${idCard}',class='name-food'>
            <p>${element.name}</p>
          </div>
            <hr>

          <div class='ingredients1'>
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
              ${this.counter.render(idCard)}
                </div>
                <button type="button" id="button-buy-${idCard}" class='button-buy'  data='${idCard}' >В КОРЗИНУ</button>
                </div>
      </div>
      
      `;
    return html;
  }
}
export default FoodCard;
