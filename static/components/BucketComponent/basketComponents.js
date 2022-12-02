import EventBus from "../../../componentss/pubSub";
import store from "../../store";

class Bucket {
  foodName = "";

  amountFood = "";

  foodPrice = 0;

  htmlBasket = "";

  orderHtml = "";

  totalSum = "";

  sumOrders = 0;

  orderObj = {};

  rootBasket = "";

  constructor() {
    EventBus.subscribe("addFood", this.addProductInBasket.bind(this));
    EventBus.subscribe(
      "clickButtonAddBasketModal",
      this.addModalOrder.bind(this)
    );
  }

  addModalOrder(idCard) {
    console.log(store.ordersArray);
    this.foodName = store.productsFromTheCurrentPage[idCard].name;
    this.amountFood = store.productsFromTheCurrentPage[idCard].weight;
    this.foodPrice = store.modalSum;

    this.orderObj = {
      foodName: this.foodName,
      amountFood: this.amountFood,
      foodPrice: this.foodPrice,
    };
    store.ordersArray.push(this.orderObj);
    this.updateRenderOrders();
  }

  addProductInBasket(i) {
    this.foodName = store.productsFromTheCurrentPage[i].name;
    this.amountFood = store.productsFromTheCurrentPage[i].weight;
    this.foodPrice = store.productsFromTheCurrentPage[i].price;

    this.orderObj = {
      foodName: this.foodName,
      amountFood: this.amountFood,
      foodPrice: this.foodPrice,
    };
    store.ordersArray.push(this.orderObj);
    console.log(store.ordersArray);
    this.updateRenderOrders();
  }

  updateRenderOrders() {
    this.rootBasket = document.querySelector("#basket-card");
    this.sumOrders = 0;
    this.orderHtml = "";
    for (const key in store.ordersArray) {
      const value = store.ordersArray[key];

      this.orderHtml +=
        /* html */
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

    for (let i = 0; i < store.ordersArray.length; i += 1) {
      this.sumOrders +=
        store.ordersArray[i].amountFood * store.ordersArray[i].foodPrice;
    }

    this.totalSum = /* html */ `
    <p id="totalSumm">Итого: ${this.sumOrders} руб</p>
    <button class="btn" type="submit">ОФОРМИТЬ ЗАКАЗ</button>
    `;
    this.htmlBasket = /* html */ `
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

    this.rootBasket.innerHTML = "";
    this.rootBasket.insertAdjacentHTML("afterbegin", this.htmlBasket);
    for (const i in store.ordersArray) {
      this.rootBasket
        .querySelector(`#delete_products-${i}`)
        .addEventListener("click", () => {
          this.deleteOrder(i);
        });
    }
  }

  deleteOrder(i) {
    console.log("delete", i);
    store.ordersArray.splice(store.ordersArray.length - 1, 1);
    this.rootBasket.querySelector(`#order-${i}`).remove();
    this.updateRenderOrders();
  }

  render() {
    this.orderHtml = /* html */ `
    <div class="order" id='order'>
      <div class="nameFood">
      <p>${this.foodName}<wbr></p>
      </div>

      <div class="countFood">
      <p>${this.amountFood}</p>
      </div>
      
    </div>
    `;

    this.htmlBasket = /* html */ `
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
    return this.htmlBasket;
  }
}

export default Bucket;
