function renderModalDialog(
  selectSize,
  modalHtml,
  foodCategory,
  i,
  price_food,
  smmaPriceModal,
  categotyID,
  modalBottom
) {
  smmaPriceModal = smmaPriceModal + +price_food;
  /* for (let key in foodCategory) {
    const element = foodCategory[key];

     selectSize += ` 
                  <div class='selected' id = '${categotyID}' data-set='${i++}' ;>
                             <div class="background">
                                <image src="static/${element.image}"/>
                             
                                </div>
                                 <p style="margin-top: 0px;">${element.name}</p>
                                     <hr>
                                <p>${element.price} руб</p>
                               
                                 </div>
                                 
                                 `;
  } */

  modalHtml = `
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
                 <div id="modal-bottom" >
                   <p>Итого:${smmaPriceModal} руб</p>
                 </div> 
                      
                      </form>
                      
                      </dialog>
                      `;

  contentBox3.innerHTML += modalHtml;

  return contentBox3;
}

function renderModalDialog2(
  selectSize,
  modalHtml,
  foodCategory,
  i,
  price_food,
  smmaPriceModal,
  categotyID,
  size_selection,
  modalBottom
) {
  smmaPriceModal = smmaPriceModal + +price_food;
  for (let key in foodCategory) {
    const element = foodCategory[key];

    selectSize += ` 
           <div class='selected' id = '${categotyID}' data-set='${i++}' ;>
                      <div class="background">
                         <image src="static/${element.image}"/>
                      
                         </div>
                          <p style="margin-top: 0px;">${element.name}</p>
                              <hr>
                         <p>${element.price} руб</p>
                        
                          </div>
                          
                          `;
  }

  modalHtml = `
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
          <div id="modal-bottom" >
            <p>Итого:${smmaPriceModal} руб</p>
          </div> 
               
               </form>
               
               </dialog>
               `;

  let modalBottom2 = `
  <p>Итого:${smmaPriceModal} руб</p>`;

  modalHtml = `${selectSize} `;
  size_selection.innerHTML = modalHtml;
  modalBottom.innerHTML = modalBottom2;
  return size_selection, modalBottom;
}
