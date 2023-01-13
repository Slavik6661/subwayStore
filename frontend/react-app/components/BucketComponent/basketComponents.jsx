import React, { useEffect } from "react";
import { useSelector, useDispatch, useState } from "react-redux";
import "../../../static/style/basket.css";
import Order from "../BucketComponent/oredr.jsx";
const Busked = () => {
  const ordersArray = useSelector((state) => state.ordersArray);
  const dispatch = useDispatch();

  let totalSum = 0;
  ordersArray.map((order) => (totalSum += order.foodPrice * order.amountFood));

  return (
    <>
      <div className="basket-logo">
        <p>Корзина</p>
      </div>

      <div className="basket-body">
        <div className="basket-info">
          <p>Название</p>
          <p>Количество</p>
        </div>
        {ordersArray.map((order, id) => (
          <Order order={order} id={id} />
        ))}
        <p id="totalSumm">
          Итого: {ordersArray.length === 0 ? "0" : totalSum} руб
        </p>
        <button id="checkout" className="btn" type="submit">
          ОФОРМИТЬ ЗАКАЗ
        </button>
      </div>
    </>
  );
};
export default Busked;

// import EventBus from "../../../component/pubSub";
// import store from "../../store";

// class Bucket {
//   foodName = "";

//   amountFood = "";

//   foodPrice = 0;

//   htmlBasket = "";

//   orderHtml = "";

//   totalSum = "";

//   sumOrders = 0;

//   orderObj = {};

//   rootBasket = "";

//   html = "";

//   constructor() {
//     EventBus.subscribe("addFood", this.addProductInBasket.bind(this));
//     EventBus.subscribe(
//       "clickButtonAddBasketModal",
//       this.addModalOrder.bind(this)
//     );
//   }

//   addModalOrder(idCard) {
//     console.log(store.ordersArray);
//     this.foodName = store.productsFromTheCurrentPage[idCard].name;
//     this.amountFood = store.productsFromTheCurrentPage[idCard].weight;
//     this.foodPrice = store.modalSum;

//     this.orderObj = {
//       foodName: this.foodName,
//       amountFood: this.amountFood,
//       foodPrice: this.foodPrice,
//     };
//     store.ordersArray.push(this.orderObj);
//     this.updateRenderOrders();
//   }

//   addProductInBasket(i) {
//     this.foodName = store.productsFromTheCurrentPage[i].name;
//     this.amountFood = store.productsFromTheCurrentPage[i].weight;
//     this.foodPrice = store.productsFromTheCurrentPage[i].price;

//     this.orderObj = {
//       foodName: this.foodName,
//       amountFood: this.amountFood,
//       foodPrice: this.foodPrice,
//     };
//     store.ordersArray.push(this.orderObj);
//     console.log("store.ordersArray >>", store.ordersArray);
//     this.updateRenderOrders();
//   }

//   updateRenderOrders() {
//     this.rootBasket = document.querySelector("#basket-card");
//     this.sumOrders = 0;
//     this.orderHtml = "";
//     for (const key in store.ordersArray) {
//       const value = store.ordersArray[key];

//       this.orderHtml +=
//         /* html */
//         `
//     <div class="order" id='order-${key}'>
//       <div class="nameFood">
//       <p>${value.foodName}<wbr></p>
//       </div>

//       <div class="countFood">
//       <p>${value.amountFood}</p>
//       </div>
//       <div class="delete-products">
//       <button id="delete_products-${key}"class="delete-products-order"/>
//       </div>
//     </div>

//     `;
//     }

//     for (let i = 0; i < store.ordersArray.length; i += 1) {
//       this.sumOrders +=
//         store.ordersArray[i].amountFood * store.ordersArray[i].foodPrice;
//     }

//     this.totalSum = /* html */ `
//     <p id="totalSumm">Итого: ${this.sumOrders} руб</p>
//     <button id='checkout' class="btn" type="submit">ОФОРМИТЬ ЗАКАЗ</button>
//     `;
//     this.htmlBasket = /* html */ `
//          <div class="basket-logo">
//          <p>Корзина</p>
//        </div>
//        <div class="basket-body">

//             <div class="basket-info">
//               <p>Название</p>
//               <p>Количество</p>
//             </div>
//           ${this.orderHtml}
//           <hr />
//         ${this.totalSum}
//      </div>

//      `;

