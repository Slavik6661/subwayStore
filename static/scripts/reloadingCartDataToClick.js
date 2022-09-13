function reloadingCartDataToClick(basket_products, orderID, resultSumma) {
  let summa = 0;
  window.addEventListener("click", (e) => {
    if (e.target.id === "delete_products") {
      let summa = 0;
      basket_products.innerHTML = "";

      orderID = 0;
      if (localStorageOreder !== null) {
        basket_products.innerHTML = "";
        localStorageOreder = JSON.parse(localStorage.getItem("order"));
        for (let key in localStorageOreder) {
          let value = localStorageOreder[key];

          let cardItemHTML = /*html*/ `
          <div class="order" id='order'>
            <p>${value.name}</p> 
            <p>${value.amount}.шт</p>
            
            <button id="delete_products" data-order=${orderID}>X</button>
          <div>
          `;
          summa = summa + +value.price;
          basket_products.innerHTML += `${cardItemHTML}<br>`;
          orderID++;
        }
      } else {
        summa = 0;
        resultSumma.innerText = `Итого: ${summa} руб`;
      }
      console.log("summa relod", summa);
      resultSumma.innerText = `Итого: ${summa} руб`;
    }
  });

  return { basket_products };
}
