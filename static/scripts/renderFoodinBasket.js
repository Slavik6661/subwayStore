function renderFoodInBasket(order, cardItemHTML, orderID, resultSumma) {
  let orderIDbtn = 0;
  this.order = order;

  for (let key in this.order) {
    let value = this.order[key];
    //console.log("value: ", value);

    cardItemHTML = /*html*/ `
  <div class="order" id='order' data-order=${orderID}>
    <div class="nameFood">
      <p>${value.name}<wbr></p> 
    </div>
    <div class="countFood">
      <p>${value.amount}.шт</p>
    </div>
    <button id="delete_products" data-order=${orderIDbtn}/>
  </div>
  `;
    orderIDbtn++;
  }
  return cardItemHTML;
}
