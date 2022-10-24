function checkout() {
  let btn = document.getElementsByClassName("btn")[0];
  console.log(btn.className);
  btn.addEventListener("click", (e) => {
    const localStorageOrderString = localStorage.getItem("order");
    const localStorageOrders = JSON.parse(localStorageOrderString);
    if (e.target.className === "btn") {
      console.log(localStorageOrders.length);
      localStorageOrders.length !== 0
        ? alert("Заказ сформирован")
        : alert("Ваша корзина пуста :(");
    }
  });
}
