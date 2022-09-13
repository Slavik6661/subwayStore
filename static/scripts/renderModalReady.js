function renderModalReadyOrder(
  customBurger,
  selectSize,
  selectSize2,
  modalHtml,
  size_selection,
  food_img,
  name_food,
  smmaPriceModal,
  modalBottom,
  amount_food
) {
  console.log("modalBottom", modalBottom);

  for (let key in customBurger) {
    const element = `${key}: ${customBurger[key]}`;
    selectSize += `<p style="margin-top: 0px;">${element}</p>`;
  }

  selectSize2 = ` 
  <div class="img_food">
    <img src =${food_img} style=" background-color: white;
      border-radius: 100px;
      width: 165px;
      height: 166px;
      margin-top: 10px;">

    </div>
  <div class=info>
 
  <p style="margin-top: 0px;">Ваш сендвич готов!</p>
  <hr>
  <p style="margin-top: 0px;">${selectSize}
  <hr>
  <p>${name_food}</p>
  </div>
  `;

  modalHtml = `
     ${selectSize2} 
  `;

  let modalBottom2 = `
   <div class="select-amount_food">
    <p>Количество</p>
            <button type="button" id="add-foods">+</button>

            <input type="number" class="amount-foods-modal1"  id="amount-foods"
             name="amount-food" value=${amount_food}> </input>

            <button type="button" id="delet-foods">-</button><br>
            </div>

            <div class="smmaPrice">
    <p>Итого:${smmaPriceModal} руб </p>
    <button type="submit" id="button-add-basket"> В КОРЗИНУ</button>
    </div>`;

  window.addEventListener("click", (event) => {
    let counter = document.getElementById("amount-foods");
    console.log(event.target.id);

    if (event.target.id === "amount-foods") {
      event.target.addEventListener("input", (event) => {
        if (event.target.value > 999) {
          console.log(event.target.value);
          counter.value = 999;
          counter.innerText = counter.value;
        }

        if (event.target.value < 1) {
          console.log(event.target.value);
          counter.value = 1;
          counter.innerText = counter.value;
        }
      });
    }

    if (event.target.id === "add-foods") {
      if (counter.value < 999) {
        counter.innerText = counter.value++;
        console.log(counter);
      }
    }

    if (event.target.id === "delet-foods") {
      if (counter.value > 1) {
        counter.innerText = counter.value--;
        console.log(counter);
      }
    }
  });

  size_selection.innerHTML = modalHtml;
  modalBottom.innerHTML = modalBottom2;

  return size_selection, modalBottom;
}
//modalBottom
