function deleteFood(orderID, resultSumma, basket_products) {
  localStorageOreder = localStorage.getItem("order");
  let array = [];
  let summa = 0;
  let idElement;
  localStorageOreder = JSON.parse(localStorageOreder);
  if (event.target.id === "delete_products") {
    idOrder = +event.target.dataset.order;
    idOrder = +idOrder;

    localStorageOreder.forEach((element, index) => {
      array.push(element);
    });

    array.splice(+idOrder, 1);

    console.log(array);
    localStorage.setItem("order", JSON.stringify(array));
    document.getElementById("order").remove();

    /////////////////////////////////////////////////////////////////
    /*   localStorageOreder = JSON.parse(localStorage.getItem("order"));
    orderID = 0;

    if (localStorageOreder !== null) {
      basket_products.innerHTML = "";
      for (let key in localStorageOreder) {
        let value = localStorageOreder[key];

        let cardItemHTML = `
    <div class="order" id='order'>
      <p>${value.name}</p> 
      <p>${value.amount}ШШ</p>
      
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

  return basket_products; */
  }
}
