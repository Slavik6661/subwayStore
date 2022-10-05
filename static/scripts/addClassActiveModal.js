function addClassActiveModal(selected, element, categoryMenu, addIngredients) {
  let activeItemModal = {};
  let activeIngredientModal = [];
  if (categoryMenu === "Начинка" || categoryMenu === "Овощи") {
    if (element.className === "active-modal") {
      element.classList.remove("active-modal");
      element.classList.remove("disabled-modal");
      element.classList.add("selected");
      element.classList.add("enabled-modal");
    } else {
      element.classList.remove("disabled-modal");
      element.classList.add("selected");
      element.classList.add("enabled-modal");
      element.className = "active-modal";
    }
  } else {
    if (categoryMenu !== "Начинка" || categoryMenu !== "Овощи") {
      if (element.className === "selected") {
        element.classList.remove("selected");
        element.classList.add("active-modal");

        //console.log(priceElementFoodModal);
      } else {
        // element.classList.remove("selected");
        // element.classList.add("active-modal");
      }
    }
  }
  if (addIngredients && addIngredients.ingredients.length === 3) {
    selected.forEach((element) => {
      if (element.className === "selected") {
        element.className = "selected disabled-modal";
      }
    });
  }
}
// if (element.className === "active-modal") {
//   console.log("element.className", element.className);
//   selected.forEach((element) => {
//     element.classList.remove("active-modal");
//     element.className = "selected";
//   });
