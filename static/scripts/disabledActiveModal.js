function disabledActiveModal(
  selected,
  element,
  addIngredients,
  modalCardElement,
  categoryMenu,
  objActiveItemModal,
  objPriceModalCard,
  summaPriceModalHTML,
  modalBottom,
  resultSummaModal,
  priceElementFoodModal
) {
  element.classList.remove("active-modal");
  element.classList.add("selected");

  function deleteActiveCardModal(
    addIngredients,
    categoryMenu,
    objActiveItemModal,
    summaPriceModalHTML,
    modalBottom,
    resultSummaModal,
    priceElementFoodModal
  ) {
    modalBottom = document.getElementById("modal-bottom");
    summaPriceModalHTML = "";
    summa = 0;
    localStorageOrderModal = JSON.parse(localStorage.getItem("customBurger"));
    let index = addIngredients.ingredients.indexOf(modalCardElement);
    addIngredients.ingredients.splice(index, 1);
    localStorageOrderModal[categoryMenu] = addIngredients.ingredients;
    localStorage.setItem(
      "customBurger",
      JSON.stringify(localStorageOrderModal)
    );
    index = objActiveItemModal[categoryMenu].indexOf(element.dataset.setmodal);
    objActiveItemModal[categoryMenu].splice(index, 1);
    sessionStorage.setItem("resultSummaModal", summa);
    console.log("new", objActiveItemModal);

    let indexPrice = objPriceModalCard[categoryMenu].indexOf(
      element.dataset.setmodal
    );
    objPriceModalCard[categoryMenu].splice(indexPrice, 1);

    console.log("new", objPriceModalCard);
    Object.entries(objPriceModalCard).forEach((element, index) => {
      element[1].forEach((el, index) => {
        summa += +el;
      });
    });
    sessionStorage.setItem("resultSummaModal", summa);
    bottomModalPrice(
      summaPriceModalHTML,
      modalBottom,
      resultSummaModal,
      priceElementFoodModal
    );
    console.log("new", summa);
  }
  deleteActiveCardModal(
    addIngredients,
    categoryMenu,
    objActiveItemModal,
    summaPriceModalHTML,
    modalBottom,
    resultSummaModal,
    priceElementFoodModal
  );
  console.log("addIngredients leng", addIngredients.ingredients);
  if (addIngredients.ingredients.length < 3) {
    selected.forEach((element) => {
      if (element.className === "selected disabled-modal") {
        element.className = "selected";
      }
    });
  }
}
