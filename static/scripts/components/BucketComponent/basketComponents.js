import EventBus from "../../../componentss/pubSub";
class Basket {
  foodName = "";
  amountFood = "";
  foodPrice = 0;
  htmlBasket = "";
  orderHtml = "";
  totalSum = "";
  sumOrders = 0;
  ordersArray = [];
  orderObj = {};

  constructor(rootBasket, rootCard2, content, contentRender) {
    this.rootBasket = rootBasket;
    this.rootCard2 = rootCard2;
    this.content = content;
    this.contentRender = contentRender;
    EventBus.subscribe("idCard", this.addProductInBasket.bind(this));
    this.render();
  }

  addProductInBasket(i) {
    console.log(this.content.menu);
    ////////////////Как иначе получить данные для цены ,количества //////////////////////////
    this.foodName = this.contentRender.querySelector(
      `#name-food-${i}`
    ).innerText;
    this.amountFood = parseInt(
      this.contentRender.querySelector(`#amount-food-${i}`).value
    );
    this.foodPrice = parseInt(
      this.contentRender.querySelector(`#price-${i}`).innerText.split(":")[1]
    );
    ///////////////////////////////////////////////////////////////////////////////
    this.orderObj = {
      foodName: this.foodName,
      amountFood: this.amountFood,
      foodPrice: this.foodPrice,
    };
    this.ordersArray.push(this.orderObj);
    console.log(this.ordersArray);
    this.updateRenderOrders(i);
  }

  updateRenderOrders(i) {
    this.sumOrders = 0;
    this.orderHtml = "";
    for (let key in this.ordersArray) {
      let value = this.ordersArray[key];

      this.orderHtml +=
        /*html*/
        `
    <div class="order" id='order-${key}'>
      <div class="nameFood">
      <p>${value.foodName}<wbr></p>
      </div>

      <div class="countFood">
      <p>${value.amountFood}</p>
      </div>
      <div class="delete-products">
      <button id="delete_products-${key}"class="delete-products-order"/>
      </div>

    </div>
    
    `;
    }

    for (let i = 0; i < this.ordersArray.length; i++) {
      this.sumOrders +=
        this.ordersArray[i].amountFood * this.ordersArray[i].foodPrice;
      console.log(typeof this.ordersArray[i].foodPrice);
    }
    console.log(parseInt(this.sumOrders));

    this.totalSum = /*html*/ `
    <p id="totalSumm">Итого: ${this.sumOrders} руб</p>
    <button class="btn" type="submit">ОФОРМИТЬ ЗАКАЗ</button>
    `;
    this.htmlBasket =
      /*html*/
      `
         <div class="basket-logo">
         <p>Корзина</p>
       </div>
       <div class="basket-body">

            <div class="basket-info">
              <p>Название</p>
              <p>Количество</p>
            </div>
          ${this.orderHtml}
          <hr />
        ${this.totalSum}
     </div>

     `;
    this.rootBasket.innerHTML = this.htmlBasket;

    for (let i in this.ordersArray) {
      this.rootBasket
        .querySelector(`#delete_products-${i}`)
        .addEventListener("click", (e) => {
          this.deleteOrder(i);
        });
    }
  }

  deleteOrder(i) {
    console.log("delete", i);
    this.ordersArray.splice(this.ordersArray.length - 1, 1);
    this.rootBasket.querySelector(`#order-${i}`).remove();
    this.updateRenderOrders();
  }

  render() {
    this.orderHtml =
      /*html*/
      `
    <div class="order" id='order'>
      <div class="nameFood">
      <p>${this.foodName}<wbr></p>
      </div>

      <div class="countFood">
      <p>${this.amountFood}</p>
      </div>
      
    </div>
    `;

    this.htmlBasket =
      /*html*/
      `
         <div class="basket-logo">
         <p>Корзина</p>
       </div>
       <div class="basket-body">
          
            <div class="basket-info">
              <p>Название</p>
              <p>Количество</p>
            </div>

        
         <p id="totalSumm">Итого: 0 руб</p>
         <button class="btn" type="submit">ОФОРМИТЬ ЗАКАЗ</button>
       </div>
     </div>
   
     `;
    this.rootBasket.innerHTML = this.htmlBasket;
  }
}

export default Basket;
