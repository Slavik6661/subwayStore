function renderModalDialog(
  selectSize,
  modalHtml,
  priceFood,
  summaPriceModal,
  foodCategory,
  categoryMenu
) {
  summaPriceModal = summaPriceModal + +priceFood;
  // let i = 0;
  // for (let key in foodCategory) {
  //   const element = foodCategory[key];
  //   console.log("foodCategory", element);

  //   selectSize += /*html*/ `
  //          <div class='selected' id = '${categoryMenu}' data-setModal='${i++}'>
  //                     <div class="background">
  //                        <image src="static/${element.image}"/>

  //                        </div>
  //                         <p style="margin-top: 10px;">${element.name}</p>
  //                             <hr>
  //                        <p>${element.price} руб</p>

  //                         </div>

  //                         `;
  // }

  modalHtml = /*html*/ `
  <div class='modal-overlay'>
                  <dialog id="modal-content">
                    <div id="modal-top">
                      <input type="button" name="close-modal" id="close-modal" value="X"></input>
                    </div>
                    <form method="dialog" class='modal-form'>
                      <menu id="menu-modal">
                        <input type="button" id="sizes" class='active-modal-menu' value="Размер"></input>
                        <input type="button" id="breads"  class='no-active-modal-menu'  value="Хлеб"></input>
                        <input type="button" id="vegetables" class='no-active-modal-menu'   value="Овощи"></input>
                        <input type="button" id="sauces" class='no-active-modal-menu'  value="Соусы"></input>
                        <input type="button" id="fillings" class='no-active-modal-menu'  value="Начинка"></input>
                        <input type="button" id="ready" class='no-active-modal-menu'  value="Готово!"></input>
                      </menu>
                      <div class="button-next-Ingredients">
                      <input type="button" id="back"  value="< НАЗАД"></input>
                      <input type="button" id="next"  value="ВПЕРЕД >"></input>
                      
                       </div>
                       <div id="size-selection">
                         ${selectSize}
                       </div> 
                 <div id="modal-bottom" >
                   <p>Итого:${summaPriceModal + "render"} руб</p>
                 </div> 
                      
                      </form>
                      
                      </dialog>
                      </div>
                      `;

  contentFoods.innerHTML += modalHtml;

  return contentFoods;
}

function renderModalDialog2(
  selectSize,
  modalHtml,
  foodCategory,
  i,
  resultSummaModal,
  categoryID,
  sizeSelection,
  modalBottom,
  objActiveItemModal,
  addIngredients
) {
  resultSummaModal = sessionStorage.getItem(
    "resultSummaModal",
    resultSummaModal
  );
  console.log("resultSummaModal", resultSummaModal);
  // let amount = document.getElementById("amount-food");
  // console.log("amount", amount);
  // console.log("amount", amountFood);
  // amount.value = amountFood;
  // console.log("amount", amount.value);

  for (let key in foodCategory) {
    const element = foodCategory[key];
    selectSize += /*html*/ ` 
           <div class='selected' id = '${categoryID}' data-setmodal='${i++}'>
                      <div class="background">
                         <image src="static/${element.image}"/>
                      
                         </div>
                          <p style="margin-top: 10px;">${element.name}</p>
                              <hr>
                         <p>${element.price} руб</p>
                        
                          </div>
                          
                          `;
  }

  // modalHtml = /*html*/ `
  //          <dialog id="modal-content">
  //            <div id="modal-top">
  //              <input type="button" name="close-moala" id="close-moala" value="X"></input>
  //            </div>
  //            <form method="dialog">
  //              <menu id="menu-modal">
  //                <input type="button" id="sizes"  value="Размер"></input>
  //                <input type="button" id="breads"   value="Хлеб"></input>
  //                <input type="button" id="vegetables"   value="Овощи"></input>
  //                <input type="button" id="sauces"  value="Соусы"></input>
  //                <input type="button" id="fillings"  value="Начинка"></input>
  //                <input type="button" id="ready"  value="Готово!"></input>
  //              </menu>
  //              <div class="button-next-Ingredients">
  //              <input type="button" id="next"  value="ВПЕРЕД >"></input>
  //              </div>
  //               <div id="size-selection">
  //                 ${selectSize}
  //               </div>

  //              </form>
  //              <div id="modal-bottom" >
  //              <p>Итого:${resultSummaModal} руб</p>
  //            </div>
  //              </dialog>

  //              `;

  let modalBottom2 = `
  <p>Итого:${resultSummaModal} руб</p>`;

  modalHtml = `${selectSize} `;
  sizeSelection.innerHTML = modalHtml;
  modalBottom.innerHTML = modalBottom2;

  if (objActiveItemModal !== "undefined") {
    let selected = document.querySelectorAll(".selected");
    let categoryMenuName = event.target.value;

    if (Object.keys(objActiveItemModal).includes(categoryMenuName)) {
      selected.forEach((element, index) => {
        if (
          objActiveItemModal[categoryMenuName].includes(
            element.dataset.setmodal
          )
        ) {
          element.classList.remove("selected");
          element.classList.add("active-modal");
        }
      });

      if (categoryMenuName === "Начинка" || categoryMenuName === "Овощи") {
        if (addIngredients && addIngredients.ingredients.length === 3) {
          selected.forEach((element) => {
            if (element.className === "selected") {
              element.className = "selected disabled-modal";
            }
          });
        }
      }
    } else {
      return sizeSelection, modalBottom;
    }
    return sizeSelection, modalBottom;
  }
}
