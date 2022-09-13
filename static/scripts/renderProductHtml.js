function renderListFood(content, htmlCatalog, contentBox3, i, typeProduct) {
  content.menu.forEach((element) => {
    if (element.category === typeProduct) {
      htmlCatalog += `
    
    <div id='food-card' data-set='${i++}'>
      <div id="logo-food"><img src=https://logos-marques.com/wp-content/uploads/2021/03/Subway-Logo-2048x1158.png></div>
      <div id="photo-food"> <img
        src="/static${element.image}">
      </div>
      <div id="discription-food">
        <p>${element.name}</p>
        <hr><a id="add-indigreen" href="#">${element.description}</a>
          <hr>
            <p>Цена:${element.price}</p><br>
          </div>
          <div id="buy-food">
            <p>Количество</p>
            <button type="button" id="add-food">+</button>
            <input type="number" id="amount-food" name="amount-food" value=${
              element.weight
            }  />
            <button type="button" id="delete-food">-</button><br>
              <button type="button" id="button-buy">В КОРЗИНУ</button>
          </div>
      </div>
    `;
    }
  });
  const html = `
      <ul class='products-list'>
        ${htmlCatalog}
        </ul> `;

  return (contentBox3.innerHTML = html);
}
