function renderModalDialog(selectSize, modalHtml, priceFood, summaPriceModal) {
  summaPriceModal = summaPriceModal + +priceFood;

  modalHtml = /*html*/ `
                  <dialog id="modal-content">
                    <div id="modal-top">
                      <input type="button" name="close-modal" id="close-modal" value="X"></input>
                    </div>
                    <form method="dialog">
                      <menu id="menu-modal">
                        <input type="button" id="sizes"  value="Размер"></input>
                        <input type="button" id="breads"   value="Хлеб"></input>
                        <input type="button" id="vegetables"   value="Овощи"></input>
                        <input type="button" id="sauces"  value="Соусы"></input>
                        <input type="button" id="fillings"  value="Начинка"></input>
                        <input type="button" id="ready"  value="Готово!"></input>
                      </menu>
                       <div id="size-selection">
                         ${selectSize}
                       </div> 
                 <div id="modal-bottom" >
                   <p>Итого:${summaPriceModal} руб</p>
                 </div> 
                      
                      </form>
                      
                      </dialog>
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
  priceFood
) {
  resultSummaModal = sessionStorage.getItem(
    "resultSummaModal",
    resultSummaModal
  );
  for (let key in foodCategory) {
    const element = foodCategory[key];

    selectSize += /*html*/ ` 
           <div class='selected' id = '${categoryID}' data-set='${i++}' ;>
                      <div class="background">
                         <image src="static/${element.image}"/>
                      
                         </div>
                          <p style="margin-top: 10px;">${element.name}</p>
                              <hr>
                         <p>${element.price} руб</p>
                        
                          </div>
                          
                          `;
  }

  modalHtml = /*html*/ `
           <dialog id="modal-content">
             <div id="modal-top">
               <input type="button" name="close-moala" id="close-moala" value="X"></input>
             </div>
             <form method="dialog">
               <menu id="menu-modal">
                 <input type="button" id="sizes"  value="Размер"></input>
                 <input type="button" id="breads"   value="Хлеб"></input>
                 <input type="button" id="vegetables"   value="Овощи"></input>
                 <input type="button" id="sauces"  value="Соусы"></input>
                 <input type="button" id="fillings"  value="Начинка"></input>
                 <input type="button" id="ready"  value="Готово!"></input>
               </menu>
                <div id="size-selection">
                  ${selectSize}
                </div> 
       
               </form>
               <div id="modal-bottom" >
               <p>Итого:${resultSummaModal} руб</p>
             </div> 
               </dialog>
               
               `;

  let modalBottom2 = `
  <p>Итого:${resultSummaModal} руб</p>`;

  //let modalBottom2.innerHTML = summaPriceModalHTML;

  modalHtml = `${selectSize} `;
  sizeSelection.innerHTML = modalHtml;
  modalBottom.innerHTML = modalBottom2;
  return sizeSelection, modalBottom;
}
