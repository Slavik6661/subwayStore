function deleteFood(orderID, resultSumma, basketProducts) {
  localStorageOrder = localStorage.getItem("order");
  let array = [];
  let summa = 0;
  let idElement;
  localStorageOrder = JSON.parse(localStorageOrder);
  if (event.target.id === "delete_products") {
    idOrder = +event.target.dataset.order;
    idOrder = +idOrder;

    localStorageOrder.forEach((element, index) => {
      array.push(element);
    });

    array.splice(+idOrder, 1);

    console.log(array);
    localStorage.setItem("order", JSON.stringify(array));
    document.getElementById("order").remove();
  }
}
