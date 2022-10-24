function reloadingCartDataToClick(
  basketProducts,
  orderID,
  resultSummaBasketHTML
) {
  window.addEventListener("click", (e) => {
    if (e.target.id === "delete_products") {
      console.log(e.target.className.baseVal);
      resultSumma = sessionStorage.getItem("resultSumma");
      resultSumma = Number(resultSumma);

      basketProducts.innerHTML = "";
      resultSumma = 0;
      orderID = 0;
      localStorageOrder = JSON.parse(localStorage.getItem("order"));
      console.log("arrayOrder", localStorageOrder.length);
      if (localStorageOrder !== null) {
        basketProducts.innerHTML = "";
        localStorageOrder = JSON.parse(localStorage.getItem("order"));
        console.log("reloadingCartDataToClick", localStorageOrder);
        for (let key in localStorageOrder) {
          let value = localStorageOrder[key];
          console.log(value);

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
        sessionStorage.setItem("resultSumma", resultSumma);
        resultSumma = sessionStorage.getItem("resultSumma");
      }
      if (localStorageOrder.length === 0) {
        resultSumma = 0;
        resultSumma = sessionStorage.setItem("resultSumma", resultSumma);
        resultSumma = sessionStorage.getItem("resultSumma");
        resultSummaBasketHTML.innerText = `Итого: ${resultSumma} руб`;
        return resultSummaBasketHTML;
      }
      console.log("summa relod", resultSumma);
      resultSummaBasketHTML.innerText = `Итого: ${resultSumma} руб`;
    }
  });

  return { basketProducts };
}
{
  /* <div class="order" id='order'>
<p>${value.name}</p> 
<p>${value.amount}.шт</p>

<button id="delete_products" data-order=${orderID}>X</button>
<div> */
}
