function deleteFood(orderID, resultSumma, basketProducts) {
  const localStorageOrderString = localStorage.getItem("order");
  const localStorageOrders = JSON.parse(localStorageOrderString);

  if (event.target.id === "delete_products") {
    console.log("currentTarget", event.currentTarget.id);
    console.log("+++++");
    const idOrder = Number(event.target.dataset.order);
    localStorageOrders.splice(idOrder, 1);

    localStorage.setItem("order", JSON.stringify(localStorageOrders));
    document.getElementById("order").remove();
  }
}
