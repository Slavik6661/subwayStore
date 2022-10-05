function renderListFood(content, htmlCatalog, contentFoods, i, typeProduct) {
  content.menu.forEach((element) => {
    if (element.category === typeProduct) {
      htmlCatalog += /*html*/ `
    
    <div id='food-card' data-set='${i++}'>
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
            <button type="button" id="add-food">+</button>
            <input type="number" id="amount-food" name="amount-food" value=${
              element.weight
            } />
              <button type="button" id="delete-food">-</button><br>
              <button type="button" id="button-buy">В КОРЗИНУ</button>
            </div>
      </div>
    `;
    }
  });
  const html = /*html*/ `
      <ul class='products-list'>
        ${htmlCatalog}
      </ul> `;

  return (contentFoods.innerHTML = html);
}