//     this.rootBasket.innerHTML = "";
//     this.rootBasket.insertAdjacentHTML("afterbegin", this.htmlBasket);
//     this.eventListener();
//     for (const i in store.ordersArray) {
//       this.rootBasket
//         .querySelector(`#delete_products-${i}`)
//         .addEventListener("click", () => {
//           this.deleteOrder(i);
//         });
//     }
//   }

//   deleteOrder(i) {
//     console.log("delete", i);
//     store.ordersArray.splice(store.ordersArray.length - 1, 1);
//     this.rootBasket.querySelector(`#order-${i}`).remove();
//     this.updateRenderOrders();
//   }

//   render() {
//     this.orderHtml = /* html */ `
//     <div class="order" id='order'>
//       <div class="nameFood">
//       <p>${this.foodName}<wbr></p>
//       </div>

//       <div class="countFood">
//       <p>${this.amountFood}</p>
//       </div>

//     </div>
//     `;

//     this.htmlBasket = /* html */ `
//          <div class="basket-logo">
//          <p>Корзина</p>
//        </div>
//        <div class="basket-body">

//             <div class="basket-info">
//               <p>Название</p>
//               <p>Количество</p>
//             </div>

//          <p id="totalSumm">Итого: 0 руб</p>
//          <button  id ='checkout' class="btn" type="submit">ОФОРМИТЬ ЗАКАЗ</button>
//        </div>
//      </div>

//      `;

//     return this.htmlBasket;
//   }

//   renderDialogOrder() {
//     this.html =
//       /* html */
//       `
// <div id ='loginForm-overlay'>
//     <dialog id='reg-form' class="login-form" open>

//         <div class='order-without-registration'>
//         <h1>Register Order</h1>
//         <label for="Phone"><b>Enter your Phone</b></label>
//         <input id="telNo" name="telNo" type="tel" sizes='12' maxlength="12"  placeholder="+7(...)"  />
//         <button type="submit" class="register-btn">Send</button>
//         </div>

//         <div class="container-signin">
//             <p>Already have an account? <button id='login'>Sign in</button>.</p>
//         </div>
//     </dialog>
// </div>

//   `;
//     return this.html;
//   }

//   closeFormLogin(loginForm, loginFormOverlay) {
//     loginFormOverlay.addEventListener("click", (e) => {
//       console.log(e.target.id);
//       if (e.target.id === "loginForm-overlay") {
//         loginForm.remove();
//         loginFormOverlay.remove();
//       }
//     });
//   }

//   orderWithoutReg(inputValue) {
//     console.log(inputValue.value);
//     const { ordersArray } = store;
//     const valueInput = inputValue.value;
//     fetch("http://localhost:3000/without-reg", {
//       method: "POST", // or 'PUT'
//       headers: {
//         "Content-Type": "application/json",
//       },

//       body: JSON.stringify({
//         data: ordersArray,
//         value: valueInput,
//       }),
//     })
//       .then((response) => {
//         console.log(response.status);

//         response.json();
//       })
//       .then((data) => {
//         console.log("Success:", data);
//       })
//       .catch((error) => {
//         console.log("Error:", error);
//       });
//   }

//   eventListener() {
//     const checkoutBtn = document.getElementById("checkout");
//     console.log("XXXX", checkoutBtn);

//     checkoutBtn.addEventListener("click", () => {
//       console.log(store.ordersArray);
//       if (store.ordersArray.length > 0) {
//         fetch("http://localhost:3000/addOrder", {
//           method: "POST", // or 'PUT'
//           headers: {
//             "Content-Type": "application/json",
//           },

//           body: JSON.stringify(store.ordersArray),
//         })
//           .then((response) => {
//             if (response.status === 200) {
//               response.json();
//             } else {
//               console.log("error", response.status);

//               document.body.insertAdjacentHTML(
//                 "afterbegin",
//                 this.renderDialogOrder()
//               );
//               const loginFormOverlay =
//                 document.querySelector("#loginForm-overlay");
//               const loginForm = document.querySelector("#reg-form");
//               const sendBtn = document.querySelector(".register-btn");
//               const inputValue = document.querySelector("#telNo");
//               sendBtn.addEventListener("click", () => {
//                 this.orderWithoutReg(inputValue);
//               });
//               this.closeFormLogin(loginForm, loginFormOverlay);
//             }
//           })
//           .then((data) => {
//             console.log("Success:", data);
//           })
//           .catch((error) => {
//             console.log("Error:", error);
//           });
//       } else {
//         console.error("Error: Order", store.ordersArray);
//       }
//     });
//   }
// }

// export default Bucket;

// {ordersArray.map((order, id) => (
//   <Order order={order} id={id} />
// ))}
