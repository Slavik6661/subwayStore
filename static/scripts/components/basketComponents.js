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

  constructor(rootBasket, rootCard2) {
    this.rootBasket = rootBasket;
    this.rootCard2 = rootCard2;
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
    console.log("render");
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
          <div class="nameFood">
          <p>${this.foodName}<wbr></p>
          </div>

          <div class="countFood">
          <p>${this.amountFood}</p>
          </div>
         </div>
         <hr />
         <p id="totalSumm">Итого: 0 руб</p>
         <button class="btn" type="submit">ОФОРМИТЬ ЗАКАЗ</button>
       </div>
     </div>
   
     `;
    this.rootBasket.innerHTML = this.htmlBasket;
    let contentFoods = document.body.children[0].children[2].children[0];

    console.log(this.rootCard2.querySelector("#button-buy"));

    this.rootBasket
      .querySelector("#button-buy")
      .addEventListener("click", (e) => {
        e.target.id === "button-buy" ? this.addProductInBasket(e.target) : "";
      });
  }
}
// const rootBasket = document.querySelector("#basket-card");
// const rootCard2 = document.querySelector("#products-list");
// let basket = new Basket(rootBasket, rootCard2);
