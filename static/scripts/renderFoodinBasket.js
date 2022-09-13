function renderFoodInBasket(order, cardItemHTML, orderID, resultSumma) {
  orderIDbtn = 0;
  this.order = order;

  for (let key in this.order) {
    let value = this.order[key];
    console.log("value: ", value);

    cardItemHTML = `
  <div class="order" id='order' data-order=${orderID}>
    <p>${value.name}</p> 
    <p>${value.amount}.шт</p>
   
  <div>
    <button id="delete_products" data-order=${orderIDbtn}>X</button>
  `;
    orderIDbtn++;
  }
  return cardItemHTML;
}
