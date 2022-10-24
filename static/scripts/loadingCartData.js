function loadingCartData(basketProducts, resultSummaBasketHTML) {
  window.addEventListener("load", () => {
    resultSumma = sessionStorage.getItem("resultSumma");
    resultSumma = Number(resultSumma);
    resultSumma = 0;
    localStorageOrder = localStorage.getItem("order");
    localStorageOrder = localStorageOrder && JSON.parse(localStorageOrder);
    orderID = 0;
    if (localStorageOrder !== null) {
      for (let key in localStorageOrder) {
        let value = localStorageOrder[key];

        let cardItemHTML = /*html*/ `
        <div class="order" id='order'>
          <div class="nameFood">
          <p>${value.name}<wbr></p> 
          </div>
          <div class="countFood">
          <p>${value.amount}.шт</p>
          </div>

          <button id="delete_products" data-order=${orderID}>
          </button>

        </div>
          `;

        resultSumma = resultSumma + +value.price;
        basketProducts.innerHTML += `${cardItemHTML}<br>`;
        orderID++;
      }
      resultSumma = sessionStorage.setItem("resultSumma", resultSumma);
      resultSumma = sessionStorage.getItem("resultSumma");

      resultSummaBasketHTML.innerText = `Итого: ${resultSumma} руб`;
    }
    if (localStorageOrder && localStorageOrder.length === 0) {
      resultSumma = sessionStorage.getItem("resultSumma");
      resultSumma = 0;
      resultSumma = sessionStorage.setItem("resultSumma", resultSumma);
    }
  });
  return basketProducts;
}
{
  /* <div class="order" id='order'>
<p>${value.name}</p> 
<p>${value.amount}.шт</p>

<button id="delete_products" data-order=${orderID}>X</button>
<div> */
}
