class FoodCard{

    render(){
        const html =
          /*html*/
          `
        <div id='food-card' data-set='${i}'>
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
                <button type="button" id="add-food-${i}">+</button>
                <input type="number" id="amount-food" name="amount-food" value=${
                  this.#state.counter
                } />
                <button type="button" id="delete-food">-</button><br>
                <button type="button" id="button-buy"  data='${
                  this.i
                }' >В КОРЗИНУ</button>
                </div>
          </div>
        `;
    }

}

let card = new FoodCard()