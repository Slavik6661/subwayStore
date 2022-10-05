function addIngredientsSandwiches(
  categoryMenu,
  localStorageOrderModal,
  modalCardElement,
  element,
  objActiveItemModal,
  priceElementFoodModal,
  objPriceModalCard,
  resultSummaModal,
  summaPriceModalHTML,
  modalBottom
) {
  let ingredients = [];
  activeIngredientModal = [];
  arrayPriceModalCard = [];
  let summa = 0;

  console.log(resultSummaModal);
  let modalCardElement1 = element.querySelectorAll("p");
  priceElementFoodModal = modalCardElement1[1].innerText.split(" ")[0];

  console.log(+priceElementFoodModal);
  localStorageOrderModal = JSON.parse(localStorage.getItem("customBurger"));
  SessionStorageActiveItemModal = JSON.parse(
    sessionStorage.getItem("SessionStorageActiveItemModal")
  );
  if (categoryMenu === "Начинка" || categoryMenu === "Овощи") {
    if (localStorageOrderModal[categoryMenu] === undefined) {
      ingredients.push(modalCardElement);
      localStorageOrderModal[categoryMenu] = ingredients;
      localStorage.setItem(
        "customBurger",
        JSON.stringify(localStorageOrderModal)
      );
      activeIngredientModal.push(element.dataset.setmodal);
      arrayPriceModalCard.push(priceElementFoodModal);

      console.log("activeIngredientModal", activeIngredientModal);
      console.log("arrayPriceModalCard", arrayPriceModalCard);

      objActiveItemModal[categoryMenu] = activeIngredientModal;
      objPriceModalCard[categoryMenu] = arrayPriceModalCard;
      /////////////////////////////////////////////////////////////////////////////////////
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
      /////////////////////////////////////////////////////////////////////////////////////
      return {
        ingredients: ingredients,
        objActiveItemModal: objActiveItemModal,
        objPriceModalCard: objPriceModalCard,
      };
    } else {
      localStorageOrderModal = JSON.parse(localStorage.getItem("customBurger"));
      ingredients = localStorageOrderModal[categoryMenu];
      ingredients.push(modalCardElement);
      localStorageOrderModal[categoryMenu] = ingredients;
      localStorage.setItem(
        "customBurger",
        JSON.stringify(localStorageOrderModal)
      );

      activeIngredientModal = objActiveItemModal[categoryMenu];
      activeIngredientModal.push(element.dataset.setmodal);

      console.log("activeIngredientModal", activeIngredientModal);
      objActiveItemModal[categoryMenu] = activeIngredientModal;

      arrayPriceModalCard = objPriceModalCard[categoryMenu];
      arrayPriceModalCard.push(priceElementFoodModal);

      console.log("arrayPriceModalCard", arrayPriceModalCard);
      objPriceModalCard[categoryMenu] = arrayPriceModalCard;
      /////////////////////////////////////////////////////////////////////////////////////
      Object.entries(objPriceModalCard).forEach((element, index) => {
        element[1].forEach((el, index) => {
          console.log("element", element[1]);
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
      /////////////////////////////////////////////////////////////////////////////////////
      return {
        ingredients: ingredients,
        objActiveItemModal: objActiveItemModal,
        objPriceModalCard: objPriceModalCard,
      };
    }
  } else {
    localStorageOrderModal[categoryMenu] = modalCardElement;
    localStorage.setItem(
      "customBurger",
      JSON.stringify(localStorageOrderModal)
    );
    activeIngredientModal.push(element.dataset.setmodal);
    console.log("activeIngredientModal", activeIngredientModal);
    objActiveItemModal[categoryMenu] = activeIngredientModal;

    arrayPriceModalCard.push(priceElementFoodModal);
    console.log("arrayPriceModalCard", arrayPriceModalCard);
    objPriceModalCard[categoryMenu] = arrayPriceModalCard;

    Object.entries(objPriceModalCard).forEach((element, index) => {
      summa += +element[1][0];
    });
    sessionStorage.setItem("resultSummaModal", summa);
    bottomModalPrice(
      summaPriceModalHTML,
      modalBottom,
      resultSummaModal,
      priceElementFoodModal
    );
  }
}
