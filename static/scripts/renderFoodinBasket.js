function renderFoodinBasket(order,cardItemHTML,orderID,resultSumma) {
    this.order = order;
    let summa=0
    for (let key in this.order) {
      let value = this.order[key];
      console.log('value: ', value);

      cardItemHTML = `
  <div class="order" id='order' data-order=${orderID}>
    <p>${value.name}</p> 
    <p>${value.amount}.шт</p>
   
  <div>
    <button id="delete_products" data-order=${orderID}>X</button>
  `
    }
    return cardItemHTML
  }