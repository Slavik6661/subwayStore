class Basket {
  root;
  i = 0;
  foodName = "";
  amountFood = "";
  htmlBasket = "";
  htmlOrder = "";
  addOrder;
  ordersArray = [];
  orderObj = {};

  constructor(rootBasket) {
    this.rootBasket = rootBasket;
    this.render();
  }
  // set stateSet(newState) {

  // }
  addProductInBasket(index) {
    this.foodName =
      index.closest("#food-card").children[2].children[0].innerText;
    console.log(this.foodName);

    this.amountFood =
      index.closest("#food-card").children[3].children[2].defaultValue;
    console.log(this.amountFood);

    // this.orderObj = { foodName: this.foodName, amountFood: this.amountFood };
    // this.ordersArray.push(this.orderObj);
    this.render();
  }

  render() {
    this.htmlOrder =
      /*html*/
      `
    <div class="nameFood">
    <p>${this.foodName}<wbr></p>
    </div>
    <div class="countFood">
    <p>${this.amountFood}</p>
    </div>
    <button id="delete_products"/>
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
         <div id ="basket" class="basket-products">
         <div class="order" id='order'>
       ${this.htmlOrder}
       </div>
         </div>
         <hr />
         <p id="totalSumm">Итого: 0 руб</p>
         <button class="btn" type="submit">ОФОРМИТЬ ЗАКАЗ</button>
       </div>
     </div>
   
     `;
    this.rootBasket.innerHTML = this.htmlBasket;

    window.addEventListener("click", (e) => {
      e.target.id === "button-buy" ? this.addProductInBasket(e.target) : "";
    });
  }
}
const rootBasket = document.querySelector("#basket-card");

let basket = new Basket(rootBasket);
