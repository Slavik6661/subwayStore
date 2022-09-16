function loadingCartData(basketProducts, resultSummaBasketHTML) {
  let summa = 0;
  window.addEventListener("load", () => {
    resultSumma = sessionStorage.getItem("resultSumma");
    resultSumma = Number(resultSumma);
    localStorageOrder = localStorage.getItem("order");
    localStorageOrder = JSON.parse(localStorageOrder);
    orderID = 0;
    if (localStorageOrder !== null) {
      for (let key in localStorageOrder) {
        let value = localStorageOrder[key];

        let cardItemHTML = /*html*/ `
          <div class="order" id='order'>
            <p>${value.name}</p> 
            <p>${value.amount}</p>
            
            <button id="delete_products" data-order=${orderID}>X</button>
          <div>
          `;

        resultSumma = resultSumma + +value.price;
        basketProducts.innerHTML += `${cardItemHTML}<br>`;
        orderID++;
      }
      resultSumma = sessionStorage.setItem("resultSumma", resultSumma);
      resultSumma = sessionStorage.getItem("resultSumma");

      resultSummaBasketHTML.innerText = `Итого: ${resultSumma} руб`;
    }
    if (localStorageOrder.length === 0) {
      resultSumma = sessionStorage.getItem("resultSumma");
      resultSumma = 0;
      resultSumma = sessionStorage.setItem("resultSumma", resultSumma);
    }
  });
  return basketProducts;
}
